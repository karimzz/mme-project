import React from 'react'
import chatQue from "./../../Image/chat.png" ; 

const DefaultChat = () => {
  return (
    <div className='default-chat'>
        <div >
            <img src={chatQue} loading='lazy' alt='question' />
            <h6>No Chat Selected </h6>
        </div>
    </div>
  )
}

export default DefaultChat
