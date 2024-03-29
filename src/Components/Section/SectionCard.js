import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrent, deleteSection } from '../../RTK/Slice/SectionSlice';
import { getToken } from '../../RTK/Slice/AuthSlice';

const SectionCard = memo( ({title , id , openModal}) => {
console.log("Section Card Called")
// For Access Token
const token  = useSelector(getToken) ;

// For Dispatch Action
const dispatch = useDispatch() ; 


// Delete Function
const deleteHandler = ()=>{
dispatch(deleteSection({ token  , id  }))

}


// Add Current Section
const addCurrentSection = (item)=>{
  openModal()
  dispatch(addCurrent(item))
}

  return (
    <div className='section-card'>
        <div className='section-title'>{title}</div>
        <div className='k-btn-group d-flex'>
            <button onClick={()=>addCurrentSection({title , id})} className='d-flex justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">edit</span> Update</button>
            <button onClick={deleteHandler} className='d-flex del-btn justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">delete</span> Delete</button>
            <button className=' show-btn d-flex justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">visibility</span> Show</button>
        </div>
    </div>
  )
}

)

export default SectionCard
