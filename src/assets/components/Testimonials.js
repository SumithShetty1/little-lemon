import React from 'react';
import ratingstar from "../images/ratingstar.png"
import profile1 from "../images/Selena G..jpg"
import profile2 from "../images/Brandon M..jpg"
import profile3 from "../images/Peter R..jpg"
import profile4 from "../images/Neha J..jpg"

// Define the Testimonials component
export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="tcontainer">
        <h1>Testimonials</h1>
        <div>
          {/* Testimonial 1 */}
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile1} alt="Selena G." width={75} height={75} />
            <h3>Selena G.</h3>
            <p className="review">"Really enjoyed the atmosphere."</p>
          </article>

          {/* Testimonial 2 */}
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile2} alt="Brandon M." width={75} height={75} />
            <h3>Brandon M.</h3>
            <p className="review">"The Greek salad was excellent!"</p>
          </article>

          {/* Testimonial 3 */}
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile3} alt="Peter R." width={75} height={75} />
            <h3>Peter R.</h3>
            <p className="review">"You have to try the Greek Salad!"</p>
          </article>

          {/* Testimonial 4 */}
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile4} alt="Neha J." width={75} height={75} />
            <h3>Neha J.</h3>
            <p className="review">"Awesome place, peaceful atmosphere with delicious food"</p>
          </article>
        </div>
      </div>
    </section>
  );
}
