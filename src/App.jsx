import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './Components/Protection/Protectedroute';
import LetterForms from './Components/LetterForms';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Admin from './Components/Admin/Admin';
import SubmissionForm from './Components/SubmissionForm';
import IndianMemoryProject from './Components/Supoort';
import ProductList from './Components/Poruductlist';
import ProductAddPage from './Components/Productviewpage';
import HathiwalasPage from './Components/Supoort';
import Gallery from './Components/PhotoGallery';
import MobileSidebar from './Components/MobileSidebar';
import AddToCart from './Components/AddToCart';
import Checkout from './Components/Checkout';
import SubmissionView from './Components/Admin/Submissionviewpage';

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />} path="/" />
          <Route element={<Signup />} path="/sign" />
          <Route element={<Login />} path="/log" />
          <Route element={<Aboutus />} path="/about" />
          <Route element={<Contactus />} path="/contact" />
          <Route element={<ForgotPassword />} path="/forgot" />
          <Route element={<SubmissionForm />} path="/sub" />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/support" element={<IndianMemoryProject />} />
          <Route path="/productlist" element={<ProductList/>} />
          <Route path="/productview" element={<ProductAddPage/>} />
          <Route path="/photo" element={<Gallery/>} />
          <Route path="/supp" element={<HathiwalasPage/>} />
          <Route path="/mob" element={<MobileSidebar/>} />
              <Route path="/cart" element={<AddToCart />} />  
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/submission/view/:id" element={<SubmissionView />} />








        <Route element={<ProtectedRoute />}>
  <Route path="/user" element={<LetterForms />} />
  <Route path="/admin" element={<Admin />} />
</Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
