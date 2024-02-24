import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uploadPic from "./../../Image/upload.png" ; 
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import { updateProduct } from '../../RTK/Slice/ProductSlice';



const EditProduct = ({handleClose ,dataOfProduct }) => {


// For Dispatch Action
const dispatch = useDispatch() ; 

// For Access Category and Push in Select
const allCategory = useSelector(state => state.CategorySlice.allCategory.data) ;
const [category, setcategory] = React.useState('');

// For Access Category and Push in Select
const [available, setAvailable] = React.useState("");

// For Access Token
const {token } = useSelector(state => state.AuthSlice.auth) ;

// For Get and Access and the coin
const [money , setMoney] = useState("") ; 
const moneyList = [
  {
    name  :"USD"
  } ,
  {
    name  :"EUR"
  } ,{
    name  :"CAD"
  } ,{
    name  :"AUD"
  } ,{
    name  :"EGP"
  } ,{
    name  :"KWD"
  } 
]

//For Acccess Input
const [name , setName] = useState(dataOfProduct.name);
const [details , setDetails] = useState(dataOfProduct.details);
const [price , setPrice] = useState(dataOfProduct.price)
const imageRef =useRef(null ) ;


const handleMoney = (event)=>{
  setMoney(event.target.value)
}


// For Record The select input
const handleChange = (event) => {
  setcategory(event.target.value);
};

// For Handle Availablity
const handleAva = (event)=>{
  setAvailable(event.target.value)
}

// For Avaible Product
const availbaility = [
  {
    v : "in stock" ,
    value : "true"
  } , {
    v : 'out of stock' ,
    value : "false"
  }
]

// For Collect And Send Data
const data = new FormData() ; 

const updateProductHandler = ()=>{
  data.append("name" , name) ;
  data.append("details" , details) ; 
  data.append("price" , price) ;
  data.append("images[]" , imageRef.current.files[0]) ;
  data.append("coin" , money) ; 
  data.append("available" , available) ; 
  data.append("category_id" , category) ;
  data.append("delete_image[] " , dataOfProduct.images[0]) ;
  

  dispatch(updateProduct({token , data , id : dataOfProduct.id}))
  handleClose()
}
    

  return (
    <div className='add-category add-product'>
    <h3>Edite Proudct</h3>
    <TextField  value={name} onChange={(e)=>setName(e.target.value)} className='category-field' id="outlined-basic" label="Enter The Product name" variant="outlined" />
    <TextField value={price} onChange={(e)=>setPrice(e.target.value)} className='category-field' type='number' id="outlined-basic" label="Enter The Product price" variant="outlined" />
    <TextField
    id="outlined-multiline-static"
    className='category-field'
    label="Enter The details of product"
    multiline
    rows={3}
    value={details}
    onChange={(e)=>setDetails(e.target.value)}
   
  />


    <FormControl style={{width : "400px" , maxWidth : "100%" , margin : "10px 0px"}} >
    <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
    <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={category}
      label="Age"
      onChange={handleChange}

    >

      {
        allCategory ?  allCategory.map((item , idx)=>{
            return <MenuItem key={idx} value={item.id}>{item.title}</MenuItem>  
        }) : ""
      }
    </Select>
  </FormControl>

  <FormControl style={{width : "400px" , maxWidth : "100%" , margin : "10px 0px"}} >
    <InputLabel id="demo-simple-select-label">Choose Coin</InputLabel>
    <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={money}
      label="Age"
      onChange={handleMoney}

    >

    

      {
        moneyList.map((item , idx)=>{
            return <MenuItem key={idx} value={item.name}>{item.name}</MenuItem>
        })
      }
    </Select>
  </FormControl>


  <FormControl style={{width : "400px" , maxWidth : "100%" , margin : "10px 0px"}} >
    <InputLabel id="demo-simple-select-label">Choose Availablity</InputLabel>
    <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={available}
      label="Available"
      onChange={handleAva}
    >
      {
        availbaility.map((item , idx)=>{
            return <MenuItem key={idx} value={item.value}>{item.v}</MenuItem>
        })
      }
    </Select>
  </FormControl>


  <div className='upload-photo'>
  <input ref={imageRef} type="file" id="image" name="image" accept="image/*" />
  <img src={uploadPic} alt='lo' loading='lazy' />
  </div>
  
    <Button onClick={updateProductHandler}  variant="contained" style={{width : "200px" , maxWidth : "100%"}} className='add-category-btn'>Add </Button>

</div>
  );
};

export default EditProduct;