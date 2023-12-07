import React from 'react'
import logo from "./../../Image/person..png";

const RequestCard = () => {
  return (
    <div className='request-card'>
        <div className='left'>
            <div className='logo'>
                <img src={logo} alt='logo' loading='lazy' />
            </div>
            <div className='des'>
                <h3 className='title'>Hawara Mahmoud</h3>
                <p className='service'>Body care visa card, 3 Guest</p>
                <p className='date'>10 Nov , 10:30 pm</p>
                <p className='price-card'>
                    <p className='price'>20.000 IQD</p>
                    <p className='status'></p>
                </p>
            </div>
        </div>
        <div className='right'>
            <div className='btn-group'>
                <button className='btn btn-sucess d-flex btn-yes'><span className="material-symbols-outlined">done</span> Accept</button>
                <button className='btn btn-sucess d-flex btn-no'>X Decline</button>
            </div>
        </div>
    </div>
  )
}

export default RequestCard
