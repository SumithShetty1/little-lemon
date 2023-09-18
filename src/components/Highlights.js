// Import the necessary image assets
import greeksalad from "../assets/images/greek salad.jpg"
import bruchetta from "../assets/images/bruchetta.svg"
import lemondessert from "../assets/images/lemon dessert.jpg"
import delivery from "../assets/images/Delivery.png"

// Define the Highlights component
export default function Highlights(){
  // Render the component
  return(
    <section className="highlights">
      <div className="specialsheader">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials">
        <article>
          <img src={greeksalad} alt="Greek salad" width={289} height={200} />
          <div className="title">
            <h3>Greek salad</h3>
            <p className="price">$ 12.99</p>
          </div>
          <p className="description">
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished
            with crunchy garlic and rosemary croutons.
          </p>
          <a href="#" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>
        <article>
          <img src={bruchetta} alt="Bruchetta" width={300} height={200} />
          <div className="title">
              <h3>Bruchetta</h3>
              <p className="price">$ 5.99</p>
          </div>
          <p className="description">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.<br /><br />                </p>
          <a href="#" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>
        <article>
          <img src={lemondessert} alt="Lemon Dessert" width={289} height={200} />
          <div className="title">
            <h3>Lemon Dessert</h3>
            <p className="price">$ 5.00</p>
          </div>
          <p className="description">
            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can
            be imagined.<br /><br />
          </p>
          <a href="#" className="order">
            Order a delivery <img src={delivery} alt="Delivery" width={16} height={10} />
          </a>
        </article>
      </div>
    </section>
  );
}