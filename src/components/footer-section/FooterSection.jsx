import "./FooterSection.scss";
import mario from "../../assets/images/mario.jpg";
function FooterSection() {
  return (
    <div className="footer-container section-container">
      <div className="photo">
        <img src={mario} />
      </div>
      <div className="column">
        <ul>
          <li className="heading">Doormat Navigation</li>
          <li className="info">Home</li>
          <li className="info">About</li>
          <li className="info">Menu</li>
          <li className="info">Reservations</li>
          <li className="info">Order Online</li>
          <li className="info">Login</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="heading">Contact</li>
          <li className="info">Adres</li>
          <li className="info">Phone</li>
          <li className="info">Email</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="heading">Social Media Links</li>
          <li className="info">Adres</li>
          <li className="info">Phone</li>
          <li className="info">Email</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;
