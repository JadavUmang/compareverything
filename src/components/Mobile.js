import React, { useEffect } from "react";
import "./CSS/Mobile.css";
import Product from "./Product";
function Mobile(props) {
  useEffect(() => {
    fetch(`http://localhost:3005/mobile`)
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err + "error in Mobile"));
  }, []);
  const chunks = props.data.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);
  return (
    <>
      <div
        className={`Mobile__root ${
          props.mode === "light" ? "Mobile__root__light" : "Mobile__root__dark"
        }`}
      >
        <div className="Mobile__container">
        <img
          className="Mobile__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Teaser-GW/D78212246_IN_WLME_Samsung-Store-revamp_1242.gif"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Mobile__row">
              {chunk.map((d) => (
                <Product
                  key={d.id}
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
    </>
  );
}

export default Mobile;
