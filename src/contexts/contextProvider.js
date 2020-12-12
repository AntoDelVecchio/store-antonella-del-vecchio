import React, { useEffect, useState } from "react";
import  UserServices from "../services/userServices";

export const Context = React.createContext();

function AppProvider({ children }) {

    const [redeemState, setRedeemState] = useState(null);

    const [products, setProducts] = useState([]);

    const [user, setUser] = useState({name:"", points:"", redeemHistory:[] });

    const getUserData = async () => {
        const userData = await UserServices.getUser();
        setUser(userData);
    }

    useEffect( () => getUserData(), []);

    const onHistory = products.toString() === user.redeemHistory.toString(); 

    return (
        <Context.Provider value={{ user, products, setUser, setProducts, redeemState, setRedeemState, onHistory }}>
        {children}
        </Context.Provider>
    );
}

export default AppProvider;