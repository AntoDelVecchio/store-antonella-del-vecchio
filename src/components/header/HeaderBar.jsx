import React, { useContext } from "react";
import { Context } from "../../contexts/contextProvider";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/icons/coin.svg";

function HeaderBar() {

    const {user: {name, points}} = useContext(Context);

    return(
        <div className="header-bar-ctn">
            <img src={logo} alt="logo"/>
            <div className="user-ctn">
                <h3 className="user">{name}</h3>
                <div className="coins-ctn">
                    <span className="cant-coins">{points}</span>
                    <img className="coin-icon" src={coinIcon} alt="coin"/>
                </div>
            </div>
        </div>
    )
}; 

export default HeaderBar;