import React, { useContext, useState } from "react";
import { Context } from "../../contexts/contextProvider";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/icons/coin.svg";
import AddCoins from "./AddCoins";

function HeaderBar() {

    const {user: {name, points}} = useContext(Context);

    const [flag, setFlag] = useState(false);

    const handleAddCoins = () => {
        setFlag(!flag);
    }

    return(
        <div>
            <div className="header-bar-ctn">
                <img src={logo} alt="logo"/>
                <div className="user-ctn">
                    <h3 className="user">{name}</h3>
                    <div onClick={handleAddCoins}
                    className="coins-ctn" 
                    title="Add more coins">
                        <span className="cant-coins">{points}</span>
                        <img className="coin-icon" src={coinIcon} alt="coin"/>
                    </div>
                </div>
            </div>
            {flag === false ? "" : <AddCoins />}
        </div>
    )
}; 

export default HeaderBar;