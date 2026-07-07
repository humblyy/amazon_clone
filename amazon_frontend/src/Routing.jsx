import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Orders from './pages/orders/Orders'
import Landing from './pages/landing/Landing'
import Payment from './pages/Payment/Payment'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Results from './pages/results/Results'
import ProductDetail from './pages/productDetail/ProductDetail'
import Auth from './pages/Auth/Auth'
// use react stripe for confirmation and payment method
// import {CheckoutElementsProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"

import RouteProtector from './components/routeProtector/RouteProtector'
import FourOFour from './pages/FourOFour/FourOFour'

const stripePromise = loadStripe(
  "pk_test_51TpAKpRoAnExshUYoThSVcTNBloKm6TCSw2zbA2hFyqramTtSNtiMNNr7tBAntylZcLhsSrqI2p5EqhNnUMxbnxK00aKV98mA3",
)


function Routing() {

  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<SharedLayout/>}>

          <Route path='/' element={<Landing/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          <Route path='/orders' element={
            <RouteProtector message={"sign in first to see your orders"} redirect={'/orders'}>     
                                    <Orders/>
                                    </RouteProtector>          
            }/>

          <Route path='/payment' element={  
                <RouteProtector message={"first you need to sign in to continue"} redirect={'/payment'}>
                                  <Elements stripe={stripePromise}>
                                    <Payment/> 
                                  </Elements>
                                    </RouteProtector>
                                  
                                            }/>
          <Route path='/category/:categoryName' element={<Results/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>

          </Route>
          
  <Route path='/login' element={<Auth/>}/>
  <Route path='*' element={<FourOFour/>} />
        </Routes>

      </Router>


    </div>
  )
}

export default Routing