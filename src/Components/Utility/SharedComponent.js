import React from 'react'
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const SharedComponent = () => {

     // For Access Data in state
  const Auth = useSelector(state => state.AuthSlice.auth) ;

  return (
    <main>
        {Auth ? <SideBar /> : ""}
        
        <div className={`content ${!Auth ? "content-not-auth" : '' }`} style={{overflow : "hidden"}}>
          {Auth ? <NavBar />  : ""}
          <Outlet />
          </div>
     </main>    
  )
}

export default SharedComponent
