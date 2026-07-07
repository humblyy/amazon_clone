import React, { useState } from 'react'
import { useEffect,useContext } from 'react'
import { db } from '../../Action/firebase'
import { Cartcontext } from '../../components/contextProvider/ContextProvider'
import classes from "./order.module.css"
// import { doc, setDoc } from 'firebase/firestore'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import SingleProduct from '../../components/product/singleProduct/SingleProduct'
import LoadingEffect from '../../components/loadingEffect/LoadingEffect'

function Orders() {
const [isLoading,setIsLoading]=useState(false)
const [{user},dispatch]=useContext(Cartcontext)
const [orders,setOrders]=useState([])

useEffect(()=>{
  setIsLoading(true)
if(user){

// db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").
// onSnapshot((snapshot)=>{
// console.log(snapshot)
// setOrders(snapshot.docs.map((singleDoc)=>(
// {id:singleDoc.id,
// data:singleDoc.data()}
// )))
// })

const ordersRef = collection(db, "users", user.uid, "orders");
const q = query(ordersRef, orderBy("created", "desc"));

onSnapshot(q, (snapshot) => {
  console.log(snapshot)
    // id: doc.id,
    // ...doc.data(),
    setOrders(snapshot.docs.map((singleDoc)=>(
      {id:singleDoc.id,
        data:singleDoc.data()
      }
    )))


setIsLoading(false)
      })

    }



    
    else{
setOrders([])
    setIsLoading(false)

  }
  },[user])


  return (
    <>
      {isLoading ? (
        <LoadingEffect />
      ) : (
        <div className={classes.outer_container}>
          <div className={classes.inner_container}>
            <h2>Your Orders</h2>
            {orders.length == 0 && <div>you have not order yet</div>}
            {/* render user orders */}
            <div>
              {orders?.map((singleOrder, index) => {
                return (
                  <div key={index} className={classes.order_image}>
                    {index !== 0 && <hr />}

                    <h4 style={{ fontWeight: "30px" }}>
                      Order ID:{singleOrder?.id}
                    </h4>

                    {singleOrder?.data?.basket?.map((singleData, index) => {
                      return (
                        <SingleProduct
                          key={index}
                          productData={singleData}
                          flex={true}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Orders