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



function Routing() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<SharedLayout/>}>

          <Route path='/' element={<Landing/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/category/:categoryName' element={<Results/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>

          </Route>
          
  <Route path='/login' element={<Auth/>}/>
        </Routes>

      </Router>


    </div>
  )
}

export default Routing