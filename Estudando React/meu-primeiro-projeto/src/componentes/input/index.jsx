import React from 'react'
import "./input.css"

const Input = ({ placeholder }) => {
  return (
    <div>
      <input type="text" className="input" placeholder={placeholder} />
    </div>
  )
}

export default Input;
