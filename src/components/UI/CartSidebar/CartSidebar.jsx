import React, { useEffect, useRef } from "react";
import "./CartSidebar.css";
// import product01img from "../../../assets/product01.jpg";
import CloseIcon from "@mui/icons-material/Close";

import { useSelector, useDispatch } from "react-redux";
import {removeItem, increaseItem, decreaseItem, updateTotal} from '../../../store/cartSlice/cartSlice'

const CartSidebar = ({cartOpen, cartToggleHandler}) => {
  const cartSidebar = useRef(null);

  useEffect(()=>{
    if(cartOpen){
      cartSidebar.current.style.display = 'block'
    }else{
      cartSidebar.current.style.display = 'none'
    }
  }, [cartOpen])

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  // =====Update Total Price on 'Cart' change=====
  useEffect(()=>{
    dispatch(updateTotal())
  }, [cart, dispatch])

  return (
    <div ref={cartSidebar} className="cart__container">
      <div className="cart__sidebar">
        <div className="cart__header">
          <CloseIcon onClick={cartToggleHandler} className="cart__close" />
          <h4 className="cart__heading">Your Cart</h4>
        </div>

        <div className="cart__items">
          {
            cart.cartItems.length > 0 ? cart.cartItems.map((item) => {
              return (
                <div key={item.id} className="cart__item">
                  <img src={item.image} alt="product" />
  
                  <div className="cart__product__details">
                    <div className="cart__product__title">{item.title}</div>
                    <span className="cart__product__price">
                      <span className="cart__product__count">{item.count}x</span>${item.price}
                    </span>
                    <div className="cart__product__quantity">
                      <span onClick={()=> dispatch(decreaseItem(item.id))} className="decrese__button">-</span>1
                      <span onClick={()=> dispatch(increaseItem(item.id))} className="increase__button">+</span>
                    </div>
                  </div>
  
                  <span onClick={()=> dispatch(removeItem(item.id))} className="product__remove">Remove</span>
                </div>
              );
            }) : <p>No Items</p>
          }
        </div>
        
        <div className="cart__footer">
          <div className="cart__total">
            <span>Subtotal:</span>
            <span className="total">${cart.totalAmount}</span>
          </div>
          <button className="cart__checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
