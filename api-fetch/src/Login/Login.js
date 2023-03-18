import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let navigate=useNavigate();
    const navigateNextPage=()=>{
        navigate('../API')
    }
  return (
    <div>Login
        <Button onClick={(e)=>navigateNextPage(e)}>Login</Button>
    </div>
  )
}

export default Login