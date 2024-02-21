import React from 'react'
import user from "./../../Image/user.png" ; 
import {  NavLink } from 'react-router-dom';

const ContactCard = ({username , id , image , body}) => {

  // const navigate = useNavigate() ; 
  // const getChat = ()=>{
  //   console.log(`Get Chat Clicked ${id}`)
  //   navigate(`${id}`) ; 
  // }

  return (
      <NavLink  className='contact-card' to={`${id}`} style={{ display :"block",textDecoration :"none" , color :"black"}}>
            <div className='profile'>
                <div className='logo'>
                    <img src={image} alt='profile' loading='lazy' />
                </div>
                <div className='info' >
                  <h5>{username}</h5>
                  <p >{body}</p>
                </div>
            </div>
        </NavLink>

  )
}

export default ContactCard
