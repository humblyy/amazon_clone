import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./single_category.module.css"
function SingleCategory({data}) {

  return (
    <div className={classes.container}>
        
        <Link to={`/category/${data.name}`}>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imageLink} alt="" />
            <p>Shop now</p>

        </Link>


    </div>
  )
}

export default SingleCategory