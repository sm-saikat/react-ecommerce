import React from 'react'
import '../../../styles/MyButton.css'

const MyButton = (props) => {
  return (
    <button className='myButton'>{props.children}</button>
  )
}

export default MyButton