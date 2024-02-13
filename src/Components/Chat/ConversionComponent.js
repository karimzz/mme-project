import React, { useEffect, useRef } from 'react'
import userPic from "./../../Image/user.png" ; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteSpecific, getSpecificMessage, replayMessage } from '../../RTK/Slice/MessageSlice';
import { Skeleton } from '@mui/material';

const ConversionComponent = () => {

  // For Dispatch Action
  const dispatch = useDispatch() ;
  
  // For Get Id Of Chat
  const {id} = useParams();

  // For Access Token
  const info = useSelector(state => state.AuthSlice.auth) ;


  // For Show Chat 
  useEffect(()=>{
    
    dispatch(deleteSpecific()) ;
    dispatch(getSpecificMessage({token : info.token , id_user : id}))

  } , [id])


  // For Access Send Input
  const sendBtn = useRef(null) ; 

  const sendMessageHandler = ()=>{
    dispatch(replayMessage({token : info.token , id  , message : sendBtn.current.value}))
    sendBtn.current.value = null ; 
  }

  const {data ,load} = useSelector(state => state.MessageSlice.specifiChat)


  return (
    <div className='chat'>
        <div className='chat-head'>
          <img src={userPic} alt='user' loading='lazy' />
          <h4>User</h4>
        </div>

        <div className='all-message'>



          {/* For Load chat */}
          {
            data ? data.map((item , idx)=>{
              if(item.sender_id === info.user.id) {
                return (<div key={idx} className='message-row sender'>
                <div className='message'>{item.message_body}</div>
              </div>) }
              else{
                return(          <div key={idx} className='message-row reciever'>
                <div className='message'>{item.message_body} </div>
              </div>

                )
              }
              }
            ) : load ? (
              <div>
              <Skeleton style={{marginBottom : "10px"}} variant="rectangular" width={610} height={50} />
              <Skeleton style={{marginBottom : "10px"}} variant="rectangular" width={610} height={50} />
              <Skeleton style={{marginBottom : "10px"}} variant="rectangular" width={610} height={50} />
              <Skeleton style={{marginBottom : "10px"}} variant="rectangular" width={610} height={50} />
              </div>
            ) : ""
          }
        </div>

        <div className='send-message'>
          <input ref={sendBtn} placeholder='Aa' />
          <button onClick={sendMessageHandler}><span className="material-symbols-outlined">
          send
          </span></button>
        </div>
        
    </div>
  )
}

export default ConversionComponent
