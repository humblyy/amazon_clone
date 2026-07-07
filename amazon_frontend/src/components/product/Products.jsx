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
        console.log(err, "cannot fetch");
        setIsLoading(false)
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
               cartButton={true}
                
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