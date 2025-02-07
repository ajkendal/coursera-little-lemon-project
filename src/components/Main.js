import { Routes, Route } from "react-router-dom";
import BookingPage from "../Pages/BookingPage";
import HomePage from "../Pages/Homepage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
