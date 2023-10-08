import React from 'react';
import { Link } from 'react-router-dom';
import flogo from '../images/footerlogo.png';
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"

// Define the Footer component
export default function Footer() {
  return (
    <footer>
      <div className='fcontainer'>
        {/* Footer logo */}
        <img src={flogo} alt="logo" width={95} height={170} />

        {/* Navigation section */}
        <section className='navigation'>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </section>

        {/* Contact section */}
        <section className='contact'>
          <h3>Contact</h3>
          <ul>
            <li>+123456789900</li>
            <li>littlelemon@gmail.com</li>
            <li>5301 S Hyde Park Blvd, Chicago, IL 60615</li>
          </ul>
        </section>

        {/* Social Media Links section */}
        <section className='social'>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt='Facebook' width={30} height={30} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt='Linkedin' width={30} height={30} /> Linkedin
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt='Twitter' width={30} height={30} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt='Instagram' width={30} height={30} /> Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
