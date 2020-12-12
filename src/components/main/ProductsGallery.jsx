import React from "react";
import ProductCard from "./ProductCard";

function ProductsGallery({products}) {

    return(
        <div className="products-gallery">
            {products.map((product, i) => <ProductCard key={product._id + i} {...product}/> )}
        </div>
    )
}; 

export default ProductsGallery;