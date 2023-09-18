import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from '../bookingsAPI';

const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_DATE') {
        // Handle the date state update
        return action.payload;
    }
    return state;
}

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer (updateTimes, initializeTimes());

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
