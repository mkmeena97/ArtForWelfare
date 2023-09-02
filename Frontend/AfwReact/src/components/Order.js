import React from 'react';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="text-center mb-4">Thank you for your good deed!</h1>
      <p className="text-center lead mb-4">Your order has been successfully placed.</p>
      <Link to="/customer_home" className="btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Order;