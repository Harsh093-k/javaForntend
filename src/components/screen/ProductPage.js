
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Reviews from "../../Review/Reviews";
import ReviewForm from "../../Review/ReviewForm";
import { toast } from "react-toastify";

function ProductPage() {
  const { id } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
 const email=localStorage.getItem("email");
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleDone = async () => {
    if (quantity.trim() === "") {
      toast.error("Please enter a quantity!");
      return;
    }
  
    try {
     const res =await axios.post("https://backendjava-omso.onrender.com/api/orders/send-email", {
        email: email, 
        productName: selectedProduct.name,
        quantity,
      });
      console.log(res);
      toast.success("Booking Successful! Email Sent.");
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to send email.");
    }
  };
  

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://backendjava-omso.onrender.com/api/products/${id}`);
        setSelectedProduct(response.data); 
        setLoading(false);
      } catch (error) {
        setError("Error fetching product details. Please try again.");
        setLoading(false); 
      }
    };

    fetchProduct();
  }, [id]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center text-lg bg-gray-100 h-screen">
        <div className="bg-pink-500 p-4 rounded-lg text-white font-semibold">
          Loading product details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-lg bg-red-100 h-screen">
        <div className="bg-red-500 p-4 rounded-lg text-white font-semibold">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Header />
      <div className="ml-60">
        <div className="flex-grow p-8 bg-white w-full max-w-6xl mx-auto">
          {/* Product Details */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedProduct.name}</h2>
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="rounded-lg mb-4 lg:mb-0 lg:w-1/4 lg:mr-4"
            />
            <div className="text-lg text-gray-700">
              <p className="mb-4"><strong>Overview:</strong> {selectedProduct.desc}</p>
              <p className="mb-4"><strong>Category:</strong> {selectedProduct.category}</p>
              <p className="mb-4"><strong>Quantity:</strong> {selectedProduct.quantity}</p>
              <p className="mb-4"><strong>Available:</strong> {selectedProduct.available ? "Yes" : "No"}</p> 
              <p className="mb-4"><strong> Owner:</strong> {selectedProduct.user.name}</p>
              <div className="font-semibold text-xl text-green-600">
                <strong>Price: </strong>${selectedProduct.price}
              </div>
             
            </div>
           
          </div>
          <button className="ml-72 mt-7 h-10 w-20 bg-green-400 rounded" onClick={handleOpen}>Book</button>    
          {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold">Booking Order</h2>
            
           
            <input
              type="number"
              className="border border-gray-300 p-2 rounded w-full mt-2"
              placeholder="Enter the quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <p className="text-gray-600 mt-2">Confirm your booking details.</p>

           
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
         <ReviewForm productId={id}/>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
            <Reviews productId={id} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;



