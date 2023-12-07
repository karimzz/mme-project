import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const EditProduct = () => {
  const  { id }= useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    
    axios.get('http://localhost:4000/product'+id)
      .then((response) => {
        const { title, price } = response.data;
        setTitle(title);
        setPrice(price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const formSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:4000/product'+id, {
      title,
      price
    })
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (
    <Container style={{ width: '50%', margin: 'auto' }} className='my-3'>
      <h1>Update Product</h1>
      <Form onSubmit={formSubmit}>
        <Form.Control
          size='lg'
          type='text'
          placeholder='Product Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Form.Control
          type='number'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <br />
        <Button className='my-3' type='submit'>Update</Button>
      </Form>
    </Container>
  );
};

export default EditProduct;