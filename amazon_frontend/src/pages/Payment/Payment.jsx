import React from 'react'
import classes from "./payment.module.css"
import { useContext } from 'react';
import { Cartcontext } from '../../components/contextProvider/ContextProvider';
import SingleProduct from "../../components/product/singleProduct/SingleProduct"
import { useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import { useState } from 'react';
import FormattedCurrency from '../../components/FormattedCurrency/FormattedCurrency';
import axiosInstance from "../../Api/axios";
import {ClipLoader } from "react-spinners"  //for loading effect
import { db } from '../../Action/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { type } from '../../Action/CartActions';

function Payment() {

  // grab total amount of selected items
const [{user,basket},dispatch]=useContext(Cartcontext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
//using react stripe
const elements=useElements()
const stripe=useStripe()
//handle card error
const [cardError,setCardError]=useState("")
const error_handler=(e)=>{
  console.log(e)
  e?.error?.message?setCardError(e.error.message):setCardError("")
}

//handle total price and display on payment page
  const total=basket.reduce((amount,item)=>{
    return item.price * item.amount + amount 
  },0)


  //loading effect
  const [transactionProccessing,setTransactionProccessing]=useState(false)

  const navigate=useNavigate()

//control the payment contact backend,client confirm on react,store on order or database,clear basket
//contact backend fetch data

const payment_functionality=async(e)=>{
  e.preventDefault()
  console.log("form submitted")

try {
  setTransactionProccessing(true)
  const res=await axiosInstance({
    method:"POST",
  url:`/payment/create?total=${total*100}`
  })
  console.log(res.data)
  //we get client_secret
  const clientSecret=res.data?.clientSecret
//then confirmation
const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement)
  }
});
//now transaction is confirmed
// console.log(paymentConfirmation)

//adding to firestore database
await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id),
  {
    basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created,
  }
);

// await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
//   basket:basket,
//   amount:paymentIntent.amount,
//   created:paymentIntent.created
// })

// after storing to database clear the database
dispatch({type:type.CLEAR_BASKET})

setTransactionProccessing(false)

//after finishing payment go to orders page 
navigate('/orders',{state:{message:"you have placed new order"}})

} catch (error) {
  console.log(error)
  setTransactionProccessing(false)
}
}
  return (
    <section>
      {/* header text */}
      <h4 className={classes.payment_header}> Checkout ({totalItem}) items</h4>
      {/*display payment methods */}
      <div className={classes.payment_method}>
        {/* address */}
        <div className={classes.address}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>293 developers</div>
            <div>Addis Ababa,Ethiopia</div>
          </div>
        </div>
        <hr />
        {/*  display selected products*/}
        <div className={classes.item}>
          <h3> Review Item and Delivery</h3>
          <div className={classes.title}>
            {basket?.map((item, index) => {
              return (
                <SingleProduct key={index} productData={item} flex={true}/>
              );
            })}
          </div>
        </div>
        <hr />
        {/* card number */}
        <div className={classes.card_container}>
          <h3>Payment methods</h3>
          <div className={classes.card_number}>
            <div>
              <form onSubmit={payment_functionality}>
                <CardElement onChange={error_handler} />

                {cardError && (
                  <p style={{ color: "#C10115", paddingTop: "5px" }}>
                    {cardError}
                  </p>
                )}
                {/* total price */}
              
                  <div className={classes.price}>
                  <p style={{display:"flex",gap:'8px'}}><span>Total Orders |</span> <FormattedCurrency amount={total}/></p>
                    <button type='submit'>
                    {
                     transactionProccessing?(
                      <div className={classes.loader}>
                        <ClipLoader size={14.5}/>
                        <p>please wait ...</p>
                      </div>
                     ):"Pay Now"
                    }
                    
                      </button>
                  
                  
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment