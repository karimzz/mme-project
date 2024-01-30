import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./../../css/LoginPage.css";

function AddOffer() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [previousPrice, setpreviousPrice] = useState(0);
  const [image, setImage] = useState(0);

  

  return (
    <Container style={{ width: '100%', margin: 'auto' }} className='my-3'>
      <p>INSERT OFFER</p>
      <Form  className='formInput'>
        <Form.Label  className='label'>NAME</Form.Label>
        <input size='lg' type='text' placeholder='Title' onChange={(e) => setName(e.target.value)} required to="inputName"/>
        <br />
        <Form.Label  className='label'>Current PRICE</Form.Label>
        <input type='number' placeholder='Current Price' onChange={(e) => setCurrentPrice(+e.target.value)}   required/>
        <br />
        <Form.Label  className='label'>previous PRICE</Form.Label>
        <input type='number' placeholder='previous Price' onChange={(e) => setpreviousPrice(+e.target.value)}   required/>
        <br/>
        <Form.Label  className='label'>IMAGE</Form.Label>
        <input type='url' placeholder='Image url' onChange={(e) => setImage(e.target.value)}   required/>
        <Button className='my-3' type='submit' style={{color:"white",background:"black"}}>Add</Button>
      </Form>
    </Container>
  );
}

export default AddOffer;