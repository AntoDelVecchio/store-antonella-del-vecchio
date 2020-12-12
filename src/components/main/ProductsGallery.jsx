import React from "react";
import ProductCard from "./ProductCard";
import SuccessErrorModal from "./SuccessErrorModal";

function ProductsGallery({products}) {

    let success = true;

    return(
        <div className="products-gallery">
            {products.map((product, i) => <ProductCard key={product._id + i} {...product}/> )}
            <SuccessErrorModal success = {success}/>
        </div>
    )
}; 

export default ProductsGallery;