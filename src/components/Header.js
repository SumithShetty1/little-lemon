import React from 'react';
import logo from '../assets/images/Logo.svg';
import menuicon from '../assets/images/menuicon.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className='logo' width={190} />
      </Link>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img src={menuicon} alt='menu' />
        </label>
        <ul>
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
