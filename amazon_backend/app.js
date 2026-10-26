
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});


app.post("/payment/create", async (req, res) => {
  try {
    const total_price = Number(req.query.total_price);

    if (!Number.isFinite(total_price) || total_price <= 0) {
      return res.status(400).json({
        message: "Total price must be greater than 0",
      });
    }

   
    const amount = Math.round(total_price * 100);

    const payment_intent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    return res.status(200).json({
      clientSecret: payment_intent.client_secret,
    });
  } catch (error) {
    console.error("Stripe payment error:", error.message);

    return res.status(500).json({
      message: "Unable to create payment",
    });
  }
});


app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
