import React from 'react' ;
import userPic from "./../../Image/user.png"
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { blockUser, unlockUser } from '../../RTK/Slice/UserSlice';

const UserComponent = ({  name, email,  location , image , blocked , id}) => {

  // For Acccess Token 
  const {token} = useSelector(state => state.AuthSlice.auth)

  // For Dispatch Action
  const dispatch = useDispatch() ;

  //For Block User
  const blockHandler = ()=>{
    dispatch(blockUser({token , id}))
  }

    //For Block User
    const unblockHandler = ()=>{
      dispatch(unlockUser({token , id}))
    }

  return (
    <div className='user-card'>
        <div className='logo'>
            <img src={userPic} loading='lazy' alt='profi' />
        </div>
        <div className='user-info'>
            <h3 className='username'>{name}</h3>
            <p><span className="material-symbols-outlined">mail</span> {email} </p>
            <p><span className="material-symbols-outlined">location_on</span> {location} </p>

            {
              blocked === 1 ? <Button variant="contained" color='success' onClick={unblockHandler} style={{display : "block"}} fullWidth>Un Block</Button> :
              <Button variant="contained" color='error' onClick={blockHandler} style={{display : "block"}} fullWidth>Block</Button>
            }

        </div>
    </div>
  )
}

export default UserComponent
