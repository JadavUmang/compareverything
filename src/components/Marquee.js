import React from 'react'
import img1 from './Images/Marquee/img1.png';
import img2 from './Images/Marquee/img2.png';
import img3 from './Images/Marquee/img3.jpeg';
import img4 from './Images/Marquee/img4.jpg';
import img5 from './Images/Marquee/img5.jpg';
import "./CSS/Marquee.css";

export default function Marquee() {
  return (
    <>
        <div className="marqueegloble">
            <marquee className="marquee-content"  behavior="scroll">
                <img src={img5} alt="Beauty Products" />
                <img src={img1} alt="Samsung Galaxy S23 Ultra" />
                <img src={img2} alt="Apple Watch Ultra" />
                <img src={img3} alt="Zara By Steven Meisel" />
                <img src={img4} alt="Home Appliances" />
            </marquee>    
        </div> 
    </>
  )
}
