import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ProductosGallery from "./ProductsGallery";
import ProductsServices from "../../services/productsServices";

function Main() {

    const [products, setProdcuts] = useState([]);

    const sortProducts = (sortFunction) => {
        const sortedProducts = products.slice().sort(sortFunction);
        setProdcuts(sortedProducts);
    }

    const getProducts = async () => {
        const productsArray = await ProductsServices.getProducts();
        setProdcuts(productsArray);
    }

    useEffect( () => getProducts(), []);

    return(
        <div className="main">
            <Filter sortProducts={sortProducts}/>
            <ProductosGallery products={products} />
        </div>
    )
}; 

export default Main;