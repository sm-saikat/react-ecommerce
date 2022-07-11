import React, { useState } from "react";
import { useEffect } from "react";
import HeroBanner from "../components/UI/banners/HeroBanner";
import MyHeading from "../components/UI/MyHeading";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import "../styles/Home.css";

// import allProducts from '../assets/products'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=9");
      const data = await response.json();
      setProducts(data)
    };

    fetchProduct();
    // setProducts(allProducts)
  }, []);

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
          <span onClick={() => setCategory("jewelery")}>Jewelery</span>
          <span onClick={() => setCategory("men's clothing")}>Mens</span>
          <span onClick={() => setCategory("electronics")}>Electronics</span>
        </div>

        <div className="products">
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
