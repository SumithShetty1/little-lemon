import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ConfirmedBooking.css'

function ConfirmedBooking() {
  return (
    <main className='confirmpage'>
      <section className="confirmed">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
      {/* Add a link to navigate back to the homepage */}
      <Link to='/'>
        <button className='backbtn'>
          Back
        </button>
      </Link>
    </main>
  )
}

export default ConfirmedBooking;
