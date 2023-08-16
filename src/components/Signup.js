import React from 'react'
import './CSS/Signup.css'
import logo from './logo/logo.png';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <>
        <div className="login-card-container">
            <div className="login-card">
                <div className="login-card-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="login-card-header">
                    <h1>Sign Up</h1>
                    <div>Please sign up to use Compareverything</div>
                </div>
                <form className="login-card-form">
                <div className="form-item">
                        <input type="text" className='d-flex' placeholder="Enter Name" id="emailForm" 
                        autoFocus required/>
                    </div>
                    <div className="form-item">
                        <input type="email" className='d-flex' placeholder="Enter E-Mail" id="emailForm" 
                        autoFocus required/>
                    </div>
                    <div className="form-item">
                        <input type="text" className='d-flex' placeholder="Enter Phone Number" id="emailForm" 
                        autoFocus required/>
                    </div>
                    <div className="form-item">
                        <input type="password" placeholder="Enter Password" id="passwordForm"
                        required/>
                    </div>
                    <Link to="/" className='nav-link logb'>Sign Up</Link>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup
