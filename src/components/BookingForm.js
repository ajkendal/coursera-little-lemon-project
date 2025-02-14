import { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestNo, setGuestNo] = useState(0);
  const [occasion, setOccasion] = useState("");

  function handleDateChange(e) {
    setDate(e.target.value);

    props.updateTimes(e.target.value);
  }

  return (
    <>
      <h1>Book Now</h1>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label for="res-name">Name</label>
        <input
          type="text"
          id="res-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {props.availableTimes.availableTimes.map((availableTime) => {
            return <option key={availableTime}>{availableTime}</option>;
          })}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guestNo}
          onChange={(e) => setGuestNo(e.target.value)}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Link to="/confirmation">
          <input type="submit" value="Make Your reservation" />
        </Link>
      </form>
    </>
  );
};

export default BookingForm;
