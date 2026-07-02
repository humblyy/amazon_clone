import React from 'react'
import { Cartcontext } from '../../components/contextProvider/ContextProvider'
import { useContext} from 'react'
import SingleProduct from '../../components/product/singleProduct/SingleProduct'
import FormattedCurrency from '../../components/FormattedCurrency/FormattedCurrency'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { type } from '../../Action/CartActions'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function Cart() {
  const [{basket,user},dispatch]=useContext(Cartcontext)
  const total=basket.reduce((amount,item)=>{
    return item.price * item.amount + amount 
  },0)
  // console.log(basket)

  //adding and removing cart count
const increment=(item)=>{
 dispatch({
   type: type.ADD_TO_CART,
   item,
 });
}
const decrement=(id)=>{
  dispatch({
  type:type.REMOVE_FROM_CART,
  id
  })

}

  return (
    <>
      <section className="outerCartContainer">
        <div className="innerCartContainer">
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>opps ! Your Cart is Empty</p>
          ) : (
            basket?.map((item, i) => (
              <section className="addRemove">
                <SingleProduct
                  key={i}
                  productData={item}
                  flex={true}
                  cartButton={false}
                />
                <div className="addRemoveButton">
  
                  <button onClick={() => decrement(item.id)} className='button'>
                    <FaMinus />
                  </button>
                 
                  <span>{item.amount}</span>
                     <button onClick={() => increment(item)} className='button'>
                    <FaPlus />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtotal({basket?.length} items) </p>
              <FormattedCurrency amount={total} />
            </div>
            <span>
              <input type="checkbox"></input>
              <small>This order contains a gift </small>
            </span>
            <Link to="/payment"> Continue to Checkout</Link>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart