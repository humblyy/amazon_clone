import React, { useReducer } from 'react'
import { Rating } from "@mui/material";
import FormattedCurrency from '../../FormattedCurrency/FormattedCurrency'
import classes from "./singleProduct.module.css"
import { Cartcontext } from '../../contextProvider/ContextProvider';
import { useContext } from 'react';
import { type } from '../../../Action/CartActions';



function SingleProduct({productData,flex,cartButton}) {
    // if(productData){
// console.log(productData)
// console.log(type)
  const { image, title, id, rating, price,description } = productData;

const[state,dispatch]=useContext(Cartcontext)
console.log(state.basket)

const addToCart=()=>{
    dispatch({
      type: type.ADD_TO_CART,
      item: { image, title, id, rating, price, description },
      
    });
    
}


  return (
    <div className={`${classes.cardContainer} ${flex?classes.flexed:''}`}>
            <a href={`/products/${id}`}>
                <img src={image} alt="" />
            </a>
      <div>
            <h3>
            {title}
            {/* title */}
            </h3>

                {flex&&<div style={{maxWidth:"650px"}}>   
            {description}
            {/* description */}
            </div>}
            
            <div className={classes.rating}>

                {/* rating */}
                <Rating value={rating?.rate} precision={0.1} />
                {/* rating number */}
                <small>{rating?.count}</small>

            </div>

             <div >
                {/* price */}
                <FormattedCurrency amount={price} />
            </div>

          {
            cartButton &&  <button className={classes.btn} onClick={addToCart}>add to cart</button>
          }

      </div>


    </div>
  );
    // }
  
   
}

export default SingleProduct