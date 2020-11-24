import React from "react";
import imageHeader from "../../assets/header-image.png";

function HeaderImage() {
    return(
        <div className="header-image-ctn">
            <img className="header-image" src={imageHeader} alt="electronics"/>
            <h1 className="title">Electronics</h1>
        </div>
    )
}; 

export default HeaderImage;