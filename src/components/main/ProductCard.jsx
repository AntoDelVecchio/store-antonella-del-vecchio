import React from 'react';
import HoverCard from "./HoverCard";
// import Overlay from './Overlay'

import buyIcon from "../../assets/icons/buy-blue.svg";

function ProductCard(props) {

  let variableHover;
  const { _id, category, cost, img, name } = props;

// useEffect(()=> {console.log(product)}, [])
  return(
    <div className="product-card">
      <HoverCard cost={cost} id={_id}/>
      <div className="images-ctn">
        <img src={buyIcon} alt="buy-icon" className="buy-icon" />
        <img className="product-image" src={img.url} alt={name}/>
      </div>
      <div className="text-box">
        <h4 className="product-category">{category}</h4>
        <h3 className="product-model">{name}</h3>
      </div>
    </div>
  )
}

export default ProductCard;