import React,{useEffect,useState} from "react";
import "./CSS/indi_product.css";
import Product from "./Product";
import { useLocation } from "react-router-dom";
import flipkart from "./logo/flipkart-logo.png";
const IndiProduct = (props) => {
  useEffect(() => {
    if (props.id) {
      fetch(`http://localhost:3005/moreindi?value=${encodeURIComponent(props.id)}`)
      .then((res) => res.json())
      .then((data) => props.setData(data))
      .catch((err) => console.log(err));
    }
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
  const { state } = useLocation();
  return (
    <>
      <div className="partition2"></div>
      <div
        className={`indi__product ${
          props.mode === "light" ? "indi__light" : "indi__dark"
        }`}

        onClick={handleClick}
      >
        {state && (
          <>
            <div
              className={`indi__product__data ${
                props.mode === "light"
                  ? "indi__product__data__light"
                  : "indi__product__data__dark"
              }`}
            >
              <img src={state.image} />
            </div>
            <div className="partition"></div>
            <div className="indi__product__data">
              <h1
                className={`${
                  props.mode === "light"
                    ? "product__title__light"
                    : "product__title__dark"
                }`}
              >
                {state.title}
              </h1>
              <div className="button__group">
                <div
                  className="btn-group-vertical"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button onClick={()=>window.open(state.ALink)} type="button" className="btn button btn1">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />{" "}
                    Amazon price {` ₹${state.amazon}`}
                  </button>
                  <button onClick={()=>window.open(state.FLink)} type="button" className="btn button btn2">
                    <img src={flipkart} />
                    Flipkart price {` ₹${state.flipcart}`}
                  </button>
                  <button onClick={state.LsLink} type="button" className="btn button btn3">
                    Local Seller price {` ₹${state.LS}`}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="partition2"></div>
      <div className={`${props.mode ==='light'? 'mode__light':'mode__dark'}`}>
        <h1 className={`mp ${props.mode ==='light'? 'mp__light':'mp__dark'}`}>
          <i>More Products Like this</i>
        </h1>
        <div className="products" onClick={handleClick}>
          {chunks.map((chunk, i) => (
            <div className={`product__row ${props.mode === 'light'?'product__row__light':'product__row__dark'}`} key={i}>
              {chunk.map((d)=>(  
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
};

export default IndiProduct;
