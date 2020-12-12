import React, { useContext } from "react";
import imageHeader from "../../assets/header-image.png";
import { Context } from "../../contexts/contextProvider";

function HeaderImage() {
    
    const {user: {redeemHistory},products} = useContext(Context);

    return(
        <div className="header-image-ctn">
            <img className="header-image" src={imageHeader} alt="electronics"/>
            <h1 className="title">{ products.toString() === redeemHistory.toString() ? "Redeem history" : "Electronics"}</h1>
        </div>
    )
}; 

export default HeaderImage;