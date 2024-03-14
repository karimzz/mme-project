import React from 'react' ;
import "./Utility.css" ; 
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
        <h2 >
        Page Not Found 
        </h2>
        <Link to={"/"} style={{textDecoration : "none"}}>
            <button>Return To Home Page</button>
        </Link>
    </div>
  )
}

export default NotFoundPage ; 
