import "./AboutSection.scss";
import restaurant from "../../assets/images/restaurant.jpg";
function AboutSection() {
  return (
    <div className="about-container section-container" id="about">
      <div className="restaurant-description">
        <header>Little Lemon</header>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighborhood bistro offering simple yet
          delectable dishes and classic cocktails in a lively yet casual
          setting. With a focus on locally-sourced ingredients and daily
          specials, the restaurant promises a delightful dining experience for
          all.
        </p>
      </div>
      <div className="photo">
        <img src={restaurant}></img>
      </div>
    </div>
  );
}

export default AboutSection;
