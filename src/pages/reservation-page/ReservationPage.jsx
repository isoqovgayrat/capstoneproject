import "./ReservationPage.scss";
import MediaQuery from "react-responsive";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import ReservationForm from "../../components/reservation-form/ReservationForm";
import Calendar from "react-calendar";
import "./Calendar.scss";
import React from "react";
import MobileNavigationSection from "../../components/mobile-navigation-section/MobileNavigationSection";

import { useAppContext } from "../../services/AppContext";

function ReservationPage() {
  const { date, setDate } = useAppContext();

  return (
    <>
      <MediaQuery maxWidth={970}>
        {(matches) =>
          matches ? <MobileNavigationSection /> : <NavigationSection />
        }
      </MediaQuery>
      <div className="reservation-page-container ">
        <h1>Reserve a table</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <ReservationForm />
      </div>
    </>
  );
}

export default ReservationPage;
