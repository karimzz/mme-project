import React, { useEffect, useRef } from 'react'
import CategoryCard from './CategoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, getCatogries } from '../../RTK/Slice/CategorySlice';
import { Skeleton } from '@mui/material';
import { getToken } from '../../RTK/Slice/AuthSlice';



const AllCategory = ({handleUpdateOpen}) => {

  console.log("All Category Component Called") ;
  
// For Access Token
const token  = useSelector(getToken) ;

  // For Handle Peformance
  const handlePerformance = useRef(false ) ; 


  // For Dispatch Action
  const dispatch = useDispatch() ;

  // For Get All Category
  useEffect(()=>{
    if(!handlePerformance.current) {
    dispatch(getAllCategories({token })) ; 
      handlePerformance.current = true ;
    }
  } , [ token, dispatch])

  // For Acces Category State
  const {data , load} = useSelector(getCatogries) ;



  return (
    <div className='all-category'>
        {
          data ? data.map((item , idx)=>{
            return <CategoryCard handleUpdateOpen={handleUpdateOpen} key={idx} title={item.title} id={item.id} image={item.image}  />
          }) : load ? <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          </div> : ""
        }
        


    </div>
  )
}

export default AllCategory
