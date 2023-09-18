// Import the necessary components
import './App.css';
import './Layouts.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path={window.location.pathname} element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/reservations" element={<BookingPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
