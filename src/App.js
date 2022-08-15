
import React from "react";
import Advertising from './Component/advertising/js/Advertising';
import MainPage from './Component/Main-page/index';
import Profile from './Component/profile/js/Profile';
import Register from './Component/register/js/Register';
import AdInsert from './Component/adInsert/js/AdInsert';
import SignIn from './Component/register/js/SignIn';
import Article from "./articles/js/Article";
import Contact from "./contactUs/js/Contact";
import ArticlePage from "./articles/js/ArticlePage";
import AdList from "./Component/advertising/js/AdList";
import './Component/generally/responsive/responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/Advertising' element={<Advertising />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/AdInsert' element={<AdInsert />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Blog' element={<Article />} />
        <Route path='/Contact-us' element={<Contact />} />
        <Route path='/ArticlePage' element={<ArticlePage />} />
        <Route path='/AdList' element={<AdList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
