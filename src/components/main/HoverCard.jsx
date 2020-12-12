import React, { useContext } from "react";
import buyIconHover from "../../assets/icons/buy-white.svg";
import coinIcon from "../../assets/icons/coin.svg";
import ProductsServices from "../../services/productsServices";
import UserServices from "../../services/userServices";
import {Context} from "../../contexts/contextProvider";

function HoverCard(props) {

    const {setUser} = useContext(Context);

    const{
        cost,
        id
    } = props

    const redeemProduct = async () => {
        await ProductsServices.postRedeem(id);
        const updatedUser = await UserServices.getUser();
        setUser(updatedUser);
        alert("Producto canjeado exitosamente!!!");
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