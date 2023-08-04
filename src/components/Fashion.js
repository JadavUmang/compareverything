import React, { useEffect } from 'react'
import "./CSS/Fashion.css";
import Product from './Product';

function Fashion(props) {
  useEffect(() => {
    fetch(`http://localhost:3005/fashion`)
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err + "error in fashion"));
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
      <div className={`Fashion__root ${props.mode === 'light'?'Fashion__root__light':'Fashion__root__dark'}`}>
        <div className="Fashion__container">
        <img
          className="Fashion__image "
          src="https://m.media-amazon.com/images/G/31/img21/MA2023/YouthStore/Assets/Associates/associate-M._CB593171248_.gif"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Fashion__row">
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

export default Fashion
