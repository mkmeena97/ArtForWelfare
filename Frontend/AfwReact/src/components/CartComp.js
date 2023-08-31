import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [arts, setArts] = useState([]);
  
  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) ;
    console.log(storedCartItems.length)
    setArts(storedCartItems);
  },[]);


  const calculateTotal = () => {
    return arts.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = arts.filter((item) => item.art_id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setArts(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {arts.map((item) => (
          <li key={item.art_id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.art_name}</strong><br />
              Price: {item.price} rs<br />
              Subtotal: {item.price} rs
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveItem(item.art_id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3">Cart Subtotal: {calculateTotal()} rs</p>
    </div>
  );
};

export default CartPage;