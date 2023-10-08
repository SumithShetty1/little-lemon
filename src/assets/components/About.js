import React from 'react';
import owners1 from "../images/Mario and Adrian A.jpg"
import owners2 from "../images/Mario and Adrian b.jpg"

// Define the About component
export default function About() {
  return (
    <section id="about" className="about">
      <article>
        <div className='about-details'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared
            dream of owning a restaurant.<br/>
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the
            Mediterranean region.
          </p>
        </div>
        <div className="images">
          {/* Images of the owners */}
          <img src={owners1} alt="Mario and Adrian" className="owners1" width={276} height={388} />
          <img src={owners2} alt="Mario and Adrian" className="owners2" width={276} height={388} />
        </div>
      </article>
    </section>
  );
}
