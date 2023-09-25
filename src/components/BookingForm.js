import React, { useState } from 'react';
import "../styles/BookingForm.css"

export default function BookingForm(props) {
  // Define state variables for form fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate]=useState('');
  const [time, setTime]=useState('');
  const [diners, setDiners]=useState(1);
  const [occasion, setOccasion]=useState('');
  const [special, setSpecial] = useState('');
  const availableTimes=props.availableTimes;
  const dispatch=props.dispatch;

  // Update the date state and dispatch it to the parent component
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch the new date to update the parent component's state
    dispatch({ type: 'UPDATE_DATE', payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      phone,
      date,
      time,
      diners,
      occasion,
      special,
    };

    // Call the submitForm function passed from the parent component
    props.submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reservations</h1>
      <span className='first-name'>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
          placeholder='First name'
          aria-label="Enter your first name"
        />
      </span>
      <span className='last-name'>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
          placeholder='Last name'
          aria-label="Enter your last name"
        />
      </span>
      <span className='email'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Enter your email address"
        />
      </span>
      <span className='phone'>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          aria-label="Enter your phone number"
        />
      </span>
      <span className='date'>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          aria-label="Select a date for your reservation"
        />
      </span>
      <span className='time'>
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          value={time}
          onChange={(e)=>setTime(e.target.value)}
          aria-label="Select a time for your reservation"
        >
          {availableTimes.map((availableTime,index) => (
            <option key={index} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </span>
      <span className='diners'>
        <label htmlFor="diners">Number of Diners</label>
        <input
          type="number"
          id="diners"
          name="diners"
          value={diners}
          onChange={(e)=>setDiners(parseInt(e.target.value))}
          placeholder="1"
          min="1"
          max="10"
          aria-label="Enter the number of diners"
        />
      </span>
      <span className='occasion'>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e)=>setOccasion(e.target.value)}
          aria-label="Select the occasion for your reservation"
        >
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </span>
      <span className='special'>
        <label htmlFor="special">Special Requests</label>
        <textarea
          id="special"
          name="special"
          value={special}
          onChange={(e)=>setSpecial(e.target.value)}
          placeholder='Comment'
          rows={8}
          cols={30}
          aria-label="Enter your special request"
        />
      </span>
      <input type="submit" value="Make your Reservation" className='submitbtn' />
    </form>
  );
}
