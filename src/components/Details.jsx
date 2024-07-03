import React, { useState } from 'react'
import axios from '../utils/axios';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';

function Details() {

    const [product, setproduct] = useState(null);
    const { id } = useParams();

    const getsingleproduct = async () => {

        try {
            const { data } = await axios.get(`/products/${id}`);
            setproduct(data);
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getsingleproduct();
    }, [])

    return (product ?
        <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
            <img
                className="object-contain h-[80%] w-[40%]"
                src={`${product.image}`}
                alt="Fjallraven Foldsack No. 1 Backpack"
            />
            <div className="content w-[50%]">
                <h1 className="text-4xl">
                    {product.title}
                </h1>
                <h3 className="text-zinc-400 my-5">{product.category}</h3>
                <h2 className="text-red-300 mb-3">$ {product.price}</h2>
                <p className='mb-2'>{product.description}
                </p>
                <Link to={'/edit'} className="border rounded-sm border-blue-400 py-1 px-3  text-blue-400 hover:underline">Edit</Link>
                <Link to={'/delete'} className="border rounded-sm border-red-400 text-red-400 py-1 px-3 hover:underline ml-3">Delete</Link>
            </div>
        </div> : <Loading />

    )
}

export default Details