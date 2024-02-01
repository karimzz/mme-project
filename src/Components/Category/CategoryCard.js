import React from 'react'
import pic from "./../../Image/category.png"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Link } from 'react-router-dom'

const CategoryCard = ({title ,image ,id}) => {

  return (
    
      <div className='category-card'>
      <div className='image'>
          <img src={pic} alt='pic' loading='lazy' />
      </div>
      <div className='info'>
          <h4>{title}</h4>
        <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
            <Button color='success'> <Link style={{textDecoration : "none" , color :"white"}} to={`${id}`}>View</Link></Button>
            <Button >Update</Button>
            <Button color='error' >Delete</Button>
        </ButtonGroup>

      </div>
      </div>
    
  )
}

export default CategoryCard
