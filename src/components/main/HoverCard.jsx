import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/contextProvider";
import buyIconHover from "../../assets/icons/buy-white.svg";
import coinIcon from "../../assets/icons/coin.svg";

function HoverCard(props) {

    const{
        cost,
        _id
    } = props

    // const {user} = useContext(Context);

    return(
        <div className="hover-card">
            <img src={buyIconHover} alt="buy" className="buy-icon-hover"/>
            <div className="cost">
                <span className="cant-coins">{cost}</span>
                <img src={coinIcon} alt="coin"/>
                <button className="redeem-btn">Redeem now</button>
            </div>
        </div>
    )
}

export default HoverCard;