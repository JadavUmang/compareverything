import React from 'react'
import "./CSS/login.css"
import logo from "./logo/logo.png"
import { Link } from 'react-router-dom';
import { Password } from '@mui/icons-material';
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,600,0,0";
export default function login(props) {
  return (
    <>
        <div className="login-card-container">
            <div className="login-card">
                <div className="login-card-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="login-card-header">
                    <h1>Log In</h1>
                    <div>Please login to use the platform</div>
                </div>
                <form className="login-card-form">
                    <div className="form-item">
                        {/* <span className="d-flex form-item-icon material-symbols-rounded">E-Mail</span> */}
                        <input type="email" className='d-flex' placeholder="Enter E-Mail" id="emailForm" name="email"
                        autoFocus required/>
                    </div>
                    <div className="form-item">
                        {/* <span className="form-item-icon material-symbols-rounded">Password</span> */}
                        <input type="password" placeholder="Enter Password" id="passwordForm" name="password"
                        required/>
                    </div>
                    <div className="form-item-other">
                        <div className="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" defaultChecked/>
                            <label htmlFor="rememberMeCheckbox">Remember me</label>
                        </div>
                        <a href="#" className="nav-link">I forgot my password!</a>
                    </div>
                    <Link to="/" className='nav-link logb'>Log In</Link>
                    {/* <button type="submit">Log In</button> */}
                </form>
                <div className="login-card-footer">
                    Don't have an account? <a href="#" className="nav-link">Create a free account.</a>
                </div>
            </div>
        </div>
    </>
  )
}
