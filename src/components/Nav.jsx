import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
    const { products } = useContext(ProductContext);

    let distinct_Category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_Category = [...new Set(distinct_Category)];

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
    }
    return (
        <nav className=" w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
            <a className=" py-2 px-5 border rounded border-blue-200 text-blue-300" href="/create">
                Add New Product
            </a>
            <hr className=" my-3 w-[85%]" />
            <h1 className=" text-2xl mb-3 w-[80%]">Catagory Filter</h1>
            <div className=" w-[80%]">
                {distinct_Category.map((c, i) =>
                    <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3">
                        <span style={{ backgroundColor: color() }} className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-300"></span>
                        {" "}{c}
                    </Link>
                )}
            </div>
        </nav >
    )
}

export default Nav