import React, { useState } from "react";
import "./OrderElementConfigModal.scss";
import { Plus2, Minus, Cancel } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";

function OrderElementConfigModal({
  onCancel,
  dishName,
  dishDescription,
  dishPrice,
  sectionType,
  numberOfItemsInBasket,
}) {
  const {
    setSectionAntipasti,
    setSectionMainCourse,
    setSectionDesserts,
    setSectionCocktails,
    findSection,
  } = useAppContext();

  const [number, setNumber] = useState(numberOfItemsInBasket);

  const onAdding = () => {
    setNumber(number + 1);
  };

  const onSubtraction = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const totalPrice = dishPrice * number;

  return (
    <>
      <div className="modal-container">
        <div className="close" onClick={onCancel}>
          <Cancel />
        </div>
        <div className="dish-name">
          <h3>{dishName}</h3>
          <p>{dishDescription}</p>
        </div>
        <div className="add-dish">
          <div className="number-change" onClick={onSubtraction}>
            <Minus />
          </div>
          <div className="number">{number}</div>
          <div className="number-change" onClick={onAdding}>
            <Plus2 />
          </div>
        </div>
        <button
          className="add-button"
          onClick={() => {
            onCancel();
            findSection(sectionType, dishName, number);
          }}
        >
          Add {number} to card • ${totalPrice}
        </button>
      </div>
      <div className="modal-background"></div>
    </>
  );
}

export default OrderElementConfigModal;
