import React from "react";
import Filter from "./Filter";
import Productos from "./Productos";

function Main() {
    return(
        <div className="main">
            <Filter />
            <Productos />
        </div>
    )
}; 

export default Main;