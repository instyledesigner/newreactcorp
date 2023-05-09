import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '../src/css/Global.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Investors from './pages/investors/Investors';
import Prlanding from './pages/investors/pr/Prlanding';
import Pritem from './pages/investors/pr/Pritem';
import Shareprice from './pages/investors/Shareprice';
import Media from './pages/media/Media';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/investors' element={<Investors />} />
      <Route exact path='/investors/prlanding' element={<Prlanding />} />
      <Route exact path='/investors/prlanding/:pritemid' element={<Pritem />} />
      <Route exact path='/investors/shareprice' element={<Shareprice />} />
      <Route exact path='/media' element={<Media />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
