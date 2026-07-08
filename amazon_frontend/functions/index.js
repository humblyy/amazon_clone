// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// // const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");

// // For cost control, you can set the maximum number of containers that can be
// // running at the same time. This helps mitigate the impact of unexpected
// // traffic spikes by instead downgrading performance. This limit is a
// // per-function limit. You can override the limit for each function using the
// // `maxInstances` option in the function's options, e.g.
// // `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// // NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// // functions should each use functions.runWith({ maxInstances: 10 }) instead.
// // In the v1 API, each function can only serve one request per container, so
// // this will be the maximum concurrent request count.


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });


// //code starts here
// const express=require("express")
// const dotenv=require("dotenv")
// dotenv.config()
// const cors=require("cors")
// // const stripe=require("stripe")(process.env.STRIPE_KEY)

// const app=express()
// // setGlobalOptions({ maxInstances: 10 });
// app.use(cors({origin:true}))
// app.use(express.json())


// //get request from react
// app.get('/',(req,res)=>{
  
//     res.status(200).json({
//         message:"success"
//     })
// })


// //post request price is sent from basket
// app.post('/payment/create',async(req,res) => {
// const stripe=require("stripe")(process.env.STRIPE_KEY)
//     const total= parseInt(req.query.total);
//     if(total>0){
//         // console.log("received",total)
//         //    res.send(total)

//         const payment_intent=await stripe.paymentIntents.create({
//             amount:total,
//             currency:"usd"
//         })
//         // res.status(200).json(payment_intent)
//         res.status(200).json({
//             clientSecret:payment_intent.client_secret
//         })
//     }
//     else{
//           res.status(403).json({
//             message:"total price must be greater than 0"
//           })
//     }

// })



// exports.api=onRequest(app)