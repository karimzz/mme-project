import { TextField } from '@mui/material'
import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addSection } from '../../RTK/Slice/SectionSlice';


const AddSection = ({handleClose}) => {


    // For Dispatch Action
    const dispatch = useDispatch() ;

    // For Access Input 
    const titleRef = useRef(null) ;

    // Add Product Function
    const addSectionHandler = ()=>{
        dispatch(addSection({title : titleRef.current.value , token}))
        handleClose()
        
    }
    

    // For Access Token Stored
    const {token } = useSelector(state => state.AuthSlice.auth ) ;

    

  return (
    <div className='add-section'>
        <h2 className='add-section-title'>Add Section</h2>
        <TextField inputRef={titleRef} id="outlined-basic" style={{  margin : "0px auto" , display:"flex" , justifyContent : "center" ,alignItem :"center" , width :"500px"  }} label="Section name" variant="outlined" />
        <Button onClick={addSectionHandler} variant="contained" style={{display : "block" , marginTop : "20px" , width : "300px" , margin : "30px auto"}}>Add</Button>

    </div>
  )
}

export default AddSection
