
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainContent from "./components/screen/MainContent";
import ProductPage from "./components/screen/ProductPage";
import About from "./components/About/About";
import CarServices from "./components/Service/CarServices";
import { ToastContainer } from "react-toastify";
import ContactDetails from "./components/contact/contactpage";
import LoginPage from "./components/screen/Login";
import SignInPage from "./components/screen/SignIn";
import ProductForm from "./components/screen/Createproduct";
import ProfilePage from "./components/screen/ProfilePage";
import ForgotPassword from "./components/screen/forgotPassword";


function App() {

  const email = localStorage.getItem('email');
  const id=localStorage.getItem("id");

  return (
    <>
   
    <BrowserRouter>
    <ToastContainer position="top-center" autoClose={3000} /> 
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          {email || id ? (
           
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<MainContent />} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/create" element={<ProductForm/>} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/Services" element={<CarServices />} />
                <Route path="/Contact" element={<ContactDetails />} />
              </Routes>
          
          ) : (
            <Routes>
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;


