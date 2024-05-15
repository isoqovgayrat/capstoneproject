import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import { AppProvider, useAppContext } from "./services/AppContext";
import ReservationForm from "./components/reservation-form/ReservationForm";
import { BrowserRouter } from "react-router-dom";
import ReservationPage from "./pages/reservation-page/ReservationPage";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("ReservationForm", () => {
  test("InitializeTimes returns the correct expected value", () => {
    const expectedValue = [
      { hour: "17:00", bookedOnDays: [] },
      { hour: "18:00", bookedOnDays: [] },
      { hour: "19:00", bookedOnDays: [] },
      { hour: "20:00", bookedOnDays: [] },
      { hour: "21:00", bookedOnDays: [] },
      { hour: "22:00", bookedOnDays: [] },
    ];

    const TestComponent = () => {
      const { initializeTimes } = useAppContext();
      expect(initializeTimes()).toEqual(expectedValue);
    };

    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
  });

  test("Validate that setAvailableTimes creates a reservation correctly", () => {
    const expectedAvailableTimes = [
      { hour: "17:00", bookedOnDays: [] },
      { hour: "18:00", bookedOnDays: ["19.03.2024"] },
      { hour: "19:00", bookedOnDays: [] },
      { hour: "20:00", bookedOnDays: [] },
      { hour: "21:00", bookedOnDays: [] },
      { hour: "22:00", bookedOnDays: [] },
    ];

    const TestComponent = () => {
      const { availableTimes, setAvailableTimes } = useAppContext();

      act(() => {
        setAvailableTimes({
          type: "book_table",
          hour: "18:00",
          date: "19.03.2024",
        });
      });

      waitFor(() => {
        expect(availableTimes).toEqual(expectedAvailableTimes);
      });

      return <></>;
    };

    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );
  });

  test("A test to see if form validation works correctly (with correct values)", async () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <ReservationPage>
            <ReservationForm />
          </ReservationPage>
        </BrowserRouter>
      </AppProvider>
    );

    const submitBtn = screen.getByText("Reserve now");
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.queryByText("Select time")).not.toBeNull();
      expect(screen.queryByText("Must be at least 1 guest")).not.toBeNull();
      expect(screen.queryByText("Select occasion")).not.toBeNull();
    });

    const selectTime = screen.getByLabelText("Select a time");
    userEvent.selectOptions(selectTime, "17:00");

    const inputGuests = screen.getByLabelText("How many people?");
    userEvent.type(inputGuests, "2");

    const selectOccasion = screen.getByLabelText("Occasion");
    userEvent.selectOptions(selectOccasion, "Meeting");

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.queryByText("Select time")).toBeNull();
      expect(screen.queryByText("Must be at least 1 guest")).toBeNull();
      expect(screen.queryByText("Select occasion")).toBeNull();
    });
  });

  test("A test to see if form validation works correctly (with incorrect values)", async () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <ReservationPage>
            <ReservationForm />
          </ReservationPage>
        </BrowserRouter>
      </AppProvider>
    );

    const submitBtn = screen.getByText("Reserve now");
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.queryByText("Select time")).not.toBeNull();
      expect(screen.queryByText("Must be at least 1 guest")).not.toBeNull();
      expect(screen.queryByText("Select occasion")).not.toBeNull();
    });

    const inputGuests = screen.getByLabelText("How many people?");
    userEvent.type(inputGuests, "0");

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.queryByText("Select time")).not.toBeNull();
      expect(screen.queryByText("Must be at least 1 guest")).not.toBeNull();
      expect(screen.queryByText("Select occasion")).not.toBeNull();
    });
  });
});
