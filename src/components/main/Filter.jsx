import React from "react";
import chevronLeft from "../../assets/icons/arrow-left.svg";
import chevronRigth from "../../assets/icons/arrow-right.svg";

function Filter({sortProducts}) {
    return(
        <div className="filter-ctn">
            <div className="botonera">
                <span className="page">16 of 32 products</span>
                <div className="btns-ctn">
                    <span className="sort">Sort by:</span>
                    <button className="button" onClick={()=>sortProducts((p1,p2) => (p1._id<p2._id) ? -1 : 1)}>Most recent</button>
                    <button className="button" onClick={()=>sortProducts((p1,p2) => p1.cost - p2.cost)}>Lowest price</button>
                    <button className="button" onClick={()=>sortProducts((p1,p2) => p2.cost - p1.cost)}>Highest price</button>
                </div>
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

export default Filter;