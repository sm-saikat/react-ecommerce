import React, { useEffect, useState } from 'react'
import ProductCard from '../components/UI/ProductCard/ProductCard'
import '../styles/Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=9");
      const data = await response.json();
      setProducts(data)
    };
    fetchProduct();
  }, [])

  return (
    <div>
      <h3 className='shop__title'>Shop</h3>

      <div className="products__container">
        <div className="products__filter">
          <select value={''} name='sort'>
            <option value="">Sort By</option>
            <option value="low-to-high">Sort by Price: Low to High</option>
            <option value="hight-to-low">Sort by Price: Hight to Low</option>
          </select>

          <select value={''} name='size'>
            <option value="">Size</option>
            <option value="x">X</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>

        <div className="products">
          {
            products.map(product => {
              return(
                <ProductCard key={product.id} product={product} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shop