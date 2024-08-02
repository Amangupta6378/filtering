import React from 'react'

const Input = ({handleChange,value,title,name,color}) => {
  return (
        <label className='sidebar-label-container'>
         <span> <input onClick={handleChange} type='radio' value={value} name={name}/></span>
          <span className='checkmark' style={{backgroundcolor: color}}></span><span>{title}</span>
        </label>
  )
}

export default Input;