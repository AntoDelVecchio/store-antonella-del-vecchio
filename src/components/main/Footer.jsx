import React from "react";
import chevronLeft from "../../assets/icons/arrow-left.svg";
import chevronRigth from "../../assets/icons/arrow-right.svg";

function Footer() {
    return(
        <div className="footer">
            <div className="pages-container">
                <span className="page">32 of 32 products</span>
            </div>
            <div className="move-page">
                <button className="btn-move">
                    <img className="slide" src={chevronRigth} alt="rigth"/>
                </button>
                <button className="btn-move">
                    <img className="slide" src={chevronLeft} alt="left"/>
                </button>
            </div>
        </div>
    )
}; 

export default Footer;