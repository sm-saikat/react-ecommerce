import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import "../../styles/Header.css";
import { useSelector } from "react-redux";
import CartSidebar from "../UI/CartSidebar/CartSidebar";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      classes: 'active'
    },
    {
      name: "Shop",
      path: "/shop",
      classes: ''
    },
    {
      name: "Cart",
      path: "/cart",
      classes: ''
    },
  ];

  const headerRef = useRef(null)

  const [cartOpen, setCartOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  const cartItems = useSelector(state => state.cart.cartItems)


  useEffect(()=>{
    const scrollHandler = ()=>{
      if(window.pageYOffset > 20){
        headerRef.current.classList.add('sticky')
      }else{
        headerRef.current.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', scrollHandler)

  }, [])

  useEffect(()=>{
    const totalItem = cartItems.reduce((prev, curr)=> prev + curr.count, 0)
    setCartItemCount(totalItem)
  }, [cartItems])

  // ====Cart Toggle====
  const cartToggleHandler = ()=>{
    setCartOpen(prev => !prev)
  }

  return (
      <header ref={headerRef}>
        <div className="nav-log">
          <p>Logo</p>
        </div>
        <div className="middle-menu">
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={link.classes}>
                  <Link className="menu__item" to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right-menu">
          <div onClick={cartToggleHandler} className="cart menu__item">
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartItemCount}</span>
          </div>

          <div className="account menu__item">
            <PermIdentityIcon />
          </div>
        </div>

        <CartSidebar cartOpen={cartOpen} cartToggleHandler={cartToggleHandler} />
      </header>
  );
};

export default Header;
