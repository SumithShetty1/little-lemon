import React from 'react';
// Import the necessary image assets
import greeksalad from "../images/greek salad.jpg"
import bruchetta from "../images/bruchetta.png"
import lemondessert from "../images/lemon dessert.jpg"
import delivery from "../images/Delivery.png"

// Define the Highlights component
export default function Highlights() {
  return (
    <section className="highlights">
      <div className="specialsheader">
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials">
        {/* Special 1 */}
        <article>
          <img src={greeksalad} alt="Greek salad" width={300} height={200} />
          <div className="title">
            <h3>Greek salad</h3>
            <p className="price">$ 12.99</p>
          </div>
          <p className="description">
            The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished
            with crunchy garlic and rosemary croutons.
          </p>
          <a href="#order" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>

        {/* Special 2 */}
        <article>
          <img src={bruchetta} alt="Bruchetta" width={300} height={200} />
          <div className="title">
            <h3>Bruchetta</h3>
            <p className="price">$ 5.99</p>
          </div>
          <p className="description">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
          </p>
          <a href="#order" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>

        {/* Special 3 */}
        <article>
          <img src={lemondessert} alt="Lemon Dessert" width={300} height={200} />
          <div className="title">
            <h3>Lemon Dessert</h3>
            <p className="price">$ 5.00</p>
          </div>
          <p className="description">
            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can
            be imagined.
          </p>
          <a href="#order" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>
      </div>
    </section>
  );
}
