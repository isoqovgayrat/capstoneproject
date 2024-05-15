import "./DeliveryDetailsModal.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Cancel } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";

function DeliveryDetailsModal({ onCancel }) {
  const { yourCard, resetSections } = useAppContext();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter your name"),
    surname: Yup.string().required("Enter your surname"),
    street: Yup.string().required("Enter street name"),
    city: Yup.string().required("Enter city name"),
    ["zip-code"]: Yup.string().required("Enter zip code"),
    ["phone-number"]: Yup.string()
      .min(9, "Incorrect phone number")
      .required("Enter phone number"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Enter zip code"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <div className="delivery-details-background"></div>
      <div className="delivery-details-modal-container">
        <div className="top-row">
          <h1>Delivery Details</h1>
          <div className="close" onClick={onCancel}>
            <Cancel />
          </div>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onCancel();
            alert("Order placed");
            resetSections();
          })}
          className="delivery-form"
        >
          <div className="form-top-row">
            <div className="small-cell-container">
              <label htmlFor="name">Name</label>
              <input
                className="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              ></input>
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div className="small-cell-container">
              <label htmlFor="surname">Surname</label>
              <input
                className="surname"
                id="surname"
                type="text"
                placeholder="Enter your surname"
                {...register("surname")}
              ></input>
              <div className="invalid-feedback">{errors.surname?.message}</div>
            </div>
          </div>
          <div className="cell-container">
            <label htmlFor="street">Street</label>
            <input
              className="street"
              id="street"
              type="text"
              placeholder="Enter street name"
              {...register("street")}
            ></input>
            <div className="invalid-feedback">{errors.street?.message}</div>
          </div>
          <div className="cell-container">
            <label htmlFor="city">City</label>
            <input
              className="city"
              id="city"
              type="text"
              placeholder="Enter city name"
              {...register("city")}
            ></input>
            <div className="invalid-feedback">{errors.city?.message}</div>
          </div>
          <div className="cell-container">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              className="zip-code"
              id="zip-code"
              type="text"
              placeholder="Enter zip-code"
              {...register("zip-code")}
            ></input>
            <div className="invalid-feedback">
              {errors["zip-code"]?.message}
            </div>
          </div>
          <div className="cell-container">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              className="phone-number"
              id="phone-number"
              type="text"
              placeholder="Enter phone number"
              {...register("phone-number")}
            ></input>
            <div className="invalid-feedback">
              {errors["phone-number"]?.message}
            </div>
          </div>
          <div className="cell-container">
            <label htmlFor="email">E-mail Adres</label>
            <input
              className="email"
              id="email"
              type="text"
              placeholder="Enter e-mail adres"
              {...register("email")}
            ></input>
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="order-summary">
            <p className="summary">Order Summary</p>
            {yourCard.map((dish) => (
              <div className="row">
                <div className="icon">{dish.numberOfItemsInBasket}</div>
                <div className="dish-name">{dish.dish}</div>
                <div className="dish-price">
                  ${dish.price * dish.numberOfItemsInBasket}
                </div>
              </div>
            ))}
            <p className="delivery">Cash on delivery</p>
            <button>Order</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DeliveryDetailsModal;
