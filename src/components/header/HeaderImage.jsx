import React, { useContext } from "react";
import imageHeader from "../../assets/header-image.png";
import { Context } from "../../contexts/contextProvider";

function HeaderImage() {
    
    const { onHistory } = useContext(Context);

    return(
        <div className="header-image-ctn">
            <img className="header-image" src={imageHeader} alt="electronics"/>
            <h1 className="title">{ onHistory ? "Redeem history" : "Electronics"}</h1>
        </div>
    )
}; 

export default HeaderImage;