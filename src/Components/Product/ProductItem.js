import React from 'react'
import testPic from "./../../Image/airbods.png"
import { Link } from 'react-router-dom'

const ProductItem = () => {
  return (
    <Link to={"1"}  style={{textDecoration : "none" , color : 'black' , display : "block" , marginRight : "30px" , marginBottom :"30px"}}>
    <div className='product-card'>
        <div className='image hidden-in-mobile'>
            <img src={testPic} alt='pic' loading='lazy' />
        </div>
        <div className='info'>
            <div className='titles'>
                <div className='top-titles'>
                    <h3>AirPods </h3>
                </div>
                <div className='price'><sup>$</sup> 88</div>
            </div>
            <div className='des'>
                This Airp Pods Contain Apple with iphone 54 64GB
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProductItem
