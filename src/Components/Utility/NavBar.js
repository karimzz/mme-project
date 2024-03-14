import React from 'react' ;
import "./Utility.css"
import { logout } from '../../RTK/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const NavBar = () => {


// For Dispatch Action
const dispatch = useDispatch() ; 

// For Change Route 
const navigate = useNavigate() ; 

// For Logout
const logoutHandler = ()=>{
dispatch(logout()) ; 
navigate('/login') ;
}
 

  return (
    <nav>
      <div className='search'>
        <input placeholder='Search' className='input-filed' />
        <span className="material-symbols-outlined" >
          search
        </span>
      </div>
      <div className='btn-container'>
        <button onClick={logoutHandler}  style={{padding : "9px 20px"}}>Logout</button>
      </div>
    </nav>
  )
}

export default NavBar
