import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // If you want to redirect on click
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

function MainContent() {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get("https://backendjava-omso.onrender.com/api/products");
            setProducts(response.data);
            
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setError("Error fetching products. Please try again later.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleProductClick = async (id) => {
        setLoading(true);
        try {
          
            setLoading(false);
          
            navigate(`/products/${id}`);
        } catch (error) {
            console.error("Error fetching product details: ", error);
            setError("Error fetching product details. Please try again later.");
            setLoading(false);
        }
    };

    if (loading && !selectedProduct) {
        return (
            <main className="flex-1 p-8 ml-60 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6">Loading...</h2>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex-1 p-8 ml-60 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-red-500">{error}</h2>
            </main>
        );
    }

    if (selectedProduct) {
        return (
            <main className="flex-1 p-8 ml-60 bg-gray-100">
                <h2 className="text-3xl font-bold mb-6">Product Details</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">{selectedProduct.name}</h3>
                    <img
                        src={selectedProduct.img}
                        alt={selectedProduct.name}
                        className="rounded mb-4"
                    />
                    <p className="mb-4">{selectedProduct.desc}</p>
                    <div className="font-semibold text-lg">Price: ${selectedProduct.price}</div>
                </div>
            </main>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <Header />
        <main className="flex-1 p-8 ml-60 bg-gray-100">
               
            <h2 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
                        onClick={() => handleProductClick(product.id)} 
                    >
                        <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="rounded mb-4"
                        />
                        <p className="mb-4">{product.desc}</p>
                        <div className="font-semibold text-lg">Price: ${product.price}</div>
                    </div>
                ))}
            </div>
           
        </main>
        <Footer />
        </div>
    );
}

export default MainContent;


