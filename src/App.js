
import React from "react";
import Advertising from './Component/advertising/js/Advertising';
import MainPage from './Component/Main-page/index';
import Profile from './Component/profile/js/Profile';
import Register from './Component/register/js/Register';
import AdInsert from './Component/adInsert/js/AdInsert';
import SignIn from './Component/register/js/SignIn';
import './Component/generally/responsive/responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/Advertising' element={<Advertising />} />
        <Route exact path='/Profile' element={<Profile />} />
        <Route exact path='/AdInsert' element={<AdInsert />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/SignIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
