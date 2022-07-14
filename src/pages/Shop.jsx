import React, { useEffect, useState } from 'react'
import ProductCard from '../components/UI/ProductCard/ProductCard'
import '../styles/Shop.css'
import {Circles} from 'react-loader-spinner'


const Shop = () => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    category: 'all',
    sortby: 'default'
  })
  const [loading, setLoading] = useState(false)


  const filtersInputHandler = (event)=> {
    setFilters(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  
  useEffect(()=>{
    setLoading(true)

    const fetchProduct = async () => {
      const URL = `http://localhost:5000/products?category=${filters.category}&sortby=${filters.sortby}`
  
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data)

      setLoading(false)
    };
    fetchProduct();

  }, [filters])

  return (
    <div>
      <h3 className='shop__title'>Shop</h3>

      <div className="products__container">
        <div className="products__filter">
          <select onChange={filtersInputHandler} value={filters.sortby} name='sortby'>
            <option value="default">Sort By</option>
            <option value="low-to-high">Sort by Price: Low to High</option>
            <option value="high-to-low">Sort by Price: Hight to Low</option>
          </select>

          <select onChange={filtersInputHandler} value={filters.category} name='category'>
            <option value="all">Category</option>
            <option value="mens-watches">Mens Watches</option>
            <option value="laptops">Laptops</option>
            <option value="lighting">Lighting</option>
          </select>
        </div>

        <div className="products">
          {loading ? <Circles color="#FF6F61" ariaLabel="loading-indicator" /> : products.map(product => {
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