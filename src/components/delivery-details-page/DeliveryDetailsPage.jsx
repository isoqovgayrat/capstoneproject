import "./DeliveryDetailsPage.scss";
import React from "react";
import NavigationSection from "../navigation-section/NavigationSection";

function DeliveryDetailsPage() {
  return (
    <div className="delivery-details-page-container">
      <h1>Delivery Details</h1>
      <form className="delivery-form"></form>
      <div className="order-summary">
        <div className="row">
          <div className="icon"></div>
          <div className="dish-name"> Ceaser Salad</div>
          <div className="dish-price">$13</div>
        </div>
        <p>Cash on delivery</p>
        <button>Order</button>
      </div>
    </div>
  );
}

export default DeliveryDetailsPage;
