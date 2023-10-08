import React, { useState, useEffect } from 'react';
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
  const [occasion, setOccasion]=useState('Birthday');
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

  // Add a state variable to track form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to update form validity
  const updateFormValidity = () => {
  const isFirstNameValid = firstname.trim() !== '';
  const isLastNameValid = lastname.trim() !== '';
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Email format validation
  const isPhoneValid = /^[0-9]{10}$/.test(phone); // Custom phone validation (10 digits)
  const isDateValid = date !== '';
  const isTimeValid = time !== '';
  const isDinersValid = diners >= 1 && diners <= 10;
  const isOccasionValid = occasion !== '';

  // Calculate overall form validity
  const isValid = isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isDateValid &&
    isTimeValid &&
    isDinersValid &&
    isOccasionValid;

    setIsFormValid(isValid);
  };

  // Update form validity whenever a field changes
  useEffect(() => {
    updateFormValidity();
  }, [firstname, lastname, email, phone, date, time, diners, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only submit the form if it's valid
    if (isFormValid) {
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reservations</h1>
      <div className='name'>
        <span className='first-name'>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder='Enter your First name'
            aria-label="Enter your first name"
            required
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
            placeholder='Enter your Last name'
            aria-label="Enter your last name"
            required
          />
        </span>
      </div>
      <div className='contact-inputs'>
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
            required
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
            placeholder='Enter your Phone Number'
            aria-label="Enter your phone number"
            pattern="[0-9]{10}"
          />
        </span>
      </div>
      <div className='date-time'>
        <span className='date'>
          <label htmlFor="date">Choose date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            aria-label="Select a date for your reservation"
            required
          />
        </span>
        <span className='time'>
          <label htmlFor="time">Choose time</label>
          <input
            type="text"
            id="time"
            name="time"
            list="time-options"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder='Select time'
            aria-label="Select a time for your reservation"
            required
          />
          <datalist id="time-options">
            {availableTimes.map((availableTime, index) => (
              <option key={index} value={availableTime} />
            ))}
          </datalist>
        </span>
      </div>
      <div className='dine-details'>
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
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Engagement">Engagement</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </span>
      </div>
      <span className='special'>
        <label htmlFor="special">Special Requests</label>
        <textarea
          id="special"
          name="special"
          value={special}
          onChange={(e)=>setSpecial(e.target.value)}
          placeholder='Comment'
          rows={10}
          cols={33}
          aria-label="Enter your special request"
        />
      </span>
      <input
        type="submit"
        value="Make your Reservation"
        className='submitbtn'
        disabled={!isFormValid} // Disable the button if the form is invalid
      />
    </form>
  );
}
