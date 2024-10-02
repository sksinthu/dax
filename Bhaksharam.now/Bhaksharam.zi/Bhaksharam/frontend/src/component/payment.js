import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // Get order details from state

  const handlePayment = () => {
    // Implement payment logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="payment">
      <h2>Payment Details</h2>
      {orderDetails ? (
        <div>
          <h3>Order Summary:</h3>
          <p>Address: {orderDetails.address}</p>
          <p>City: {orderDetails.city}</p>
          <p>Postal Code: {orderDetails.postalCode}</p>
          <h4>Your Items:</h4>
          <ul>
            {orderDetails.items.map(item => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <button onClick={handlePayment}>Complete Payment</button>
        </div>
      ) : (
        <p>No order details available.</p>
      )}
    </div>
  );
};

export default Payment;
