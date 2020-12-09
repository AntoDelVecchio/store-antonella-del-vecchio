import React, { useEffect, useState } from "react";
import  UserServices from "../services/userServices";

const Context = React.createContext();
export { Context };

function AppProvider({ children }) {

    const [products, setProducts] = useState([]);

    const [user, setUser] = useState({name:"", points:""});

    const getUserData = async () => {
        const userData = await UserServices.getUser();
        setUser(userData);
    }

    useEffect( () => getUserData(), []);

    return (
        <Context.Provider value={{ user, products, setProducts }}>
        {children}
        </Context.Provider>
    );
}

export default AppProvider;