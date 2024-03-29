import React, { useEffect, useRef, useState } from 'react' ;
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
import UpdateCategory from '../../Components/Category/UpdateCategory';


const CategoryPage = () => {

// For Dispatch Action 
const dispatch = useDispatch() ; 

// For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;

// For Handle Performace 
const handlePerformance = useRef(false) ; 


useEffect(()=>{
  if(!handlePerformance.current){
  dispatch(getAllSection({token}))
    handlePerformance.current = true ; 
  }
}, [token , dispatch])


// For Add Section
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// For Update Section
const [updateOpen, setUpdateOpen] = useState(false);
const handleUpdateOpen = () => setUpdateOpen(true);
const handleUpdateClose = () => setUpdateOpen(false);




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
      <ToastContainer  />
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
            <AddCategory handleClose={handleClose}  />
          </Box>
        </Fade>
      </Modal>


      {/* For Update */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={updateOpen}
        onClose={handleUpdateClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={updateOpen}>
          <Box sx={style}>
          
            <UpdateCategory handleUpdateClose={handleUpdateClose}/>
          </Box>
        </Fade>
      </Modal>


    <Button onClick={handleOpen} className='category-btn' variant="contained">Add Category</Button>

    <AllCategory handleUpdateOpen={handleUpdateOpen} />

    </section>
  )
}

export default CategoryPage
