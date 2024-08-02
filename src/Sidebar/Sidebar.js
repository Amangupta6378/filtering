import React from 'react'
import './Sidebar.css'
import Category from './Category/Category'
import Price from './Category/Price/Price'
import Color from './Category/Color/Color'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Sidebar = (handleChange) => {
  console.log(handleChange);
  return (
    <div>
        <section className='sidebar'>
            <div className='logo-container'>
                <h1><AiOutlineShoppingCart/></h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Color handleChange={handleChange}/>
        </section>
    </div>
  )
}

export default Sidebar