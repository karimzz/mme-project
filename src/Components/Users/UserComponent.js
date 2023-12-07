import React from 'react' ;
import userPic from "./../../Image/user.png"

const UserComponent = ({  user, email,  location , image}) => {
  return (
    <div className='user-card'>
        <div className='logo'>
            <img src={userPic} loading='lazy' alt='profi' />
        </div>
        <div className='user-info'>
            <h3 className='username'>{user}</h3>
            <p><span className="material-symbols-outlined">mail</span> {email} </p>
            <p><span className="material-symbols-outlined">location_on</span> {location} </p>
            <div className='btn-group'>
                <button className='btn-e'><span class="material-symbols-outlined">edit_square</span>Edite</button>
                <button className='btn-d'><span className="material-symbols-outlined">delete</span>Edite</button>
                <button><span class="material-symbols-outlined">block</span>Block</button>
            </div>
        </div>
    </div>
  )
}

export default UserComponent
