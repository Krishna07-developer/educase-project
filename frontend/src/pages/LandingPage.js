import React from 'react'
import {Link} from "react-router-dom"
const LandingPage = () => {
  return (
    <div className='container-sm position-absolute ' style={{bottom:'20px'}}>
        <div style={{maxWidth:'400px', margin :'auto'}}>
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className='vstack gap-3' >
            <Link to={'/sign-up'}><button className='btn custom-btn-blue text-white button-style' >Create Account</button></Link>
            <Link to={'/login'}><button className='btn custom-btn-violet button-style'>Already Registered?Login</button></Link>
          </div>
        </div>
    </div>
  )
}

export default LandingPage