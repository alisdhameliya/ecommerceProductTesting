import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';

export const ProductContext = createContext();

function Context(props) {
    const [products, setProducts] = useState([]);

    const getproduct = async () => {
        try {
            const { data } = await axios("/products");
            setProducts(data); // Ensure data is being set
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
