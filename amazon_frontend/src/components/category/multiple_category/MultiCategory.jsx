import React from 'react'
import { categoryInfo } from '../categoryInfo'
import SingleCategory from "../singlecategory/SingleCategory"
import classes from "./multi_category.module.css"
function MultiCategory() {
  return (
    <div className={classes.container}>
       
{
    categoryInfo.map((singleData)=>{
         return <SingleCategory  data={singleData} key={singleData.name}/>
    })
}

    </div>
  )
}

export default MultiCategory