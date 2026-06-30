import React, { useEffect, useState } from 'react'
import axios from "axios"
import SingleProduct from './singleProduct/SingleProduct'
import classes from "./products.module.css"
import LoadingEffect from '../loadingEffect/LoadingEffect'


function Products() {

const [isLoading,setIsLoading]=useState(false)
const [product,setProduct]=useState()

useEffect(()=>{
  setIsLoading(true)
    axios.get("https://fakestoreapi.com/products")
      .then((res) =>{ 
        setProduct(res.data)
        setIsLoading(false);
      }) 
      .catch((err) => {
        setIsLoading(false)
        console.log(err, "cannot fetch");
      });
},[])

  return (
    <>
      {isLoading ? (<LoadingEffect />):(
        <section>
          <div className={classes.productContainer}>
            {product?.map((oneProduct) => {
              return (
                <SingleProduct
                  productData={oneProduct}
                  key={oneProduct.id}
                
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Products