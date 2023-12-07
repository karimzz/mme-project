import React from 'react'
import RequestCardType from './RequestCardType'

const RequestRecievedList = () => {
  return (
    <div className='reques-list'>
      <RequestCardType  statu={true}/>
      <RequestCardType  statu={true}/>
      <RequestCardType  statu={true}/>
      <RequestCardType  statu={true}/>
      <RequestCardType  statu={true}/>

    </div>
  )
}

export default RequestRecievedList
