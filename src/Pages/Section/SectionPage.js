import React, { useEffect } from 'react' ;
import "./section.css"
import SectionCard from '../../Components/Section/SectionCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSection } from '../../RTK/Slice/SectionSlice';
import { Box, Skeleton } from '@mui/material';

const SectionPage = () => {

  // For Get Token
  const token = useSelector(state => state.AuthSlice.auth.token)

  // For Dispatch Action 
  const dispatch = useDispatch(); 

  // For Get All Section
  useEffect(()=>{
    dispatch(getAllSection({token}))
  } , [dispatch])

const {allSection , load} = useSelector(state => state.SectionSlice) ;
console.log(allSection)



  return (
    <section className='section-page'>
        <h2>All Section</h2>
        <div className='all-section'>
        {
          load ? ( <Box>
            <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} /></Box>) : ""
        }
          {
            allSection[0] && allSection[0].map((item )=>{
              return <SectionCard key={item.id} id={item.id} title={item.title}></SectionCard>
            })
          }
        </div>
    </section>
  )
}

export default SectionPage
