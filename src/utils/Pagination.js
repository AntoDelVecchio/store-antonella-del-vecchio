import { useEffect, useState } from "react";

function usePagination(data, itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const maxProducts = data.length;
    const shownMaxProductsInfo = Math.min(currentPage * itemsPerPage, maxProducts);
    
    function currentItems() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }
    
    function nextPage() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }
    
    function prevPage() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    useEffect(() => {
        setCurrentPage(1);
    },[data]);
    
    return { nextPage, prevPage, currentItems, currentPage, maxPage, maxProducts, shownMaxProductsInfo };
}

export default usePagination;