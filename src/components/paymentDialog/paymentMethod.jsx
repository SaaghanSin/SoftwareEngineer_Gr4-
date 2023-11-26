import React from "react";
const PaymentMethod = ({ label, imageSrc, onClick }) => {
  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  const imageStyle = {
    marginRight: '5px', // Adjust spacing between button text and image
    maxWidth: '20px', // Set the maximum width for the image
    maxHeight: '20px', // Set the maximum height for the image
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt="button icon" style={imageStyle} />}
      {label}
    </button>
  );
};

export default PaymentMethod;
