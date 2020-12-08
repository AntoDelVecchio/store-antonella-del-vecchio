/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/contextProvider";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/icons/coin.svg";
import AddCoins from "./AddCoins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faHistory
} from '@fortawesome/free-solid-svg-icons';


function HeaderBar() {

    const {user: {name, points, redeemHistory},products, setProducts} = useContext(Context);
    const [showHistory, setHistoryFlag] = useState(false);
    const [auxProducts, setAuxProducts] = useState([]);

    const [flag, setFlag] = useState(false);

    const handleAddCoins = () => {
        setFlag(!flag);
    }

    const handleHistory = async () => {
        setHistoryFlag(!showHistory);
    }

    useEffect(() => {

        if(products !== redeemHistory) {
            setAuxProducts(products);
        }

        setProducts((showHistory ? redeemHistory : auxProducts));

    },[showHistory]);

    return(
        <div>
            <div className="header-bar-ctn">
                <img src={logo} alt="logo"/>
                <div className="user-ctn">
                    <h3 className="user">{name}</h3>
                    <button onClick={handleAddCoins}
                    className="coins-ctn" 
                    title="Add more coins">
                        <span className="cant-coins">{points}</span>
                        <img className="coin-icon" src={coinIcon} alt="coin"/>
                    </button>
                    <button className="header-button" onClick={handleHistory} title={`see ${name} history`}>{showHistory === false ? <FontAwesomeIcon icon={faHistory} /> : <FontAwesomeIcon icon={faHome} /> }</button> 
                </div>
            </div>
            {flag === false ? "" : <AddCoins />}
        </div>
    )
}; 

export default HeaderBar;