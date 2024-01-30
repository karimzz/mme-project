import React from 'react'
import "./Utility.css"
import logo from "./../../Image/logo.png" ; 
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    
  return (
    <aside>
        <div className='side-header'>
            <div className='logo hidden-in-mobile'>
                <img src={logo} alt='logo' loading='lazy' />
            </div>
            <div className='menu'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
        <ul className='list-option'>
            <li > <NavLink to="/"><span className="material-symbols-outlined">dashboard</span> <span className='hidden-in-mobile'>Dashboard</span> </NavLink></li>
            <li> <NavLink to="/notification"><span className="material-symbols-outlined">notifications</span> <span className='hidden-in-mobile'>Notification</span> </NavLink> </li>
            <li> <NavLink to="/product"> <span className="material-symbols-outlined">stacks</span> <span className='hidden-in-mobile'>Product</span> </NavLink></li>
            <li> <NavLink to="/offer"><span className="material-symbols-outlined">sell</span> <span className='hidden-in-mobile'>Offer</span> </NavLink></li>
            <li> <NavLink to="/message"><span className="material-symbols-outlined">chat</span> <span className='hidden-in-mobile'>Chats</span> </NavLink></li>
            <li> <NavLink to="/section"><span className="material-symbols-outlined">pip_exit</span> <span className='hidden-in-mobile'>Section</span> </NavLink></li>
            <li> <NavLink to="/users"><span className="material-symbols-outlined">groups</span> <span className='hidden-in-mobile'>Customers</span> </NavLink></li>
            <li> <NavLink to="/service"><span className="material-symbols-outlined">self_care</span> <span className='hidden-in-mobile'>Category</span> </NavLink></li>
            <li> <NavLink to="/setting"><span className="material-symbols-outlined">settings</span> <span className='hidden-in-mobile'>Setting</span> </NavLink></li>
            <li> <NavLink to="/request"><span className="material-symbols-outlined">supervisor_account</span> <span className='hidden-in-mobile'>Request</span> </NavLink></li>
        </ul>
    </aside>
  )
}

export default SideBar
