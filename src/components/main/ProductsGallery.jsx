import React, { useEffect, useState } from "react";
import ProductsServices from "../../services/productsServices";
import ProductCard from "./ProductCard";

function ProductosGallery() {

    const [products, setProdcuts] = useState([]);

    const getProducts = async () => {
        const productsArray = await ProductsServices.getProducts();
        setProdcuts(productsArray);
    }

    useEffect( () => getProducts(), []);

    return(
        <div className="products-gallery">
            {products.map(product => <ProductCard key={product._id} {...product}/> )}
        </div>
    )
}; 

export default ProductosGallery;