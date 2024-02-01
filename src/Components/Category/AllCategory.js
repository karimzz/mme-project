import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../RTK/Slice/CategorySlice';
import { Skeleton } from '@mui/material';
import pic from "./../../Image/category.png"



const AllCategory = () => {

  console.log("Entered Here")
  
// For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;


  // For Dispatch Action
  const dispatch = useDispatch() ;

  // For Get All Category
  useEffect(()=>{
    dispatch(getAllCategories({token }))
  } , [dispatch])

  // For Acces Category State
  const {data , load} = useSelector(state => state.CategorySlice.allCategory) ;
  console.log(data)


  return (
    <div className='all-category'>
        <CategoryCard title={"Test Offiline"} image={pic} id={123} />
        {
          data ? data.map((item , idx)=>{
            return <CategoryCard key={idx} title={item.title} id={item.id} image={item.image}  />
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
