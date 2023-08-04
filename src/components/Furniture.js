import React, { useEffect } from 'react'
import './CSS/Furniture.css';
import Product from './Product';
function Furniture(props) {
    useEffect(() => {
        fetch(`http://localhost:3005/furniture`)
          .then((res) => res.json())
          .then((data) => props.setData(data))
          .catch((err) => console.log(err + "error in furniture"));
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
      <div className={`Furniture__root ${props.mode === 'light'?'Furniture__root__light':'Furniture__root__dark'}`}>
        <div className="Furniture__container">
        <img
          className="Furniture__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2023/BVD-2/Offers-you-cannot-refuse/Offers_you_cant_refuse_.jpg"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Furniture__row">
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

export default Furniture
