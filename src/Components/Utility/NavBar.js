import React from 'react' ;
import "./Utility.css"

const NavBar = () => {
  return (
    <nav>
      <div className='search'>
        <input placeholder='Search' className='input-filed' />
        <span className="material-symbols-outlined" >
          search
        </span>
      </div>
      <div className='btn-container'>
        <button style={{padding : "9px 20px"}}>Logout</button>
      </div>
    </nav>
  )
}

export default NavBar
