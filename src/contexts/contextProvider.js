import React, { useEffect, useState } from "react";
import  UserServices from "../services/userServices";

export const Context = React.createContext();

function AppProvider({ children }) {

    const [redeemState, setRedeemState] = useState(null);

    const [products, setProducts] = useState([]);

    const [user, setUser] = useState({name:"", points:"", redeemHistory:[] });

    const [onHistory, setOnHistory] = useState(false); 

    const getUserData = async () => {
        const userData = await UserServices.getUser();
        setUser(userData);
    }

    useEffect( () => getUserData(), []);

    return (
        <Context.Provider value={{ user, products, setUser, setProducts, redeemState, setRedeemState, onHistory, setOnHistory }}>
        {children}
        </Context.Provider>
    );
}

export default AppProvider;