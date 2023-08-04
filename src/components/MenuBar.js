import React from "react";
import "./CSS/MenuBar.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
export default function MenuBar(props) {
  return (
    <>
      <nav className="nav ">
        <div
          className={`d-flex size ${
            props.mode === "light" ? "background-light" : "background-dark"
          } ${props.mode === "light" ? "textb" : "textw"}`}
        >
          <Link to={`/`} className={` d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto  pt-2 pb-1`}>
            <HomeIcon
              className={
                props.mode === "light" ? "Home__IconDark" : "Home__IconWhite"
              }
            />
          </Link>
          <Link
            to={`/Mobile`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Mobile
          </Link>
          <Link
            to={`/Electronics`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Electronics
          </Link>
          <Link
            to={`/Fashion`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Fashion
          </Link>
          <Link
            to={`/HomeAppliances`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Home Appliances
          </Link>
          <Link
            to={`/Beauty`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Beauty
          </Link>
          <Link
            to={`/Furniture`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Furniture
          </Link>
          <Link
            to={`/Books`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            Books
          </Link>

          <Link
            to={`/AboutUs`}
            className={`d-flex ${props.mode === "light"?"Linkeleml":"Linklemd"} nav-link mx-auto pt-2 pb-2 ${
              props.mode === "light" ? "textb" : "textw"
            }`}
          >
            AboutUs
          </Link>
        </div>
      </nav>
    </>
  );
}
