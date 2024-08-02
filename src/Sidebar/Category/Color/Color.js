import React from 'react'
import './Color.css'

const Color = () => {
  return (
    <div><div className='ml'>
    <h2 className='sidebar-title color-title'>Colors</h2>

    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>All</span>
      </label>
    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>Black</span>
      </label>
    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>Yellow</span>
      </label>
    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>Blue</span>
      </label>
    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>Green</span>
      </label>
    <label className='sidebar-label-container'>
        <input type='radio' name='test2'/>
        <span className='checkmark'></span><span>Green</span>
      </label>
  </div></div>
  )
}

export default Color