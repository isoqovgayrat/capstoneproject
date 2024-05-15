import "./OpinionContainer.scss";
function OpinionContainer({ icon, photo, person, text }) {
  return (
    <div className="opinion-container">
      <div className="rating">
        <div className="icon">
          <img src={icon}></img>
        </div>
        <div className="icon">
          <img src={icon}></img>
        </div>
        <div className="icon">
          <img src={icon}></img>
        </div>
        <div className="icon">
          <img src={icon}></img>
        </div>
        <div className="icon">
          <img src={icon}></img>
        </div>
      </div>
      <div className="middle-bar">
        <div className="photo-container">
          <img src={photo}></img>
        </div>
        <p className="name">{person}</p>
      </div>
      <p className="opinion">{text}</p>
    </div>
  );
}

export default OpinionContainer;
