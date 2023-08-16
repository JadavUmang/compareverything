import React, { useState, useEffect } from 'react'
import './CSS/AboutUs.css';
import AboutImage from './Images/about-us-top-bar.jpg';
function AboutUs(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/login")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${AboutImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  };
  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // black with 50% opacity
    position: 'absolute',
    width: '100%',
    height: '275px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <>
      <div className="about-us" style={backgroundStyle}>
        <div className="about-us-content" style={overlayStyle}>
          <htmlH1>`About Us`</htmlH1>

        </div>
      </div>
      
      <div className={`aboutus__data ${props.mode==='light'?'aboutus__data__light':'aboutus__data__dark'}`}>
      <h1>INFORMATION</h1>
      <p>{`This website for purchasing products to help compare the price from various e-commerce websites, this Price comparison site is extremely helpful for frequent online shoppers to check prices on different online stores in one place, this system will show you the product prices from different retailers to show you where to buy the product at affordable price.`}</p>
      <hr/>
      <h1>CHARACTERISTICS</h1>
      <ul>
      <li>It saves time. It became easy to shop in affordable prices
      </li>
      <li>Reliable for interaction.</li>
      <li>Efficient work</li>
      </ul>
      <hr/>
      <h1>Contact Admin :</h1>
      {data.map((item, index) => (
        <div key={index} className="about-us-section">
          <ul>
            <li>Name : {item.AdminName}<br/>
            <ul>
            Email : {item.Email}<br/>
            Mobile Number : {item.MobileNumber}
            </ul></li>
          </ul>
        </div>
      ))}
      </div>

    </>
  )
}

export default AboutUs
