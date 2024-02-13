import React from 'react'
import DefaultChat from './DefaultChat'
import { Outlet } from 'react-router-dom'

const MainChat = () => {
  return (
    <div style={{width : "75%"}}>
        <Outlet />
    </div>
  )
}

export default MainChat
