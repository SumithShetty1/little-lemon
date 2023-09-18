import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" width={210} height={55} />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
