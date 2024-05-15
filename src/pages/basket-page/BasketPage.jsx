import "./BasketPage.scss";
import React, { useState } from "react";
import MediaQuery from "react-responsive";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import { Plus2, Minus } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";
import DeliveryDetailsModal from "../../components/delivery-details-modal/DeliveryDetailsModal";
import MobileNavigationSection from "../../components/mobile-navigation-section/MobileNavigationSection";

function BasketPage() {
  const { yourCard, findSection, summaryPrice } = useAppContext();
  const navigate = useNavigate();

  const [deliveryModalDisplay, setDeliveryModalDisplay] = useState(false);

  return (
    <>
      <MediaQuery maxWidth={970}>
        {(matches) =>
          matches ? <MobileNavigationSection /> : <NavigationSection />
        }
      </MediaQuery>
      <div className="basket-page-container">
        <h1>your cart</h1>
        <div className="basket-modal">
          {yourCard.length === 0 ? (
            <h2
              className="empty-cart"
              onClick={() => {
                navigate(ROUTE_PATHS.MENU);
              }}
            >
              Your cart is empty<br></br> Click and add some dishes
            </h2>
          ) : null}

          <div className="content-container">
            {yourCard.map((dish) => (
              <>
                <div className="dish-name">
                  <h3>{dish.dish}</h3>
                  <p>{dish.description}</p>
                </div>
                <div className="bottom-row">
                  <div className="add-dish">
                    <div
                      className="number-change"
                      onClick={() => {
                        findSection(
                          dish.sectionType,
                          dish.dish,
                          dish.numberOfItemsInBasket - 1
                        );
                      }}
                    >
                      <Minus />
                    </div>
                    <div className="number">{dish.numberOfItemsInBasket}</div>
                    <div
                      className="number-change"
                      onClick={() => {
                        findSection(
                          dish.sectionType,
                          dish.dish,
                          dish.numberOfItemsInBasket + 1
                        );
                      }}
                    >
                      <Plus2 />
                    </div>
                  </div>
                  <div className="price">
                    ${dish.price * dish.numberOfItemsInBasket}
                  </div>
                </div>
                <div className="line"></div>
              </>
            ))}
            <>
              {yourCard.length > 0 ? (
                <div className="cart-summary">
                  <div className="summary-row">
                    <div>Summary</div>
                    <div>${summaryPrice}</div>
                  </div>
                  <div className="summary-row">
                    <div>Delivery</div>
                    <div>$5</div>
                  </div>
                  <div className="summary-row-bold">
                    <div>Total cost</div>
                    <div>${summaryPrice + 5}</div>
                  </div>
                </div>
              ) : null}
            </>

            <>
              {yourCard.length > 0 ? (
                <button
                  className="add-button"
                  onClick={() => {
                    setDeliveryModalDisplay(true);
                  }}
                >
                  Proceed to checkout
                </button>
              ) : null}
            </>
          </div>
        </div>
      </div>
      <div>
        {deliveryModalDisplay ? (
          <DeliveryDetailsModal
            onCancel={() => {
              setDeliveryModalDisplay(false);
            }}
          />
        ) : null}
      </div>
    </>
  );
}

export default BasketPage;
