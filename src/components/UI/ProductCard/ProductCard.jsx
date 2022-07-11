import React from 'react'
import './ProductCard.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {useDispatch} from 'react-redux'
import {addItem} from '../../../store/cartSlice/cartSlice'

const ProductCard = (props) => {
    const {id, title, image, price} = props.product

    const dispatch = useDispatch()

  return (
    <div className="product__card">
        <div className="product__top">
            <img src={image} alt="product" />
        </div>
        
        <div className="product__bottom">
            <div className="product__details">
                <div className="product__title">{title}</div>
                <div className="product__price">${price}</div>
            </div>
            <div className="product__icons">
                <FavoriteBorderOutlinedIcon className='favorite__icon' />
                <ShoppingCartOutlinedIcon onClick={()=> dispatch(addItem({id, title, image, price, count:1}))} className='addto__cart__icon' />
            </div>
        </div>
    </div>
  )
}

export default ProductCard