import React, { useContext } from 'react';
import HoverCard from "./HoverCard";
import { Context } from "../../contexts/contextProvider";
import buyIcon from "../../assets/icons/buy-blue.svg";
import coinIcon from "../../assets/icons/coin.svg";

function ProductCard(props) {

  const { _id, category, cost, img, name } = props;
  const {user: {points}} = useContext(Context);

  // useEffect(()=> {console.log(product)}, [])
  return(
    <div className="product-card">
      { points > cost && <HoverCard cost={cost} id={_id}/> }
      <div className="images-ctn">
        {
          points > cost ?
          <img src={buyIcon} alt="buy-icon" className="buy-icon" />
          :
          <div className="buy-icon cant-buy">
            <span className="remaining-coins">{`You need ${cost-points}`}</span>
            <img className="coinIcon" src={coinIcon} alt="coin"/>
          </div>
        }
        
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