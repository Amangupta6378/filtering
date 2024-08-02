import React from 'react'
import Input from '../../Components/Input';
const Category = (handleChange) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value=""
          name='test'
          />
          <span className='checkmark'></span>All
        </label>

        <input 
        handleChange={handleChange}
        value="sneakers"
        title='Sneakers'
        name='test'
        />
        <input 
        handleChange={handleChange}
        value="flats"
        title='Flats'
        name='test'
        />
        <input 
        handleChange={handleChange}
        value="sandals"
        title='Sandals'
        name='test'
        />
        <input 
        handleChange={handleChange}
        value="heels"
        title='Heels'
        name='test'
        />
        
    </div>
  )
}

export default Category;