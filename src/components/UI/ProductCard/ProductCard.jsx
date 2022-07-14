import React from "react";
import "./ProductCard.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice/cartSlice";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = (props) => {
  const { id, title, thumbnail, price } = props.product;

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      <motion.div
        layout
        className="product__card"
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
      >
        <div className="product__top">
          <img src={thumbnail} alt="product" />
        </div>

        <div className="product__bottom">
          <div className="product__details">
            <div className="product__title">{title}</div>
            <div className="product__price">${price}</div>
          </div>
          <div className="product__icons">
            <FavoriteBorderOutlinedIcon className="favorite__icon" />
            <ShoppingCartOutlinedIcon
              onClick={() =>
                dispatch(addItem({ id, title, thumbnail, price, count: 1 }))
              }
              className="addto__cart__icon"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductCard;
