import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './../../css/LoginPage.css'

function AddProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(0);

  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/product",{
      title,
      price,
      description,
      image

    }).then((data) => console.log(data));
    navigate("/products");
  
  };

  return (
    <Container style={{ width: '100%', margin: 'auto' , overflow : "hidden" }} className='my-3'>
      <p>INSERT PRODUCT</p>
      <Form onSubmit={formSubmit} className='formInput'>
        <Form.Label  className='label'>PRODUCT NAME</Form.Label>
        <input size='lg' type='text' placeholder='Product Title' onChange={(e) => setTitle(e.target.value)} required to="inputName"/>
        <br />
        <Form.Label  className='label'>PRODUCT PRICE</Form.Label>
        <input type='number' placeholder='Price' onChange={(e) => setPrice(+e.target.value)}   required/>
        <br />
        <Form.Label  className='label'>PRODUCT DESCRIPTION</Form.Label>
        <input size='lg' type='text' placeholder='Product Title' onChange={(e) => setDescription(e.target.value)} required to="inputName"/>
        <br />
        <Form.Label  className='label'>IMAGE</Form.Label>
        <div style={{border:"2px dashed gray",width:"150px",height:"50px",textAlign:"center"}}><input type='file' onChange={(e) => setImage(e.target.value)} required style={{opacity:"0",position:"absolute"}}/>Drop image</div>
        <Button className='my-3' type='submit' style={{color:"white",background:"black"}}>Add</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;