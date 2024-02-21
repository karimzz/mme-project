import React, { useEffect } from 'react'
import ContactCard from './ContactCard';
import user from "./../../Image/user.png" ; 
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMessage, getAllMessage } from '../../RTK/Slice/MessageSlice';
import { Skeleton } from '@mui/material';
import { getToken } from '../../RTK/Slice/AuthSlice';

const ChatList = () => {


// For Get Token
const token  = useSelector(getToken)


// For Dispatch Action
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getAllMessage({token})) ; 
} , [dispatch])


// For Get Token
const {data , load} = useSelector(GetAllMessage)
console.log(data)

  return (
    
        <div className='chat-list'>
            <h4 className='chat-title'>Chats</h4>
            <div className='search'>
                <span className="material-symbols-outlined">search</span>
                <input placeholder='Search Messenager' />
            </div>

           
            <div className='all-chats'>
            {/* Show All Notification */}
            {
                data ? data.map((item , idx)=>{
                    return <ContactCard key={idx} id={item.sender_id}  username={"user"} image={user} body={item.message_body} />
                }) : load ?<div style={{display : "flex" }}>
                <Skeleton variant="circular" className='mx-2' width={40} height={40} />
                <Skeleton variant="rectangular" className="rounded-1" width={210} height={60} />
                </div> : ""
            }

            </div>
        </div>
    
  )
}

export default ChatList
