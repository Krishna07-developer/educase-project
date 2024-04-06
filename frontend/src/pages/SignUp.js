import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


const SignUp = () => {

  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    fullname : '',
    emailaddress : '',
    phonenumber : '',
    password : '',
    companyname : '',
    agency : ''
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
      const response = await axios.post('http://localhost:3500/api/sign-up',formData)
      const responseData = response.data
      navigate('/profile')
      
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div >
      <div style={{maxWidth:'400px',margin:"auto"}}>
        <h1>Create your<br/> PopX account</h1>
        <form className='mt-5 vstack gap-2' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name <span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" name="fullname" id="fullname" value={formData.fullname} onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone Number <span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" name='phonenumber' id="phonenumber" value={formData.phonenumber} onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="emailaddress">Email address <span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" name='emailaddress' id="emailaddress" value={formData.emailaddress} onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" name='password' id="password" value={formData.password} onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="companyname">Company name</label>
            <input type="text" className="form-control" name='companyname' id="companyname" value={formData.companyname} onChange={handleInput}  />
          </div>
          <div>
            <h6>Are you an Agency? <span style={{color:'red'}}>*</span></h6>
            <div className="form-group">
              <div className='hstack gap-3'>
                <input type="radio" name='agency' id='yes' value='yes' onChange={handleInput} checked={formData.agency === 'yes'}/>
                <h6 htmlFor="yes" className='labelradio'>Yes</h6>
                <input type="radio" name='agency' id='no' value='no' onChange={handleInput} checked={formData.agency === 'no'}/>
                <h6 htmlFor="no" className='labelradio'>No</h6>
              </div>
            </div>
          </div>
          <button className='btn custom-btn-blue text-white button-style fixed-bottom mb-3 ' style={{maxWidth : '390px',bottom:'20px',margin:'auto'}} >Create Account</button>
          <span>Go to Home? <Link to={'/'}>Home</Link></span>
        </form>
      </div>
    </div>
  )
}

export default SignUp