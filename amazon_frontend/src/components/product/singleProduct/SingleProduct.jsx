import React from 'react'
import { Rating } from "@mui/material";
import FormattedCurrency from '../../FormattedCurrency/FormattedCurrency'
import classes from "./singleProduct.module.css"


function SingleProduct({productData,flex}) {
    // if(productData){
console.log(productData)
  const { image, title, id, rating, price,description } = productData;

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

            <button className={classes.btn}>add to cart</button>

      </div>


    </div>
  );
    // }
  
   
}

export default SingleProduct