import React from 'react'
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
const App = () => {
  return (
    <div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <BrowserRouter>
  <Routes>
    <Route element={<Navbar />} path="/" />
    <Route element={<Signup />} path="/sign" />
    <Route element={<Login />} path="/log" />
    <Route element={<Aboutus />} path="/about" />
    <Route element={<Contactus />} path="/contact" />
    <Route element={<ForgotPassword />} path="/forgot" />
    <Route path="/reset-password/:token" element={<ResetPassword />} />


    <Route element={<ProtectedRoute />}>
      <Route path="/user" element={<LetterForms />} />
    </Route>
      <Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<Admin />} />
    </Route>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
