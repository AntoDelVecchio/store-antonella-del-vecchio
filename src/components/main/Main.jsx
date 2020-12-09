import React, { useContext, useEffect } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import ProductosGallery from "./ProductsGallery";
import ProductsServices from "../../services/productsServices";
import { Context } from "../../contexts/contextProvider";

function Main() {

    const {products, setProducts} = useContext(Context);

    const getProducts = async () => {
        const productsArray = await ProductsServices.getProducts();
        setProducts(productsArray);
    }

    useEffect( () => getProducts(), []);

    return(
        <div className="main">
            <Filter products={products} setProducts = {setProducts}/>
            <ProductosGallery products={products} />
            <Footer />
        </div>
    )
}; 

export default Main;