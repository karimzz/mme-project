import React from 'react'
import "./chat.css" ; 
import ChatList from '../../Components/Chat/ChatList';
import MainChat from '../../Components/Chat/MainChat';

const ChatPage = () => {
  return (
    <div className='chat-main'>
        <ChatList />
        <MainChat />
    </div>
  )
}

export default ChatPage
