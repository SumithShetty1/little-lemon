import React, { useState } from 'react';

export default function BookingForm(props) {
  // Define state variables for form fields
  const [date, setDate]=useState('');
  const [time, setTime]=useState('');
  const [guests, setGuests]=useState(1);
  const [occasion, setOccasion]=useState('');
  const availableTimes=props.availableTimes;
  const dispatch=props.dispatch;

  // Update the date state and dispatch it to the parent component
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch the new date to update the parent component's state
    dispatch({ type: 'UPDATE_DATE', payload: newDate });
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reservations</h1>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={date}
        onChange={handleDateChange}
        aria-label="Select a date for your reservation"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
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
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e)=>setGuests(parseInt(e.target.value))}
        placeholder="1"
        min="1"
        max="10"
        aria-label="Enter the number of guests"
      />
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
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
