import React from 'react'
import RequestCardType from './RequestCardType'

const RequestCanceledList = () => {
  return (
    <div className='request-list'>
        <RequestCardType statu={false} />
        <RequestCardType statu={false} />
        <RequestCardType statu={false} />
        <RequestCardType statu={false} />
        <RequestCardType statu={false} />
    </div>
  )
}

export default RequestCanceledList
