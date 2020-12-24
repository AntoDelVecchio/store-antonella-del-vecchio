import React, { useContext, useEffect } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import ProductsGallery from "./ProductsGallery";
import ProductsServices from "../../services/productsServices";
import { Context } from "../../contexts/contextProvider";
import usePagination from "../../utils/Pagination";

function Main() {

    const {products, setProducts} = useContext(Context);

    const { nextPage, prevPage, currentItems, maxProducts, shownMaxProductsInfo } = usePagination(products, 16);

    const getProducts = async () => {
        const productsArray = await ProductsServices.getProducts();
        setProducts(productsArray);
    }

    useEffect( () => getProducts(), []);

    return(
        <main className="main">
            <Filter products={products} setProducts = {setProducts} nextPage={nextPage} prevPage={prevPage} maxProducts={maxProducts} shownMaxProductsInfo={shownMaxProductsInfo} />
            <ProductsGallery products={currentItems()} />
            <Footer nextPage={nextPage} prevPage={prevPage} maxProducts={maxProducts} shownMaxProductsInfo={shownMaxProductsInfo}/>
        </main>
    )
}; 

export default Main;