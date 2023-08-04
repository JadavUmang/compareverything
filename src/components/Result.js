import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./CSS/Result.css";
import { useLocation } from "react-router-dom";
function Result(props) {
  const state = useLocation();
  const data = state.data;
  const chunks = data.reduce((acc, item, index) => {
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
        className={`${
          props.mode === "light"
            ? "result__container__light"
            : "result__container__dark"
        }`}
      >
        {chunks.map((chunk, i) => (
          <div className="result__row" key={i}>
            {chunk.map((d) => (
              <Product
                key={d.id}
                id={d.Pid}
                title={d.PDisc}
                image={d.PImage}
                amazon={d.PriceAmazon}
                flipcart={d.PriceFlipcart}
                LS={d.PriceLS}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
