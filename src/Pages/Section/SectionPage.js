import React, { useEffect, useState } from 'react' ;
import "./section.css"
import SectionCard from '../../Components/Section/SectionCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSection } from '../../RTK/Slice/SectionSlice';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Skeleton } from '@mui/material';
import AddSection from '../../Components/Section/AddSection';
import { ToastContainer } from 'react-toastify';
import UpdateSection from '../../Components/Section/UpdateSection';

const SectionPage = () => {



  // Style For OverFlow 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height : 400,
    bgcolor: 'background.paper',
    borderRadius : 1,
    boxShadow: 24,
    p: 4,
    
  };

  // For Add Section
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // For Update Section
  const[updateOpen , setUpdateOpen] = useState(false) ;
  const handleUpdateOpen = ()=> setUpdateOpen(true) ; 
  const handleUpdateClose = ()=> setUpdateOpen(false) ; 

  

  // For Get Token
  const token = useSelector(state => state.AuthSlice.auth.token)

  // For Dispatch Action 
  const dispatch = useDispatch(); 

  // For Get All Section
  useEffect(()=>{
    dispatch(getAllSection({token}))
  } , [])

const {allSection , load } = useSelector(state => state.SectionSlice) ;



  return (
    <section className='section-page'>
        <ToastContainer />
        <h2>All Section</h2>
        <button onClick={handleOpen} className='add-section-btn'>Add Section</button>

        {/* Modal Here */}
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
            <AddSection handleClose={handleClose}/>
          </Box>
        </Fade>
      </Modal>

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
            <UpdateSection handleUpdateClose={handleUpdateClose} />
          </Box>
        </Fade>
      </Modal>


        <div className='all-section'>
        {
          load ? ( <Box>
            <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} /></Box>) : ""
        }
          {
            allSection && allSection.map((item )=>{
              return <SectionCard openModal ={handleUpdateOpen} key={item.id} id={item.id} title={item.title}></SectionCard>
            })
          }
        </div>
    </section>
  )
}

export default SectionPage
