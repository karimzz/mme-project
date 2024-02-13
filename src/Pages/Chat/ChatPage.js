import React from 'react'
import "./chat.css" ; 
import ChatList from '../../Components/Chat/ChatList';
import MainChat from '../../Components/Chat/MainChat';
import { ToastContainer } from 'react-toastify';

const ChatPage = () => {
  return (
    <div className='chat-main'>
        <ToastContainer />
        <ChatList />
        <MainChat />
    </div>
  )
}

export default ChatPage
