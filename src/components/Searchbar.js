import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/Searchbar.css";
import search from "./logo/search.png";
import dark from "./logo/Dark-Mode.png";
import light from "./logo/Light-Mode.png";
import LoginIcon from "@mui/icons-material/Login";
import MenuBar from "./MenuBar";
import logo from "./logo/Compareverything-logo.png";
import LogoLight from "./logo/logo-light.png";
export default function Searchbar(props) {
  const [searched,getSearch] = useState();
  const [text, setText]=useState(' ');
  function handleSearch(event){
    event.preventDefault();
    getSearch(text);
  }
  const handleChange = (event) =>{
    setText(event.target.value,()=>{

    });
  }
  useEffect(() => {
    if (searched) {
      fetch(`http://localhost:3005/searchres?value=${encodeURIComponent(searched)}`)
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err));
    }
  }, [searched]);
  const chunks = props.data.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);

  return (
    <div className="root">
      <nav className="root">
        <div
          className={`d-flex navbar-${props.mode} gradient-background-light`}
        >
          {/* Search bar code is given below */}
          <Link to="/" className="navbar-brand p-3 custom-bold">
            <img className="logo-margin" src={`${props.mode === "light"?logo:LogoLight}`} alt="" />
            {props.title}
          </Link>
          <form
            className="d-flex mx-auto pt-2 pb-2 header__search"
            role="search"
          >
            {/* form-control */}
            <input
              className="d-flex sb me-2 header__search"
              type="search"
              placeholder="Search product"
              aria-label="Search"
              list="searchDataList"
              onChange={handleChange}
            />
            <datalist id="searchDataList">
              <option value="ssd"/>
              <option value="ram"/>
            </datalist>
            <Link to="/result" state={props.data} className="btn header__searchIcon " onClick={handleSearch} type="submit">
              <img className="header__searchIcon" src={search} alt="" />
            </Link>
          </form>
          {/* Login / Sign Up page code below */}
          <div className="d-flex lg">
            <Link to="/login" className="nav-link header__option">
              <LoginIcon className="login__Icon header__optionLineOne" />
              <label className="header__optionLineTwo">login</label>
            </Link>
          </div>
          {/* Light to dark mode switch code below */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } p-3`}
          >
            <input
              className="form-check-input "
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {" "}
              <img src={props.mode === "light" ? light : dark} alt="" />
            </label>
          </div>
        </div>
      </nav>
      <MenuBar mode={props.mode} data={props.data} setData={props.setData} toggleMode={props.toggleMode} />
    </div>
  );
}
