import ratingstar from "../assets/images/ratingstar.png"
import profile1 from "../assets/images/Selena G..jpg"
import profile2 from "../assets/images/Brandon M..jpg"
import profile3 from "../assets/images/Peter R..jpg"
import profile4 from "../assets/images/Neha J..jpg"

export default function Testimonials(){
  return(
    <section className="testimonials">
      <div className="tcontainer">
        <h1>Testimonials</h1>
        <div>
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile1} alt="Selena G." width={75} height={75} />
            <h3>Selena G.</h3>
            <p className="review">"Really enjoyed the atmosphere."</p>
          </article>
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile2} alt="Brandon M." width={75} height={75} />
            <h3>Brandon M.</h3>
            <p className="review">"The greek salad was excellent!"</p>
          </article>
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile3} alt="Peter R." width={75} height={75} />
            <h3>Peter R.</h3>
            <p className="review">"You have to try the Greek Salad!"</p>
          </article>
          <article>
            <img src={ratingstar} alt="Rating Star" width={125} height={21} /><br />
            <img src={profile4} alt="Neha J." width={75} height={75} />
            <h3>Neha J.</h3>
            <p className="review">"Awesome place peaceful atmosphere with delicious food"</p>
          </article>
        </div>
      </div>
    </section>
  );
}