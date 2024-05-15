import "./HeroSection.scss";
import food from "../../assets/images/restauranfood.jpg";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-container section-container">
      <div className="horizontal">
        <div className="hero-content-left">
          <p className="title">Little Lemon</p>
          <p className="subtitle">Chicago</p>
          <main>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </main>
          <button
            onClick={() => {
              navigate(ROUTE_PATHS.RESERVATIONS);
            }}
          >
            Reserve a Table
          </button>
        </div>
        <div className="hero-content-right">
          <img src={food}></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
