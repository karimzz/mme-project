import React from 'react'
import {Form,Container} from 'react-bootstrap';
import "./login.css"


const LoginPage = () => {
  return (
    <Container className='my-3'>
      <p>LOGIN</p>
      <div className='formInput'>
          <Form.Label htmlFor="inputEmail" className='label'>EMAIL</Form.Label>
          <br/>
          <input

            type="email"
            id="inputEmail"
            
          />
          <br/>
          <Form.Label htmlFor="inputPassword5" className='label'>PASSWORD</Form.Label>
          <br/>
          <input

            type="password"
            id="inputPassword5"
      
          />
          <h6>Forget Password?</h6>
          <button >SIGN IN</button>
      </div>
      
    </Container>
  )
}

export default LoginPage
