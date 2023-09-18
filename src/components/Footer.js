import { Link } from 'react-router-dom';
import flogo from '../assets/images/footerlogo.png';
import facebook from "../assets/images/facebook.png"
import linkedin from "../assets/images/linkedin.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"

export default function Footer(){
    return(
        <footer>
            <div className='fcontainer'>
                <img src={flogo} alt="logo" width={95} height={170} />
                <section className='navigation'>
                    <h3>Navigation</h3>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#">Menu</a></li>
                      <li><Link to="/reservations">Reservations</Link></li>
                      <li><a href="#">Order Online</a></li>
                      <li><a href="#">Login</a></li>
                    </ul>
                </section>
                <section className='contact'>
                    <h3>Contact</h3>
                    <ul>
                        <li>+123456789900</li>
                        <li>littlelemon@gmail.com</li>
                        <li>5301 S Hyde Park Blvd, Chicago, IL 60615</li>
                    </ul>
                </section>
                <section className='social'>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt='Facebook' width={30} height={30} />Facebook
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