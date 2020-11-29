import React, { useEffect, useState } from "react";
// import ProductsServices from "../services/productsServices";
import  UserServices from "../services/userServices";

const Context = React.createContext();
export { Context };

function AppProvider({ children }) {

    // ProductsServices.getProducts();

    const [user, setUser] = useState({name:"", coins:""});

    const getUserData = async () => {
        const usuario = await UserServices.getUser();
        setUser(usuario);
    }

    useEffect( () => getUserData(), []);

    return (
        <Context.Provider value={{ user }}>
        {children}
        </Context.Provider>
    );
}

export default AppProvider;