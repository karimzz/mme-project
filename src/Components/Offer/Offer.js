import React from 'react';
import imgOffer from "./../../Image/background.jpg" ; 
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Offer = () => {
    const [offers, setOffers] = useState([]);


  return (
    <div>
        <div style={{ position: 'relative' }}>
            <img src={imgOffer} alt='offers' style={{ height: '350px', width:"100%"}} />
            <div
                style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                fontSize: '40px',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                letterSpacing:'3px',
                
                }}
            >
                OFFERS
            </div>
            </div>
            <Link to={'/offer/add'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textDecoration:"none" }}>
        <Button style={{ width: "200px", color: "white", background: "black",textAlign:"center",border:"1px solid black" , "padding" : "7px 0px"}} className='my-3'> Add New Offer</Button>
      </Link>
      <Row xs={1} md={2} lg={3} className="g-4">
        {offers.map((offer) => (
          <Col key={offer.id}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <img src={offer.image} alt='product' />
                <Card.Title>{offer.name}</Card.Title>
                <span>{offer.currentPrice}$</span>
                <span style={{textDecorationLine:"line-through",margin:"2px"}}>{offer.previousPrice}$</span>
                <div>
                <Link to={'/offer/edit'}><Button style={{ color: "white", background: "black", margin: "2px",width:"75px",border:"1px solid black" }} >Edit</Button></Link>
                <Button style={{ color: "white", background: "black", margin: "2px",width:"75px",border:"1px solid black" }} >Delete</Button>
                <Button style={{ color: "white", background: "black", margin: "2px",width:"75px" ,border:"1px solid black"}}>Hide</Button>
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
    
  );
};

export default Offer;