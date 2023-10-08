// Import necessary dependencies and assets
import React from 'react';
import logo from '../images/Logo.svg';
import menuicon from '../images/menuicon.svg';
import { Link } from 'react-router-dom';

// Define the Header component
export default function Header() {
  return (
    <header>
      {/* Link to the homepage */}
      <Link to="/">
        <img src={logo} alt="logo" className='logo' width={190} />
      </Link>
      <nav>
        {/* Checkbox input for mobile menu */}
        <input type="checkbox" id="check" />
        {/* Label for the mobile menu checkbox */}
        <label htmlFor="check" className="checkbtn">
          <img src={menuicon} alt='menu' />
        </label>
        <ul>
          {/* Navigation links */}
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
