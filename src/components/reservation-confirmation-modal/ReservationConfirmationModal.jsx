import { Calendar, Clock, People, Confetti, Request } from "../../assets/icons";
import "./ReservationConfirmationModal.scss";

function ReservationConfirmationModal({
  date,
  time,
  guests,
  occasion,
  request,
  onCancel,
  onConfirm,
}) {
  return (
    <>
      <div className="confirmation-background"></div>
      <div className="confirmation-container">
        <div className="header-top-bar">
          <h1>Reservation at Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <div className="middle-bar">
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <Clock />
              </div>
            </div>
            <p className="information">{time}</p>
          </div>
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <Calendar />
              </div>
            </div>
            <p className="information">{date.toLocaleDateString()}</p>
          </div>
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <People />
              </div>
            </div>
            <p className="information">{guests} guests</p>
          </div>
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <Confetti />
              </div>
            </div>
            <p className="information">{occasion}</p>
          </div>
          {request !== "" && (
            <div className={"confirmation-information-container"}>
              <div className="icon-container">
                <div className="icon">
                  <Request />
                </div>
              </div>
              <p className="information">{request}</p>
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="cancel-button" onClick={onCancel}>
            CANCEL
          </button>
          <button className="confirmation-button" onClick={onConfirm}>
            CONFIRM
          </button>
        </div>
      </div>
    </>
  );
}

export default ReservationConfirmationModal;
