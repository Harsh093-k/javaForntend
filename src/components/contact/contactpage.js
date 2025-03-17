import React from 'react';
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";
import Footer from '../screen/Footer';
import Navbar from '../screen/Navbar';
import Header from '../screen/Header';

const ContactDetails = () => {
  return (
    <div className="flex flex-col  min-h-screen w-full">
   <Navbar></Navbar>
   <Header></Header>
    <section className=" py-10  w-full  ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center text-gray-900">Contact Us</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          We'd love to hear from you! Reach out to us via any of the following methods:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <GiRotaryPhone size={55} />
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="mt-2 text-lg text-gray-600">+1 (800) 123-4567</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <MdOutlineEmail size={55}  />
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="mt-2 text-lg text-gray-600">support@example.com</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <GiMechanicGarage size={55}  />
            <h3 className="text-xl font-semibold text-gray-800">Address</h3>
            <p className="mt-2 text-lg text-gray-600">1234 Example St, City, Country</p>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </div>

  );
};

export default ContactDetails;
