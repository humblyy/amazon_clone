import React from 'react'
import classes from "./header.module.css"
import us_flag from "../../../assets/images/us_flag.png"
import { CiLocationOn } from "react-icons/ci";
// import { IoSearch } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Lower from '../lower_header/Lower';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>


  <section className={classes.inner_container}>
<div className={classes.first_section}>
<Link to="/">
  {/* amazon logo */}
  <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="amazon logo" />
</Link>


<div className={classes.delivery}>
    <span>
{/* location_icon */}
<CiLocationOn/>
  </span>
  <div>
  <p>Deliver to</p>
  <span>Ethiopia</span>
  </div>

</div>
</div>



{/* search section */}
  <div className={classes.search}>

<select name="" id="">
  <option value="">All</option>
</select>
<input type="text" placeholder='Search Amazon' />
<BsSearch size={38}/>
  </div>



{/* third section */}
  <div className={classes.order}>
<Link className={classes.language} to='/'>
  <img src={us_flag} alt="" />
<select name="" id="">
    <option value="">EN</option>
</select>
</Link>


  {/* sign in */}

  <Link to="/login">
    <p>Hello,Sign In</p>
    <p>Accounts & Lists</p>
  </Link>

  {/* orders and returns */}
  <Link to="/orders">
    <p>returns</p>
    <span>& Orders</span>
  </Link>

  {/* cart icon */}
  <Link to="/cart" className={classes.cart}>
   <FiShoppingCart size={35}/>
    <span>0</span>
     <p>Cart</p>
  </Link>


  </div>
</section>


<Lower/>

    </>

  )
}

export default Header