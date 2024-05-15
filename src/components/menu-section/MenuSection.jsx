import "./MenuSection.scss";
import { Plus } from "../../assets/icons";

function MenuSection({
  dish,
  description,
  price,
  onOpen,
  numberOfItemsInBasket,
}) {
  return (
    <div className="dish-container">
      <div className="dish">
        <div className="add-dish">
          <div className="plus" onClick={onOpen}>
            {numberOfItemsInBasket === 0 ? <Plus /> : numberOfItemsInBasket}
          </div>
          <p className="dish-name">{dish}</p>
        </div>
        <p className="dish-description">{description}</p>
      </div>
      <div className="price">${price}</div>
    </div>
  );
}

export default MenuSection;
