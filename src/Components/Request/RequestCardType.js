import React from 'react'
import logo from "./../../Image/person..png" ; 

const RequestCardType = ({statu}) => {
  return (
    <div className='request-card' style={{justifyContent : "unset"}}>
        
            <div className='logo'>
                <img src={logo} alt='logo' loading='lazy' />
            </div>
            <div className='des'>
                <h3 className='title'>Hawara Mahmoud</h3>
                <p className='service'>Body care visa card, 3 Guest</p>
                <p className='date'>10 Nov , 10:30 pm</p>
                <p className='price-card d-flex justify-content-between'>
                    <p className='price'>20.000 IQD</p>
                    <p className={statu ? `status-recieved` : `status-cancel`}>{statu ? `Recieved` : "Cancled"}</p>
                </p>
            </div>
        
        
    </div>
  )
}

export default RequestCardType
