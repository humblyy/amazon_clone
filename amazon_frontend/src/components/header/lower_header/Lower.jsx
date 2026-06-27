import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import classes from "./header.module.css"
function Lower() {
  return (
    <>
   <div className={classes.lower}>
    <ul>
  <li> 
    <IoReorderThree/> 
  <p>All</p>
  </li>
  <li>Today's Deals</li>
  <li>Prime Video</li>
  <li>Gift Cards</li>
  <li>Sell</li>
  <li>Registry</li>
  <li>Cusomer Service</li>
</ul>
    </div>   

    </>
  )
}

export default Lower