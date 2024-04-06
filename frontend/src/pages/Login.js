import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice';
import {useDispatch} from 'react-redux'



 
const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    emailaddress : '',
    password : '',
  })

  const handleInput = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    try {
      const res = await fetch('http://localhost:3500/api/login',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formData)
      })

      const data = await res.json();
      dispatch(signInSuccess((data)))
      navigate('/profile')
      
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <div style={{maxWidth:'400px',margin:"auto"}}>
        <div>
          <h1>Signin to your<br/> PopX account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <form className='mt-5 vstack gap-3' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailaddress">Email address</label>
            <input type="text" className="form-control" name='emailaddress' id="emailaddress" value={formData.emailaddress} onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" name='password' id="password"  value={formData.password} onChange={handleInput} required  />
          </div>
          <button className='btn custom-btn-blue text-white button-style form-control' >Login</button>
          <span>Go to Home? <Link to={'/'}>Home</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login