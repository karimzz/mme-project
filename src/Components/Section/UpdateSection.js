import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSection } from '../../RTK/Slice/SectionSlice';


const UpdateSection = ({handleUpdateClose}) => {


  // For Access Current Section 
  const {currentSecion} = useSelector(state => state.SectionSlice) ;

  const [state , setState ] = useState(currentSecion.title)

    // For Access input
    const titleRef = useRef(null) ; 
    
    // For Dispatch Action
    const dispatch = useDispatch() ;


    // For Access Token Stored
    const {token } = useSelector(state => state.AuthSlice.auth ) ;




    
    // Update Function
    const updateHandler = (title , )=>{
          dispatch(updateSection({title : state ,id: currentSecion.id , token})) ;
          handleUpdateClose()
    }
    

  return (
    <div className='add-section'>
    <h2 className='add-section-title'>Update Section</h2>
    <TextField onChange={(e)=>setState(e.target.value)} value={state}  id="outlined-basic" style={{  margin : "0px auto" , display:"flex" , justifyContent : "center" ,alignItem :"center" , width :"500px"  }} label="Section name" variant="outlined" />
    <Button onClick={updateHandler} variant="contained" style={{display : "block" , marginTop : "20px" , width : "300px" , margin : "30px auto"}}>Update Section</Button>

</div>
  )
}

export default UpdateSection
