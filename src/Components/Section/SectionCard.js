import React from 'react'

const SectionCard = ({title , id}) => {



  return (
    <div className='section-card'>
        <div className='section-title'>{title}</div>
        <div className='k-btn-group d-flex'>
            <button className='d-flex justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">edit</span> Update</button>
            <button className='d-flex del-btn justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">delete</span> Delete</button>
            <button className=' show-btn d-flex justify-content-center align-items-center'> <span className="material-symbols-outlined px-1">visibility</span> Show</button>
        </div>
    </div>
  )
}

export default SectionCard
