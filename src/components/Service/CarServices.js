import React from "react";
import Navbar from "../screen/Navbar";
import Header from "../screen/Header";
import Footer from "../screen/Footer";



const CarPurchaseServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">1. Car Purchase Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">New & Used Car Listings</h3>
        <p>Your website should feature a wide range of cars for sale, both new and pre-owned. Users can filter their search based on criteria like car make, model, year, price, mileage, and more.</p>
        <p><strong>Car Specifications:</strong> Detailed information about each car, including specifications like engine type, fuel efficiency, safety features, interior options, and exterior details.</p>
        <p><strong>High-Quality Images:</strong> Clear, high-resolution images of both the interior and exterior of the car to help potential buyers visualize their purchase.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Instant Financing Options</h3>
        <p>Provide financing tools that let users apply for auto loans directly through the website. Partner with financial institutions to offer competitive rates.</p>
        <p>Offer monthly payment estimators, so users can get a quick idea of how much their financing will cost per month.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Car Comparison Tools</h3>
        <p>Let customers compare different car models based on features, specifications, price, and customer reviews, so they can make informed choices.</p>
      </li>
    </ul>
  </div>
);

const CarMaintenanceServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">2. Car Maintenance and Repair Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Routine Car Maintenance</h3>
        <p>Offer users the ability to schedule regular maintenance appointments such as oil changes, tire rotations, brake inspections, and more.</p>
        <p>Set up service reminders so customers know when to bring their cars in for regular maintenance based on the car's mileage and manufacturer guidelines.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Car Repairs</h3>
        <p>Provide a list of available repair services like engine diagnostics, transmission repair, exhaust system repair, battery replacement, etc.</p>
        <p>Allow users to request repair quotes online, which they can review before scheduling their repair appointment.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Service Packages</h3>
        <p>Offer pre-bundled maintenance and repair packages for popular car models. For example, a package that includes routine maintenance services at discounted prices.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Certified Mechanics</h3>
        <p>Feature certified mechanics and technicians to ensure that car repairs are done by professionals.</p>
        <p>Provide user reviews and ratings for mechanics or service centers to help customers choose a trusted service provider.</p>
      </li>
    </ul>
  </div>
);

const CarInsuranceServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">3. Car Insurance Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Instant Car Insurance Quotes</h3>
        <p>Allow users to get instant car insurance quotes from multiple providers. Display coverage options such as liability, comprehensive, collision, and others.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Insurance Integration</h3>
        <p>Integrate with top insurance companies so that users can compare different policies and buy car insurance directly through your platform.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Insurance Consultation</h3>
        <p>Provide access to insurance advisors who can help users understand the best car insurance options for their specific needs.</p>
      </li>
    </ul>
  </div>
);

const CarLeasingAndRentalServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">4. Car Leasing and Rental Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Short-Term Car Rentals</h3>
        <p>Offer car rentals for users who need a car for a few days, weeks, or months. Provide a variety of cars to suit the customer's needs (luxury cars, SUVs, etc.).</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Long-Term Car Leasing</h3>
        <p>Feature car leasing options for users who want to lease a car for an extended period (1-3 years). Provide leasing details such as down payment, monthly payments, and end-of-lease options.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Fleet Rentals</h3>
        <p>For businesses, offer fleet rental options, where companies can rent multiple cars for employee transportation or corporate events.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Delivery and Pickup Services</h3>
        <p>Allow users to select a delivery or pickup option when renting or leasing a car. This provides added convenience for customers who don’t want to visit your service center.</p>
      </li>
    </ul>
  </div>
);

const CarCustomizationServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">5. Car Customization Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Interior and Exterior Customization</h3>
        <p>Let users customize their cars with various accessories, including custom seat covers, floor mats, audio systems, window tinting, and exterior paint jobs.</p>
        <p>Provide an online car builder tool where users can see how their car looks with the chosen customization options.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Performance Enhancements</h3>
        <p>Offer performance tuning services such as exhaust modifications, turbochargers, suspension upgrades, and performance tires.</p>
      </li>
    </ul>
  </div>
);

const CarTradeInAndSellServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">6. Car Trade-In and Sell Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Sell Your Car</h3>
        <p>Allow customers to sell their cars directly through your website by providing an easy-to-use interface for uploading car details, photos, and receiving an instant quote.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Trade-In Service</h3>
        <p>Let customers trade in their old cars and get credit toward purchasing a new or used car from your inventory.</p>
        <p>Feature a trade-in calculator to help users get an estimate of their car’s worth based on its make, model, year, condition, and market trends.</p>
      </li>
    </ul>
  </div>
);

const CarPartsAndAccessoriesServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">7. Car Parts and Accessories</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Car Parts Store</h3>
        <p>Provide a store for car parts such as batteries, tires, brake pads, filters, etc. Allow users to order parts online or book services for part replacements.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Accessories Store</h3>
        <p>Offer a wide range of car accessories such as custom floor mats, car covers, seat cushions, roof racks, and more.</p>
      </li>
    </ul>
  </div>
);

const CarWarrantyAndProtectionPlans = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">8. Car Warranty and Protection Plans</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Extended Warranties</h3>
        <p>Offer extended warranties for cars purchased through your website. These warranties can cover major components like the engine, transmission, and electrical systems for additional peace of mind.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Vehicle Protection Plans</h3>
        <p>Provide vehicle protection plans that include coverage for repairs, roadside assistance, tire damage, and more.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Pre-Owned Vehicle Protection</h3>
        <p>For used car buyers, offer vehicle protection services that cover the cost of repairs for a specified time after purchase.</p>
      </li>
    </ul>
  </div>
);

const RoadsideAssistanceAndEmergencyServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">9. Roadside Assistance and Emergency Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">24/7 Roadside Assistance</h3>
        <p>Provide users with access to 24/7 roadside assistance services such as towing, tire changes, fuel delivery, and lockout services.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Emergency Vehicle Services</h3>
        <p>In case of a breakdown or accident, users can request emergency services via the website or mobile app.</p>
      </li>
    </ul>
  </div>
);

const CarDeliveryAndPickupServices = () => (
  <div className="service-section p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">10. Car Delivery and Pickup Services</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <h3 className="text-xl font-medium text-blue-600">Home Delivery</h3>
        <p>After a purchase is made, offer home delivery options for customers to receive their car at their doorstep.</p>
      </li>
      <li>
        <h3 className="text-xl font-medium text-blue-600">Car Pickup</h3>
        <p>Provide an option for customers to have their purchased or rented car picked up from a location of their choice.</p>
      </li>
    </ul>
  </div>
);

const CarServices = () => (

<div>
    <Navbar />
    <Header />

    <div className="car-services ml-64 space-y-8 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Car Services</h2>
      <CarPurchaseServices />
      <CarMaintenanceServices />
      <CarInsuranceServices />
      <CarLeasingAndRentalServices />
      <CarCustomizationServices />
      <CarTradeInAndSellServices />
      <CarPartsAndAccessoriesServices />
      <CarWarrantyAndProtectionPlans />
      <RoadsideAssistanceAndEmergencyServices />
      <CarDeliveryAndPickupServices />
    </div>

    <Footer />
    </div>

);

export default CarServices;
