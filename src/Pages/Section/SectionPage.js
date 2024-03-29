import React, { useEffect, useRef, useState } from 'react' ;
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
import { getSections } from '../../RTK/Slice/SectionSlice';
import { getToken } from '../../RTK/Slice/AuthSlice';

const SectionPage = () => {

  // Style For OverFlow 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth : "100%" , 
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
  const token = useSelector(getToken)

  // For Dispatch Action 
  const dispatch = useDispatch(); 

  // For Handle Performance
  const handlePerformance = useRef(false ) ;


  // For Get All Section
  useEffect(()=>{
    if(!handlePerformance.current){
      dispatch(getAllSection({token})) ; 
      handlePerformance.current = true ;
    }
  } , [token ,dispatch])

const {allSection , load } = useSelector(getSections) ;




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
            allSection ? allSection.map((item )=>{
              return <SectionCard openModal ={handleUpdateOpen} key={item.id} id={item.id} title={item.title}></SectionCard>
            }) :load ? ( <Box>
              <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} /></Box>) : ""
          }
        </div>
    </section>
  )
}

export default SectionPage
