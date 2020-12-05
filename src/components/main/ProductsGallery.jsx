import React from "react";
import ProductCard from "./ProductCard";

function ProductsGallery({products}) {

    return(
        <div className="products-gallery">
            {products.map(product => <ProductCard key={product._id} {...product}/> )}
        </div>
    )
}; 

export default ProductsGallery;