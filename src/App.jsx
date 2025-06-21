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
import NineteenTen from './Components/pages/1910';
import NineteenHundred from './Components/pages/1900';
import NineteenTwenty from './Components/pages/1920';
import NineteenThirty from './Components/pages/1930';
import NineteenForty from './Components/pages/1940';
import NineteenFifty from './Components/pages/1950';
import NineteenSixty from './Components/pages/1960';
import NineteenSeventy from './Components/pages/1970';
import NineteenEighty from './Components/pages/1980';
import NineteenNinety from './Components/pages/1990';
import TwoThousand from './Components/pages/2000';
import LoveLetters from './Components/Letters/LoveLetters';
import FamilyLetters from './Components/Letters/FamilyLetters';
import WarPoliticalTurmoil from './Components/Letters/WarPoliticalTurmoil';
import Travel from './Components/Letters/Travel';
import DairyNewsPages from './Components/Letters/DairyNewsPages';
import CardsPostcards from './Components/Letters/CardsPostcards';
import MoviePoster from './Components/Letters/MoviePoster';
import Calendars from './Components/Letters/Calendars';
import Others from './Components/Letters/Others';
import FamousLetters from './Components/Letters/FamousLetters';
import FeaturedLetters from './Components/Letters/FeaturedLetters';
import FeaturedPhotographs from './Components/Letters/FeaturedPhotographs';
import DetailPage from './DetailPage';

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
            <Route path="/1900" element={<NineteenHundred/>} />
                     <Route path="/1910" element={<NineteenTen/>} />
                     <Route path="/1920" element={<NineteenTwenty/>} />
                     <Route path="/1930" element={<NineteenThirty/>} />
                     <Route path="/1940" element={<NineteenForty/>} />
                     <Route path="/1950" element={<NineteenFifty/>} />
                     <Route path="/1960" element={<NineteenSixty/>} />
                     <Route path="/1970" element={<NineteenSeventy/>} />
                     <Route path="/1980" element={<NineteenEighty/>} />
                     <Route path="/1990" element={<NineteenNinety/>} />
                     <Route path="/2000" element={<TwoThousand/>} />
                     <Route path="/love" element={<LoveLetters/>} />
                     <Route path="/family" element={<FamilyLetters/>} />
                     <Route path="/war" element={<WarPoliticalTurmoil/>} />
                     <Route path="/travel" element={<Travel/>} />
                     <Route path="/dairy" element={<DairyNewsPages/>} />
                     <Route path="/cards" element={<CardsPostcards/>} />
                     <Route path="/movie" element={<MoviePoster/>} />
                     <Route path="/calenders" element={<Calendars/>} />
                     <Route path="/other" element={<Others/>} />
                     <Route path="/famous" element={<FamousLetters/>} />
                     <Route path="/featured" element={<FeaturedLetters/>} />
                     <Route path="/photographs" element={<FeaturedPhotographs/>} />
                     <Route path="/details" element={<DetailPage/>} />








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
