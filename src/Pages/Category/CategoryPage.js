import React, { useEffect, useState } from 'react' ;
import "./category.css" ;
import AllCategory from '../../Components/Category/AllCategory';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AddCategory from '../../Components/Category/AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSection } from '../../RTK/Slice/SectionSlice';
import { ToastContainer } from 'react-toastify';


const CategoryPage = () => {

  // For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;


useEffect(()=>{
  dispatch(getAllSection({token}))
})

// For Dispatch Action 
const dispatch = useDispatch() ; 




// For Add Section
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);




// Style For OverFlow 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    maxWidth : "100%" , 
    height : 400,
    bgcolor: 'background.paper',
    borderRadius : 1,
    boxShadow: 24,
    p: 4,
    
};

  return (
    <section className='category-page'>
      <ToastContainer />
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
            <AddCategory handleClose={handleClose}/>
          </Box>
        </Fade>
      </Modal>


    <Button onClick={handleOpen} className='category-btn' variant="contained">Add Category</Button>

    <AllCategory />

    </section>
  )
}

export default CategoryPage
