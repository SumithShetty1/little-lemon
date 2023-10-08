import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage'
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './pages/ConfirmedBooking';

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
