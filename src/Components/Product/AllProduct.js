import React ,  { useEffect, useState , memo, useRef } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../RTK/Slice/ProductSlice';
import { ToastContainer } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getAllCategories } from '../../RTK/Slice/CategorySlice';
import { NavLink, useSearchParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getToken } from '../../RTK/Slice/AuthSlice';




const AllProduct = () => {

// For Access Search Params 
const [searchParams , setSearchParams] = useSearchParams() ; 

// For Dispatch Action
const dispath = useDispatch() ;

// For Acces Token
const token = useSelector(getToken); 

// For Access Input Search 
const [search , setSeach ] =useState("") ; 


// For Handle Performance
const handlePeformance = useRef(false) ; 


// For Get All Product
useEffect(()=>{
  if(!handlePeformance.current)
 {
  dispath(getAllProduct({token})) ;
  dispath(getAllCategories({token})) ;
  handlePeformance.current = true ; 
 }
} , [token , dispath])


// For Accees Select(Category)
const [category, setCategory] = React.useState('');

// For Accees Select (Stock)
const [stock, setStock] = React.useState('');
const stockStatus = [
  {
    state : "in stock" ,
    value : "true"
  } ,{
    state : 'out of stock' , 
    value : "false"
  }
 ] ; 

const handleChangeStock = (event) => {
  setStock(event.target.value);
  // setSearchParams(`?name=${category}&stock=${event.target.value}`)
  setSearchParams({name : category , stock :event.target.value })
};

const handleChange = (event) => {
  setCategory(event.target.value);
  // setSearchParams(`?name=${event.target.value}&stock=${stock}`)
  setSearchParams({name : event.target.value , stock : stock})
};

// For Access Product 
const allProducts = useSelector(state => state.ProductSlice.allProduct) ; 


// For Access Catogries
const {data } = useSelector(state => state.CategorySlice.allCategory) ; 

// For Clear Fitler 
const clearHandler = ()=>{
  setCategory('') ;
  setStock('') ; 
}
  

  return (
    <div>
    
    <div className='search-product'>
      <input onChange={(e)=> setSeach(e.target.value)} placeholder='Search For the product' />
    </div>
    
  
    <div style={{display : "flex" , alignItems : "center"}}>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Category</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={category}
            label="Category"
            onChange={handleChange}
            
          >
            {
              data ? data.map((item , idx)=>{
                return <MenuItem key={idx} value={item.id}>{item.title}</MenuItem>
              }) :""
            }
            
            
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Status</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={stock}
            label="Status"
            onChange={handleChangeStock}
            
          >
            {
              stockStatus ? stockStatus.map((item , idx)=>{
                return <MenuItem key={idx} value={item.value}>{item.state}</MenuItem>
              }) :""
            }
            
            
          </Select>
        </FormControl>

        <NavLink onClick={clearHandler} to={"."} style={{textDecoration : "none" , color : "white" , fontWeight :"bold"}}  className={"clear-btn btn btn-danger"}>Clear</NavLink>

    </div>
    

    <div className='all-product'>

    
    <ToastContainer />
          
        {/* Second Way To Filter */}
        {
          allProducts ?allProducts.filter((item)=>{
            return search === '' ? allProducts :  item.name.toLowerCase().includes(search.toLocaleLowerCase())
          }).filter((item)=>{
            return category === "" ? allProducts :category == item.category_id
          }).filter((item)=>{
            return stock === '' ? allProducts : item.available === stock
          }).map((item ,idx)=>{
            return <ProductItem key={idx} id={item.id} name={item.name} image={item.images[0]} details={item.details} price={item.price} coin={item.coin} available={item.available} rate={item.rate} category_id={item.category_id} /> 
            
          }) :<Stack spacing={1}>

          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Stack> 
        }

    </div>

    </div>
  )
} ;

export default AllProduct
