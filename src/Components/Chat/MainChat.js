import React from 'react'
import { Outlet } from 'react-router-dom'

const MainChat = () => {
  return (
    <div  style={{width : "75%"}}>
        <Outlet context={{message : "Hello From Outlet Context"}} />
    </div>
  )
}

export default MainChat
