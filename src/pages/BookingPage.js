import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../bookingsAPI';
import { useNavigate } from 'react-router-dom';

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_DATE') {
    // Handle the date state update
    const selectedDate = action.payload;
    const availableTimes = fetchAPI(selectedDate); // Fetch available times for the selected date
    return availableTimes;
  }
  return state;
};

const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const availableTimes = fetchAPI(today); // Fetch available times for today's date
  return availableTimes;
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer (updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate('/confirmed');
    }
  };

  return (
    <main className='formpage'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
}
