import React from "react";
import "./CSS/Proudct.css";
import { Link } from "react-router-dom";
function Product({key, id, title, image, amazon, flipcart, LS, ALink, FLink, LsLink }) {
  const data = { key:key,id: id, title: title, image: image, amazon: amazon, flipcart: flipcart, LS: LS, ALink: ALink, FLink: FLink, LsLink: LsLink }
  let AmazonLink = ALink;
  let FlipcartLink = FLink;
  let LocalSellerLink = LsLink;
  console.log(FlipcartLink);
  return (
    <div className="product">
      <Link to="/individual" state={data} className="nav-link product">
        <div className="product__info">
          <p>{title}</p>
        </div>
        <img src={image} alt="" />
      </Link>
    </div>
  );
}

export default Product;
