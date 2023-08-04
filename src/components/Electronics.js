import React, { useEffect } from "react";
import "./CSS/Electronics.css";
import Product from "./Product";
function Electronics(props) {
  useEffect(() => {
    fetch(`http://localhost:3005/electronics`)
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err + "error in electronics"));
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
      <div className={`Elec__root ${props.mode === 'light'?'Elec__root__light':'Elec__root__dark'}`}>
        <div className="Elec__container">
        <img
          className="Elec__image "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Q1/1242x550_BXGY_PS5_3.jpg"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Elec__row">
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

export default Electronics;
