import React from 'react' ;
import "./Utility.css"

const NavBar = () => {



  // // Teest Axios
  // const getAllSectin = async ()=>{
  //   const response =await axios.get("http://127.0.0.1:8000/api/section" , {
  //   headers : {
  //     Authorization : "Bearer 43|VLI7IItHcMgg2y4RGCrxKw9pFmx2tpZnhcsQtQOEa2fa2df9"
  //   }
  // })
  // console.log(response.data)
  // }

  // getAllSectin()

  return (
    <nav>
      <div className='search'>
        <input placeholder='Search' className='input-filed' />
        <span className="material-symbols-outlined" >
          search
        </span>
      </div>
      <div className='btn-container'>
        <button  style={{padding : "9px 20px"}}>Logout</button>
      </div>
    </nav>
  )
}

export default NavBar
