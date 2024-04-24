import React from 'react'
import "../styles/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
    <h1 className='ml-4 mb-12 font-extrabold text-7xl text-gp'>Greetings!!</h1>
    <p className='text-center mb-8 text-gr'>Welcome to<br/>XYZ Solutions Pvt Ltd.</p>
    <Link to="/login" className="landing-login-button ">SignIn</Link>
    <Link to="/register" className="landing-register-button">SignUp</Link>
  </div>
  )
}

export default Landing
