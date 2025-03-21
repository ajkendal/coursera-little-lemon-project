import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingFrom Heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
