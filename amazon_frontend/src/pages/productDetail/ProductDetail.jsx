import React, { useEffect, useState } from 'react'
import SingleProduct from '../../components/product/singleProduct/SingleProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import LoadingEffect from '../../components/loadingEffect/LoadingEffect'

function ProductDetail() {
    
const [isLoading,setIsLoading]=useState(false)

const {productId}=useParams()
// console.log(productId)
const [product_data,setProduct_Data]=useState({})

useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
        setIsLoading(false)
        setProduct_Data(res.data)
        // console.log(res.data)
    })
    .catch((error)=>{
        setIsLoading(false)
        console.log(error,"cannot fetch")})
},[])

  return (
    <> 
        {isLoading?<LoadingEffect/>: <SingleProduct 
        productData={product_data}
        flex={true}
       cartButton={true}
        />
        }

    </>
  )
}

export default ProductDetail