import React from 'react'
import ContactCard from './ContactCard';
import user from "./../../Image/user.png" ; 

const ChatList = () => {
  return (
    
        <div className='chat-list'>
            <h4 className='chat-title'>Chats</h4>
            <div className='search'>
                <span className="material-symbols-outlined">search</span>
                <input placeholder='Search Messenager' />
            </div>
            <div className='all-chats'>
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />
                <ContactCard username={"karimzz"} image={user} />

            </div>
        </div>
    
  )
}

export default ChatList
