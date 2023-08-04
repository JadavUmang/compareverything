import React, { useEffect } from 'react'
import "./CSS/Beauty.css";
import Product from './Product';
function Beauty(props) {
    useEffect(() => {
        fetch(`http://localhost:3005/beauty`)
          .then((res) => res.json())
          .then((data) => props.setData(data))
          .catch((err) => console.log(err + "error in beauty"));
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
      <div className={`Beauty__root ${props.mode === 'light'?'Beauty__root__light':'Beauty__root__dark'}`}>
        <div className="Beauty__container">
        <img
          className="Bueaty__image "
          src="https://m.media-amazon.com/images/G/31/img23/Beauty/Aman/May/Header._CB588591890_.gif"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Beauty__row">
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
  )
}

export default Beauty
