import { render, screen } from "@testing-library/react";
import ReservationPage from "./pages/reservation-page/ReservationPage";
import { AppProvider } from "./services/AppContext";
import { BrowserRouter } from "react-router-dom";

test("Renders the ReservationPage heading", () => {
  render(
    <AppProvider>
      <BrowserRouter>
        <ReservationPage />
      </BrowserRouter>
    </AppProvider>
  );

  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
