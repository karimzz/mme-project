import React from 'react'
import logo from "./../../Image/person..png" ; 
import userPic from "./../../Image/user.png" ; 
import { Fade } from 'react-reveal';

const RequestCardType = ({statu , itemInfo}) => {


  

  return (
    <Fade>
        <div className='request-card' style={{justifyContent : "unset"}}>
            
        <div className='logo'>
            <img src={userPic} alt='logo' loading='lazy' />
        </div>
        <div className='des'>
            <h3 className='title'>{itemInfo.user.name}</h3>
            <p className='service'>{itemInfo.item.name}</p>
            <p className='date'>{itemInfo.day} , {itemInfo.time} {itemInfo.system}</p>
            <p className='price-card d-flex justify-content-between'>
                <p className='price'>{itemInfo.item.price} {itemInfo.item.coin}</p>
                <p className={statu === "receive" ? `status-recieved` : `status-cancel`}>{statu=== "receive" ? `receive` : "cancel"}</p>
            </p>
        </div>


    </div>
    </Fade>
  )
}

export default RequestCardType
