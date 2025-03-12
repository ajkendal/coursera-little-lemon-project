import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import { fetchAPI,  } from "../api/bookingAPI";


const Reservations = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

 

  return (
    <>
      <h1>Reservations Page</h1>
      <BookingForm availableTimes={state} updateTimes={dispatch} />
    </>
  );
};

export default Reservations;
