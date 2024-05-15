import "./SpecialsCards.scss";
import { useState } from "react";
import { Scooter } from "../../assets/icons";
import OrderElementConfigModal from "../order-element-config-modal/OrderElementConfigModal";
import { useAppContext } from "../../services/AppContext";
function SpecialsCards({
  photo,
  dishName,
  price,
  dishDescription,
  numberOfItemsInBasket,
  sectionType,
}) {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <div className="card">
      <div className="photo">
        <img src={photo}></img>
      </div>
      <div className="card-content">
        <div className="top-bar-content">
          <p className="dish-name">{dishName}</p>
          <p className="price">${Number(price).toFixed(2)}</p>
        </div>
        <p className="dish-description">{dishDescription}</p>
        <div className="bottom-bar-content">
          <button
            onClick={() => {
              setModalVisibility(true);
            }}
          >
            Order a delivery
          </button>
          <div className="icon">
            <Scooter />
          </div>
        </div>
      </div>
      {modalVisibility ? (
        <OrderElementConfigModal
          onCancel={() => {
            setModalVisibility(false);
          }}
          dishName={dishName}
          dishPrice={price}
          numberOfItemsInBasket={numberOfItemsInBasket}
          sectionType={sectionType}
        />
      ) : null}
    </div>
  );
}

export default SpecialsCards;
