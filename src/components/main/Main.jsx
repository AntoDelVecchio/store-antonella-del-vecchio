import React from "react";
import Filter from "./Filter";
import ProductosGallery from "./ProductsGallery";

function Main() {
    return(
        <div className="main">
            <Filter />
            <ProductosGallery />
        </div>
    )
}; 

export default Main;