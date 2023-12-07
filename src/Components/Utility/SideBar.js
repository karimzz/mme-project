import React from 'react'
import "./Utility.css"
import logo from "./../../Image/logo.png" ; 
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    
  return (
    <aside>
        <div className='side-header'>
            <div className='logo'>
                <img src={logo} alt='logo' loading='lazy' />
            </div>
            <div className='menu'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
        <ul className='list-option'>
            <li > <NavLink to="/"><span className="material-symbols-outlined">dashboard</span>Dashboard</NavLink></li>
            <li> <NavLink to="/notification"><span className="material-symbols-outlined">notifications</span>Notification</NavLink> </li>
            <li> <NavLink to="/product"> <span className="material-symbols-outlined">stacks</span> Product</NavLink></li>
            <li> <NavLink to="/offer"><span className="material-symbols-outlined">sell</span>Offer</NavLink></li>
            <li> <NavLink to="/message"><span className="material-symbols-outlined">chat</span>Chats</NavLink></li>
            <li> <NavLink to="/users"><span className="material-symbols-outlined">groups</span>Customers</NavLink></li>
            <li> <NavLink to="/service"><span className="material-symbols-outlined">self_care</span>Category</NavLink></li>
            <li> <NavLink to="/setting"><span className="material-symbols-outlined">settings</span>Setting</NavLink></li>
            <li> <NavLink to="/request"><span className="material-symbols-outlined">supervisor_account</span>Request</NavLink></li>
        </ul>
    </aside>
  )
}

export default SideBar
