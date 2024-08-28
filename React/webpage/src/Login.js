import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import { FaThumbsUp } from "react-icons/fa6";
import { FaThumbsDown } from "react-icons/fa6";



function Login() {
  //day 2 of usestate-variable declaration and initial value 

  const  [count, setCount] = useState(0);
 
  const handleIncrement=()=>{
    setCount(count+1);

  }
  const handleDecrement =()=>{
    if(count>0){

      setCount(count-1);
    }
  }

  return (
    <div className=' width-75 d-flex justify-content-center align-items-center vh-100'>
      
      <div className='border border-dark'>
      <h1 className='text-center'>Updates</h1>
      
      {/* <Link to='/dashboard'>
      <button>Move to dashboard</button>
      </Link> */}
      
      <div className='text-center'>
      <label className='border border-primary w-75 text-center'>count: {count}</label>
      <div className='p-3'>

      <button className='d-flex align-items-center gap-2 w-100 rounded mb-2 border-0' onClick={handleIncrement}>Increment <FaThumbsUp className='ms-1' /></button>
      
      
      <button className='d-flex align-items-center gap-2 rounded border-0' onClick={handleDecrement}>Decrement <FaThumbsDown onClick={handleDecrement} /></button>
      
      </div>
      </div>

      </div>
      
    </div>
  )
}

export default Login