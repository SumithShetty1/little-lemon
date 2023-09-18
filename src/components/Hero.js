// Import the restaurantfood image asset
import restaurantfood from '../assets/images/restaurantfood.jpg';

// Define the Hero component
export default function Hero() {
  return (
    <main id='home'>
      <section className='hero'>
        <article>
          {/* Left column with restaurant information */}
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
            {/* Right column with restaurant food image */}
          </div>
          <img src={restaurantfood} alt="Restaurant Food" width={375} height={460} />
        </article>
      </section>
    </main>
  );
}
