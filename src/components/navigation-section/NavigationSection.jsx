import React from "react";
import "./NavigationSection.scss";
import logo from "../../assets/images/Logo.svg";
import { Basket } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../../services/AppContext";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";

function NavigationSection() {
  const { numberOfAddedDishes } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="nav-container section-container">
      <div className="logo-container">
        <img
          src={logo}
          onClick={() => {
            navigate(ROUTE_PATHS.HOME);
          }}
        ></img>
      </div>
      <nav className="nav-links">
        <ul className="list-of-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/menu">Menu/Order</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>

        <Link to="/basket" className="logo-container">
          <Basket />
          <div
            className={
              "numberOfDishes " + (numberOfAddedDishes === 0 ? "zero" : "")
            }
          >
            {numberOfAddedDishes}
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavigationSection;
