import React from 'react'
import './Recomendation.css'
const Recomendation = () => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <button className='btns'>All Products</button>
        <button className='btns'> Nike</button>
        <button className='btns'> Addidas</button>
        <button className='btns'> Puma</button>
        <button className='btns'> Vans</button>
      </div>
    </div>
  )
}

export default Recomendation