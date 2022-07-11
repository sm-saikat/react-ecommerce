import React from 'react'
import './MyHeading.css'

const MyHeading = (props) => {
  return (
    <h4 className='myHeading'>{props.children}</h4>
  )
}

export default MyHeading