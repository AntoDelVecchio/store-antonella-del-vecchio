import React from "react";
import buyIconHover from "../../assets/icons/buy-white.svg";
import coinIcon from "../../assets/icons/coin.svg";
import ProductsServices from "../../services/productsServices";

function HoverCard(props) {

    const{
        cost,
        _id
    } = props

    const redeemProduct = () => {
        ProductsServices.postRedeem(_id);
        alert("funciona!!! producto canjeado exitosamente :D");
    }

    return(
        <div className="hover-card">
            <img src={buyIconHover} alt="buy" className="buy-icon-hover"/>
            <div className="cost">
                <span className="cant-coins">{cost}</span>
                <img className="coin-icon" src={coinIcon} alt="coin"/>
                <button className="redeem-btn" onClick={redeemProduct}>Redeem now</button>
            </div>
        </div>
    )
}

export default HoverCard;