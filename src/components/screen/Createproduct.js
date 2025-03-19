import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const ProductForm = () => {
  const userId=localStorage.getItem("id");
  const [product, setProduct] = useState({
    name: "",
    img: "",
    desc: "",
    brand: "",
    price: "",
    category: "",
    releaseDate:"",
    available: false,
    quantity: 0,
    user:userId,
    reviews: [],
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://backendjava-omso.onrender.com/api/${userId}/add`,product);
      console.log(response);
      console.log("Product added successfully, response data:", product);

     
      toast.success("Product added successfully!");

     
      setProduct({
        name: "",
        img: "",
        desc: "",
        brand: "",
        price: "",
        category: "",
        releaseDate: "",
        available: false,
        quantity: 0,
        user: "",
        reviews: "",
      });


      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Something went wrong! Try again.");
      console.error("Error adding product:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: checked,
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Header />
      <div className="flex-grow flex justify-center items-center bg-cover bg-center mt-10">
        <motion.div
          className="p-8 w-full max-w-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-10" 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Product Description */}
            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                value={product.desc}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product description"
                required
              />
            </div>

            {/* Product Image URL */}
            <div>
              <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="img"
                name="img"
                value={product.img}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter image URL"
                required
              />
            </div>

            {/* Product Brand */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={product.brand}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product brand"
                required
              />
            </div>

            {/* Product Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product price"
                required
              />
            </div>

            {/* Product Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={product.category}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product category"
                required
              />
            </div>

            {/* Product Availability */}
            <div>
              <label className="block font-medium text-gray-700">
                Available
              </label>
              <input
                type="checkbox"
                name="available"
                checked={product.available}
                onChange={handleInputChange}
                className="mr-2"
              />
              Yes, Available
            </div>

            {/* Product Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={product.quantity}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product quantity"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full mb-10 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Add Product
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductForm;







