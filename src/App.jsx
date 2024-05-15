import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "./services/AppContext";
import "./App.scss";
import HomePage from "./pages/home-page/HomePage";
import ReservationPage from "./pages/reservation-page/ReservationPage";
import MenuPage from "./pages/menu-page/MenuPage";
import BasketPage from "./pages/basket-page/BasketPage";

export const ROUTE_PATHS = {
  HOME: "/home",
  MENU: "/menu",
  RESERVATIONS: "/reservations",
  BASKET: "/basket",
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.RESERVATIONS} element={<ReservationPage />} />
      <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
      <Route path={ROUTE_PATHS.MENU} element={<MenuPage />} />
      <Route path={ROUTE_PATHS.BASKET} element={<BasketPage />} />

      <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} />} />
    </Routes>
  );
};

function App() {
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <AppRoutes />;
}
export default App;
