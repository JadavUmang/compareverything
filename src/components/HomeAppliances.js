import React from 'react'
import "./CSS/HomeAppliances.css";
import Product from './Product';
import { useEffect } from 'react';

function HomeAppliances(props) {
    useEffect(() => {
        fetch(`http://localhost:3005/homeappliances`)
          .then((res) => res.json())
          .then((data) => props.setData(data))
          .catch((err) => console.log(err + "error in homeappliances"));
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
        <div className={`HomeAppliances__root ${props.mode === 'light'?'HomeAppliances__root__light':'HomeAppliances__root__dark'}`}>
          <div className="HomeAppliances__container">
          <img
          className="HA__image "
          src="https://m.media-amazon.com/images/G/31/img21/BVD/PC/Stores/BXGY_NEW._CB591973945_.gif"
          alt=""
        />
            {chunks.map((chunk, i) => (
              <div className="HomeAppliances__row">
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

export default HomeAppliances
