import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='mycard'>
     <div className="card auth-card">
      <h2>Instagram</h2>
      <input type='text' placeholder='Enter your E-mail'/>
      <input type='text' placeholder='Enter your password'/>
      <button className="btn waves-effect waves-light" >Login
    
  </button>
  <h5> 
 <Link to='/signup'>Don't have an account?</Link>
  </h5>
      </div>
    </div>
  )
}

export default Login
