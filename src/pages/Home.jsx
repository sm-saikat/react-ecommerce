import React, { useState } from "react";
import { useEffect } from "react";
import HeroBanner from "../components/UI/banners/HeroBanner";
import MyHeading from "../components/UI/MyHeading";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import "../styles/Home.css";
import {motion} from 'framer-motion'


const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const fetchProduct = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data)
    };
    fetchProduct();
  }, [])

  useEffect(()=>{
    setFilteredProducts(products)
  }, [products])


  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return (
    <div className="homepage">
      <HeroBanner />

      <div className="popular-products">
        <MyHeading>Popular Products</MyHeading>

        <div className="cat__tab">
          <span className="active" onClick={() => setCategory("all")}>
            All
          </span>
          <span onClick={() => setCategory("mens-watches")}>Watches</span>
          <span onClick={() => setCategory("laptops")}>Laptops</span>
          <span onClick={() => setCategory("lighting")}>Lighting</span>
        </div>

        <motion.div className="products">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
