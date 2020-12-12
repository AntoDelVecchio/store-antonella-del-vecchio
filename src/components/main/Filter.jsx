import React, { useState } from "react";
import chevronLeft from "../../assets/icons/arrow-left.svg";
import chevronRigth from "../../assets/icons/arrow-right.svg";
import {params} from "../../services/const";

function Filter({products, setProducts, prevPage, nextPage, maxProducts, shownMaxProductsInfo}) {

    const [activeFilter, setActiveFilter] = useState(0);

    const sortProducts = (buttonNumber, sortFunction) => {
        const sortedProducts = products.slice().sort(sortFunction);
        setProducts(sortedProducts);
        setActiveFilter(buttonNumber);
    }

    return(
        <div className="filter-ctn">
            <div className="botonera">
                <span className="page">{`${shownMaxProductsInfo} of ${maxProducts} products`}</span>
                <div className="btns-ctn">
                <p className='sort-controls-ctn'>
                    Sort by:
                    {params.map(({callback, wording}, i) => 
                    <button key={i} className={`filter-btn ${activeFilter === i ?'active' : ''}`} onClick={()=>sortProducts(i,callback)}>{wording}</button>)}
                </p>
                </div>
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

export default Filter;