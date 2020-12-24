import React, { useContext, useState } from 'react';
import coinImage from '../../assets/icons/coin.svg';
import UserServices from '../../services/userServices';
import {Context} from '../../contexts/contextProvider';
import Alert from './Alert';

function AddCoins() {

    const {setUser} = useContext(Context);

    const [addedCoins, setAddedCoins] = useState({status: false, succeed: false});

    const addMore = async (amountCoins, buttonElement) => {
        buttonElement.disabled = true;
        const succeed = await UserServices.postCoins(amountCoins);
        setAddedCoins({status: true, succeed});
        setTimeout(() => setAddedCoins({status: false, succeed: false}), 5000);
        const updatedUser = await UserServices.getUser(); //Esto es para que se actualice la cantidad de monedas
        setUser(updatedUser);
        buttonElement.disabled = false;
    }

    return (
        <>
            <div className="add-more-coins-container">
                <button onClick={(event) => addMore(1000, event.target)} 
                className="add-coins-button">
                    <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>1000</span>
                    <img className="coin-icon" src={coinImage} alt="coin"/>
                </button>
                <button onClick={(event) => addMore(5000, event.target)}
                className="add-coins-button">
                    <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>5000</span>
                    <img className="coin-icon" src={coinImage} alt="coin"/>
                </button>
                <button onClick={(event) => addMore(7500, event.target)} 
                className="add-coins-button">
                    <span className="coins-quantity-to-add"><i className="fas fa-plus"></i>7500</span>
                    <img className="coin-icon" src={coinImage} alt="coin"/>
                </button>
            </div>
            <div className="alert-message-container">
                {addedCoins.status && <Alert succeed={addedCoins.succeed} />}
            </div>
        </>
    )
}

export default AddCoins;