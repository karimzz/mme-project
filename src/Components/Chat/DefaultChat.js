import React from 'react'
import chatQue from "./../../Image/chat.png" ; 
import { useOutletContext } from 'react-router-dom';

const DefaultChat = () => {

  // For Access Data From Context
  const {message} = useOutletContext()
  console.log(message) ; 

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
