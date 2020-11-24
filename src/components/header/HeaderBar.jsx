import React from "react";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function HeaderBar() {
    return(
        <div className="header-bar-ctn">
            <img src={logo} alt="logo"/>
            <div className="user-ctn">
                <h3 className="user">Username</h3>
                <div className="coins-ctn">
                    <span className="cant-coins">6000</span>
                    <img className="coin-icon" src={coin} alt="coin"/>
                </div>
            </div>
        </div>
    )
}; 

export default HeaderBar;