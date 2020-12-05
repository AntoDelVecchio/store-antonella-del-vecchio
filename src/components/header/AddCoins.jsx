import React from 'react';
import coinImage from '../../assets/icons/coin.svg';
import UserServices from '../../services/userServices';

function AddCoins() {

    const addMore = async (amountCoins) => {
        await UserServices.postCoins(amountCoins);
        alert(`Agregaste ${amountCoins}`);
    }

    return (
        <div className="add-more-coins">
            <button onClick={() => addMore(1000)} 
            className="add-coins-button">
                + 1000
                <img className="coin-image" src={coinImage} alt="coin"/>
            </button>
            <button onClick={() => addMore(5000)}
            className="add-coins-button">
                + 5000
                <img className="coin-image" src={coinImage} alt="coin"/>
            </button>
            <button onClick={() => addMore(7500)} 
            className="add-coins-button">
                + 7500
                <img className="coin-image" src={coinImage} alt="coin"/>
            </button>
        </div>
    )
}

export default AddCoins;