import React from 'react';
import './App.css';
import Header from './assets/components/Header';
import HomePage from './assets/pages/HomePage';
import BookingPage from './assets/pages/BookingPage'
import Footer from "./assets/components/Footer";
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './assets/pages/ConfirmedBooking';

function App() {

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/reservations" element={<BookingPage/>} />
        <Route path="/confirmed" element={<ConfirmedBooking/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
