import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
// import '../../../css/LoginPage.css'

const EditOffer = () => {
  const  { id }= useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);

  useEffect(() => {
    
    axios.get('http://localhost:4000/offer'+id)
      .then((response) => {
        const { name, currentPrice,previousPrice } = response.data;
        setName(name);
        setCurrentPrice(currentPrice);
        setPreviousPrice(previousPrice)

      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const formSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:4000/offer'+id, {
      name,
      currentPrice,
      previousPrice

    })
      .then((res) => {
        console.log(res.data);
        navigate("/offers");
      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (
    
      <Container style={{ width: '50%', margin: 'auto' }} className='my-3'>
      <p style={{textAlign:"center"}}>Update Product</p>
      <div className='formInput'>
      <Form onSubmit={formSubmit}>
        <Form.Control
          size='lg'
          type='text'
          placeholder='offer'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Form.Control
          type='number'
          placeholder='current price'
          value={currentPrice}
          onChange={(e) => setCurrentPrice(+e.target.value)}
        />
        <br />
        <Form.Control
          type='number'
          placeholder='previous price'
          value={previousPrice}
          onChange={(e) => setPreviousPrice(+e.target.value)}
        />
        <br />
        <Button className='my-3' type='submit'>Update</Button>
      </Form>
        
      </div>
      
    </Container>

    
  );
};

export default EditOffer;