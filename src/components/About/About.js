import React from 'react';
import CarWebsiteDetails from './CarWebsiteDetails';
import Footer from '../screen/Footer';
import Navbar from '../screen/Navbar';
import Header from '../screen/Header';

function About() {
  return (
    <div className="flex flex-col  min-h-screen">
   <Navbar></Navbar>
  <Header></Header>
    <div className="ml-64 min-h-screen bg-gray-50">
      <CarWebsiteDetails />
    
    </div>
    <Footer></Footer>
     </div>
  );
}

export default About;
