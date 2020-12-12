import React from "react";
import chevronLeft from "../../assets/icons/arrow-left.svg";
import chevronRigth from "../../assets/icons/arrow-right.svg";

function Footer({prevPage, nextPage, maxProducts, shownMaxProductsInfo}) {
    return(
        <div className="footer">
            <div className="pages-container">
                <span className="page">{`${shownMaxProductsInfo} of ${maxProducts} products`}</span>
            </div>
            <div className="move-page">
            <button onClick={prevPage} className="btn-move">
                    <img className="slide" src={chevronLeft} alt="left"/>
                </button>
                <button onClick={nextPage} className="btn-move">
                    <img className="slide" src={chevronRigth} alt="rigth"/>
                </button>
            </div>
        </div>
    )
}; 

export default Footer;