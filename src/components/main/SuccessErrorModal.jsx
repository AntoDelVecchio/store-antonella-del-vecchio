import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSmileBeam,
    faFrownOpen
} from '@fortawesome/free-solid-svg-icons';
import { Context } from "../../contexts/contextProvider";

function SuccessErrorModal({success}) {

    const {redeemState, setRedeemState} = useContext(Context);

    return(
        redeemState !== null ? (
            <div className="success-container">
            <FontAwesomeIcon icon={ success ? faSmileBeam : faFrownOpen} />
            <h3>Success!!</h3>
            <span></span>
            <button onClick={() => setRedeemState(null)}>Okay!</button>
            </div>)
        : null
    )
}

export default  SuccessErrorModal;