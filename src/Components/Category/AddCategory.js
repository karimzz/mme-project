import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import uploadPic from "./../../Image/upload.png" ; 
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../RTK/Slice/CategorySlice';


const AddCategory = ({handleClose}) => {


  //For Acccess Input
  const titleRef = useRef(null) ;
  const imageRef =useRef(null ) ;
  


  // For Dispatch Action
  const dispatch = useDispatch() ; 

    // For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;
  
  // For Access Section and Push in Select
    const allSection = useSelector(state => state.SectionSlice.allSection) ;
    const [section, setSection] = React.useState('');

  const data = new FormData() ;

  // Update Function
  const addCategoryHandler = ()=>{
    data.append("title" , titleRef.current.value);
    data.append("image" , imageRef.current.files[0]);
    data.append("section_id" , section);
    dispatch(addCategory({token , data}))
    handleClose()
  }

  // For Record The select input
    const handleChange = (event) => {
      setSection(event.target.value);
    };

  return (
    <div className='add-category'>
        <h3>Add Category</h3>
        <TextField inputRef={titleRef} className='category-field' id="outlined-basic" label="Enter The Category name" variant="outlined" />




        <FormControl style={{width : "400px" , maxWidth : "100%" , margin : "24px 0px"}} >
        <InputLabel id="demo-simple-select-label">Choose Section</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={section}
          label="Age"
          onChange={handleChange}

        >

          {
            allSection.map((item , idx)=>{
                return <MenuItem key={idx} value={item.id}>{item.title}</MenuItem>
            })
          }
        </Select>
      </FormControl>

      <div className='upload-photo'>
      <input ref={imageRef} type="file" id="image" name="image" accept="image/*" />
      <img src={uploadPic} alt='lo' loading='lazy' />
      </div>
      
        <Button onClick={addCategoryHandler} variant="contained" style={{width : "200px" , maxWidth : "100%"}} className='add-category-btn'>Add </Button>

    </div>
  )
}

export default AddCategory
