import {Routes as Switch, Route} from 'react-router-dom'


import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Product from '../pages/Product'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<Product />} />
    </Switch>
  )
}

export default Routes