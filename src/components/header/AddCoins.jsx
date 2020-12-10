import React, { useContext } from 'react';
import coinImage from '../../assets/icons/coin.svg';
import UserServices from '../../services/userServices';
import {Context} from '../../contexts/contextProvider';

function AddCoins() {

    const {setUser} = useContext(Context);

    const addMore = async (amountCoins) => {
        const response = await UserServices.postCoins(amountCoins);
        const updatedUser = await UserServices.getUser();
        setUser(updatedUser);
        alert(`${amountCoins} coins added. You now have ${response["new Points"]} coins!!`);
    }

    return (
        <div className="add-more-coins-container">
            <button onClick={() => addMore(1000)} 
            className="add-coins-button">
                <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>1000</span>
                <img className="coin-icon" src={coinImage} alt="coin"/>
            </button>
            <button onClick={() => addMore(5000)}
            className="add-coins-button">
                <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>5000</span>
                <img className="coin-icon" src={coinImage} alt="coin"/>
            </button>
            <button onClick={() => addMore(7500)} 
            className="add-coins-button">
                <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>7500</span>
                <img className="coin-icon" src={coinImage} alt="coin"/>
            </button>
        </div>
    )
}

export default AddCoins;