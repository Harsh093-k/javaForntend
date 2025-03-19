import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from "../screen/Navbar";
import Footer from "../screen/Footer";
import Header from "../screen/Header";

const ProfilePage = () => {
    const ID = localStorage.getItem("id");
    const [name, SetName] = useState(null); 
    const [email, SetEmail] = useState(null); 

    const data = async () => {
        try {
            const response = await axios.get(`https://backendjava-omso.onrender.com/api/users/${ID}`);
            console.log(response.data.email, response.data.name);
            SetName(response.data.name); 
            SetEmail(response.data.email); 
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        data();
    }, []); 

    return (
        <div className=" flex flex-col min-h-screen w-full">
            <Navbar />
            <Header />
            <div className='ml-60 bg-gray-100'>
            <div className="ml-58 min-h-screen bg-gray-100 w-full">
              
                <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
                    <div className="flex items-center space-x-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          
                            <h2 className="text-2xl font-semibold">
                                {name ? name : 'Loading...'}
                            </h2>
                        
                            {email && <p className="text-gray-600">{email}</p>}
                        </div>
                    </div>
                </div>

              
                <div className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Posts</h3>
                    <ul className="space-y-4">
                       
                    </ul>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
