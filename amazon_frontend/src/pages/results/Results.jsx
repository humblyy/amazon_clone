import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endPoint'
import axios from 'axios'
import classes from "./results.module.css"
import SingleProduct from '../../components/product/singleProduct/SingleProduct'
import LoadingEffect from '../../components/loadingEffect/LoadingEffect'



function Results() {
    const [isLoading,setIsLoading]=useState(false)
    const [results,setResults]=useState()
    const {categoryName}=useParams()
    useEffect(()=>{
setIsLoading(true)
axios.get(`${productUrl}/products/category/${categoryName}`)
.then((res)=>{
    setIsLoading(false)
    setResults(res.data)
})
.catch((error)=>{
    setIsLoading(false)
    console.log(error,"cannot fetch")
})
    },[])
  return (
    <>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> category /{categoryName}</p>
        <hr />
        {isLoading ? (<LoadingEffect />) : (<div className={classes.productContainer}>
            {results?.map((product) => {
              return <SingleProduct 
              productData={product} 
              key={product.id} 
             cartButton={true}
              />;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Results