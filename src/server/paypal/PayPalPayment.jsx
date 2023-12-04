// PayPalPayment.jsx
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import PayPalButton from "./PayPalButton";
const PayPalPayment = () => {
  const createOrder = (data, actions) => {
    return fetch("/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            description: "A4",
            quantity: "1",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data, actions) => {
    return fetch("/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((capturedOrder) => {
        // Handle the captured order details, e.g., show a success message
        console.log("Captured Order:", capturedOrder);
      });
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPalPayment;
