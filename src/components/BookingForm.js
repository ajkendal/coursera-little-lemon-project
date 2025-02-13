import { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guestNo, setGuestNo] = useState(0);
  const [occasion, setOccasion] = useState("");
  return (
    <>
    <h1>Book Now</h1>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
