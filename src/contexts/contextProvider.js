import React, { useEffect, useState } from "react";
import  UserServices from "../services/userServices";

export const Context = React.createContext();

function AppProvider({ children }) {

    const [products, setProducts] = useState([]);

    const [user, setUser] = useState({name:"", points:""});

    const getUserData = async () => {
        const userData = await UserServices.getUser();
        setUser(userData);
    }

    useEffect( () => getUserData(), []);

    return (
        <Context.Provider value={{ user, products, setUser, setProducts }}>
        {children}
        </Context.Provider>
    );
}

export default AppProvider;