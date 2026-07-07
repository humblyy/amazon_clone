





//code starts here
const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const stripe=require("stripe")(process.env.STRIPE_KEY)

const app=express()
app.use(cors({origin:true}))
app.use(express.json())


//get request from react
app.get('/',(req,res)=>{
  
    res.status(200).json({
        message:"success"
    })
})

//post request price is sent from basket
app.post('/payment/create',async(req,res) => {
    const total_price=req.query.total_price
    if(total_price>0){
        // console.log("received",total)
        //    res.send(total)

        const payment_intent=await stripe.paymentIntents.create({
            amount:total_price,
            currency:"usd"
        })
        // res.status(200).json(payment_intent)
        res.status(200).json({
            clientSecret:payment_intent.client_secret
        })
    }
    else{
          res.status(404).json({
            message:"total price must be greater than 0"
          })
    }

})


app.listen(3000,(err)=>{
    if(err) throw err
    else{
        console.log("server is running at http://localhost:3000")
    }
})