import { Routes, Route } from "react-router-dom";
import Reservations from "../Pages/Reservations";
import HomePage from "../Pages/Homepage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
