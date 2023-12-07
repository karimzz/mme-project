import React from 'react'
import user from "./../../Image/user.png" ; 

const ContactCard = ({username , image}) => {
  return (
    <a href='/'  style={{textDecoration : "none" , display : "block" , color : "black"}}>
        <div className='contact-card'>
            <div className='profile'>
                <div className='logo'>
                    <img src={image} alt='profile' loading='lazy' />
                </div>
                <h5>{username}</h5>
            </div>
            <div className='ball'></div>
        </div>
    </a>
  )
}

export default ContactCard
