import React , {memo} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentCategory, deleteCategory } from '../../RTK/Slice/CategorySlice';
import { getToken } from '../../RTK/Slice/AuthSlice';
import { Fade } from 'react-reveal';

const CategoryCard = memo( ({title ,image ,id ,handleUpdateOpen}) => {


// For Access Token
const token  = useSelector(getToken) ;

  // For Dispatch Action
  const dispatch = useDispatch() ;

  // For Delete Catgory
  const deleteCategoryHandler = ()=>{
    dispatch(deleteCategory({token , id}))
  }

  //   For Update Category
  const updateHandler = ()=>{
    dispatch(addCurrentCategory({title , id}))
    handleUpdateOpen()
  } 

  return (
    
     <Fade>
      <div>
        <div className='category-card'>
        <div className='image'>
            <img src={`http://127.0.0.1:8000/uploads/${image}`} alt='pic' loading='lazy' />
        </div>
        <div className='info'>
            <h4>{title}</h4>
          <ButtonGroup size="small"  variant="contained" aria-label="outlined primary button group">
              
              <Button  onClick={updateHandler} >Update</Button>
              <Button  color='error' onClick={deleteCategoryHandler}>Delete</Button>
          </ButtonGroup>

        </div>
        </div>
      </div>
     </Fade>
    
  )
}
)

export default CategoryCard
