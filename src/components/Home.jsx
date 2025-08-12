import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import { useContext } from 'react'
import Loading from './Loading'

import axios from '../utils/axios'


function Home() {

    const { products } = useContext(ProductContext);
    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredProduct, setfilteredProduct] = useState(null);



    const getproductcategory = async () => {
        try {
            const { data } = await axios(`/products/category/${category}`)
            console.log(data);
            setfilteredProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!filteredProduct || category == "undefined") setfilteredProduct(products);
        if (category != "undefined") {
            getproductcategory();
        }


    }, [category, products]);

    return (products ?
        <>
            <Nav />
            <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
                {
                    filteredProduct &&

                    filteredProduct.map((p, i) => {
                        return (
                            <Link key={i} to={`/Details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center">
                                <image
                                    className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                                    src={{`url(${p.image})`}}
                                ></image>
                                <h1 className="hover:text-blue-300">
                                    {p.title}
                                </h1>
                            </Link>)
                    })}

            </div>
        </> : <Loading />
    )
}

export default Home
