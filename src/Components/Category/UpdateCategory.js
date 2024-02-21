import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import uploadPic from "./../../Image/upload.png" ; 
import { updateCategory } from '../../RTK/Slice/CategorySlice';
import { getSections } from '../../RTK/Slice/SectionSlice';
import { getToken } from '../../RTK/Slice/AuthSlice';



const UpdateCategory = ({handleUpdateClose}) => {


//For Acccess Input
const imageRef =useRef(null ) ;

// For Dispatch Action
const dispatch = useDispatch() ;
  
// For Access Token
const token  = useSelector(getToken) ;

// For Acces Title of category Update
const {title , id} = useSelector(state => state.CategorySlice.currentCategoryTitle)

const [categorytitle , setCategoryTitle] = useState(title) ; 

// For Access Section and Push in Select
const {allSection} = useSelector(getSections) ;
const [section, setSection] = React.useState('');

// For Store Data
const data = new FormData() ;

// Update Function
const updateCategoryHandler = ()=>{
  data.append("title" , categorytitle);
  data.append("image" , imageRef.current.files[0]);
  data.append("section_id" , section);
  dispatch(updateCategory({token , data , id}))
  handleUpdateClose()
}

// For Record The select input
  const handleChange = (event) => {
    setSection(event.target.value);
  };


  return (
    <div className='form-overlay'>
          <h3>Update Category</h3>
        <TextField value={categorytitle} onChange={(e)=>setCategoryTitle(e.target.value)} className='input-field' id="outlined-basic" label="Enter The Category name" variant="outlined" />

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
      
        <Button onClick={updateCategoryHandler} variant="contained" style={{width : "200px" , maxWidth : "100%"}} className='add-category-btn'>Add </Button>
    </div>
  )
}

export default UpdateCategory
