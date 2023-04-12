import React, { useState } from 'react'

const Header = ({ title, active, setActive, answer }) => {
  return (
    <div className='accordion'>
      <div className="accordionHeading">
        <div className="container">
          <p>{title} </p>
          <span onClick={() => setActive(title)}>
            {active === title ? "X" : "="}
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
        {
          answer
        }
        </div>
      </div>
      

    </div>
  )
}

export default Header