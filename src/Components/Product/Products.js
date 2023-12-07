import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgOffer from '../../Image/background.jpg';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure ${product.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:4000/product/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllProduct();
          });
      }
    });
  };

  return (
    <div style={{overflowX : "hidden" , "overflowY" : "scroll" , height : "calc( 100vh -  60px)"}}>
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
                PRODUCTS
            </div>
            </div>
      <Link to={'/product/add'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textDecoration:"none" }}>
        <Button style={{ width: "200px", color: "white", background: "black",textAlign:"center",border:"1px solid black" , padding : "6px 0px"}} className='my-3'> Add New Product</Button>
      </Link>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <img src={product.image} alt='product' />
                <Card.Title>{product.title}</Card.Title>
                <h4>{product.price}$</h4>
                <Link to={'/product/edite'}><Button style={{ color: "white", background: "black", margin: "2px",width:"75px",border:"1px solid black" }} className='btn-primary' >Edit</Button></Link>
                <Button style={{ color: "white", background: "black", margin: "2px",width:"75px",border:"1px solid black" }} onClick={() => deleteProduct(product)} className='btn-danger'>Delete</Button>
                <Button style={{ color: "white", background: "black", margin: "2px",width:"75px",border:"1px solid black" }} >Hide</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
