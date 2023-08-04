import React, { useState, useEffect } from "react";
import "./CSS/login.css";
import logo from "./logo/logo.png";
import { Link,useNavigate } from "react-router-dom";
function LoginForm(props) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let redirect = false;
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3005/login")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  // const authenticate = () => {
  //   data.map((d)=>( authenticateuser(d)))
  // };
  const authenticateuser=()=>{
    const authenticatedUser = data.find((d)=>d.Email===email && d.Password === password);
    if (authenticatedUser) {
      console.log("authentication succesful " + email + " and " + password);
      redirect = true;
      navigate('/Admin');
    } else {
      console.log("authentication failed " + email + " and " + password);
      redirect=false;
    }
  }

  return (
    <>
      <div className="login-card-container">
        <div className="login-card">
          <div className="login-card-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="login-card-header">
            <h1>Log In</h1>
            <div>Please login to use Compareverything</div>
          </div>
          <form className="login-card-form">
            <div className="form-item">
              <input
                type="email"
                className="d-flex"
                placeholder="Enter E-Mail"
                id="emailForm"
                onChange={(e)=> setEmail(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="form-item">
              <input
                type="password"
                placeholder="Enter Password"
                id="passwordForm"
                onChange={(e)=> setPassword(e.target.value)}
                required
              />
            </div>
            <button onClick={authenticateuser} className="nav-link logb">
              Log In
            </button>
               
          </form>
          {/* <div className="login-card-footer">
            Don't have an account?{" "}
            <Link to="/signup">Create a free account.</Link>
          </div> */}
        </div>
      </div>
      {/* {redirect && <Link to='/'/>} */}
    </>
  );
}

export default LoginForm;
