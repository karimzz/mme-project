import React from 'react'
import user from "./../../Image/user.png" ; 

const NotificationComponent = ({image  , des , date , open , username}) => {
  return (
    <div className='not-card'>
        <div className='not-im'>
            <img src={image} alt='profile' loading='lazy' />
        </div>
        <div className='des'>
            <p> <span className={`username ${open ? '' : "open"}`}>{username}</span> {des}.</p>
            <span className={`date ${open ? '' : "date-open"} `}>{date} ago</span>
        </div>
    </div>
  )
}

export default NotificationComponent
