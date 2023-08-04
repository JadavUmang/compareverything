import React, { useEffect } from 'react'
import './CSS/Books.css';
import Product from './Product';
function Books(props) {
    useEffect(() => {
        fetch(`http://localhost:3005/books`)
          .then((res) => res.json())
          .then((data) => props.setData(data))
          .catch((err) => console.log(err + "error in books"));
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
      <div className={`Books__root ${props.mode === 'light'?'Books__root__light':'Books__root__dark'}`}>
        <div className="Books__container">
        <img
          className="Book__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/bookstore/BXHP23/Holi_special_Books_store.jpg"
          alt=""
        />
          {chunks.map((chunk, i) => (
            <div className="Books__row">
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

export default Books
