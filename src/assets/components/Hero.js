import React from 'react';
// Import the restaurantfood image asset
import { Link } from 'react-router-dom';
import restaurantfood from '../images/restaurantfood.jpg';

// Define the Hero component
export default function Hero() {
  return (
    <main className='heromain'>
      <section className='hero'>
        <article>
          {/* Left column with restaurant information */}
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

            {/* Link to reservations page */}
            <Link to="/reservations">
              <button>Reserve a Table</button>
            </Link>
          </div>

          {/* Right column with restaurant food image */}
          <img src={restaurantfood} alt="Restaurant Food" width={375} height={460} />
        </article>
      </section>
    </main>
  );
}
