import React from 'react' ;
import "./product.css" ; 
import girlPic from "./../../Image/girl.png" ;
import AllProduct from '../../Components/Product/AllProduct';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AddProducts from '../../Components/Product/AddProducts';



const ProductPage = () => {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    maxWidth : "100%"
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <section className='product-page'>
    
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AddProducts handleClose={handleClose} />
          </Box>
        </Fade>
      </Modal>

    
      <div className='landing'>       
          <h4>Grap up to 50% off on Selected Product</h4>
          <img className='girl' src={girlPic} alt='pic' />
      </div>
      <div className='product-secition'>
        <div className='product-section-top'>
          <h3>All Product</h3>
          <button  onClick={handleOpen} >Add Product</button>
        </div>

        <AllProduct />
      </div>
    </section>
  )
}

export default ProductPage
