import React, { useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
const Create = () => {
    const [products, setProducts] = useState(ProductContext);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const AddProductHandler = (e) => {
        e.preventDefault();
        if (
            title.trim().length < 4 ||
            image.trim().length < 4 ||
            category.trim().length < 4 ||
            price.toString().trim().length < 1 ||
            description.trim().length < 4
        ) {
            alert("Each and every input must have at least 4 characters");
            return;
        }
        const newProduct = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description,
        };
        setProducts(...newProduct, products);
    };
    return (
        <form onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
            <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>
            <input
                type="text"
                placeholder="Product Title"
                className=" bg-zinc-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input
                type="url"
                placeholder="Image Link"
                className=" bg-zinc-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />
            <div className=" w-1/2 flex justify-between">
                <input
                    type="text"
                    placeholder="Category"
                    className=" bg-zinc-100 rounded p-3 w-1/2 mb-3"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <input
                    type="number"
                    placeholder="Price"
                    className=" bg-zinc-100 rounded p-3 w-[48%] mb-3"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <textarea
                placeholder="Description"
                className=" bg-zinc-100 rounded p-3 w-1/2 mb-3"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows={10}
            />
            <div className=" w-1/2"><button
                type="submit"
                className="border border-blue-300 text-blue-300 rounded py-2 px-5 "
            >
                Add Product
            </button></div>
        </form>
    );
};
export default Create;
