import React from 'react'
import { Link } from 'react-router-dom'
import shoe from '../../../assets/shoe.png'
import '../../../styles/HeroBanner.css'
import MyButton from '../MyButton'

const HeroBanner = () => {
  return (
    <div className='banner-container'>
        <div className="banner-content">
            <h4>Summer Sale <span style={{color: '#ff6f61'}}>40% Off</span></h4>
            <Link to={'/shop'}>
              <MyButton>Descover Now</MyButton>
            </Link>
        </div>

        <div className="banner-image">
            <img src={shoe} alt='shoe' />
        </div>
    </div>
  )
}

export default HeroBanner