import React, { useState, useEffect } from "react";
import "./CSS/Home.css";
import Product from "./Product";

export default function Home(props) {
  useEffect(() => {
    fetch("http://localhost:3005/product")
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick=()=>{
    window.scrollTo(0,0);
  };

  const chunks = props.data.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);
  return (
    <div
      className={`home ${
        props.mode === "light" ? "home__light" : "home__dark"
      }`}
    >
      <div className="home__container">
        <img
          className="home__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif"
          alt=""
        />
        {chunks.map((chunk, i) => (
          <div className="home__row" onClick={handleClick} key={i}>
            {chunk.map((d) => (
              <Product  
                key={d.key}
                id={d.Pid}
                title={d.PDisc}
                image={d.PImage}
                amazon={d.PriceAmazon}
                flipcart={d.PriceFlipcart}
                LS={d.PriceLS}
                ALink={d.AmazonLink}
                FLink={d.FlipkartLink}
                LsLink={d.LS}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
