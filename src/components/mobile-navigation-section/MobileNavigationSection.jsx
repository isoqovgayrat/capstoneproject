import "./MobileNavigationSection.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { HamburgerMenu, Basket } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";

function MobileNavigationSection() {
  const { numberOfAddedDishes } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="mobile-nav-container">
      <div className="logo-container">
        <img
          src={logo}
          onClick={() => {
            navigate(ROUTE_PATHS.HOME);
          }}
        ></img>
      </div>

      <div className="left-corner">
        <Link to="/basket" className="logo-container-basket">
          <Basket />
          <div
            className={
              "numberOfDishes " + (numberOfAddedDishes === 0 ? "zero" : "")
            }
          >
            {numberOfAddedDishes}
          </div>
        </Link>
        <div className="hamburger-menu">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default MobileNavigationSection;
