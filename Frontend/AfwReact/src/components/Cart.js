import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div key={item.art_id} className="cart-item">
    <img src={`data:image/jpeg;base64,${item.image}`} alt={item.title} />
    <h3>{item.art_name}</h3>
    <p>Price: {item.price}</p>
    <button
      className="btn btn-danger"
      onClick={() => removeFromCart(item)}
    >
      Remove
    </button>
  </div>
);

// to fetch the dataof art which are present in the cart

const fetchCartArtData = async (cart) => {
  try {
    const artIds = cart.map(item => item.art_id);
    const response = await fetch(`http://localhost:8080/artByIds?ids=${artIds.join(',')}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cart art data:', error);
    return [];
  }
};

// fetchCartArtData(Cart);

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2 className='text-white bg-black p-4 fw-bold sticky-top '>My Cart</h2>
      {cart && cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.art_id} item={item} removeFromCart={removeFromCart} />
          ))}
          <div className="cart-total">
            <h5 className='text-warning bg-black my-2 p-4'>Total Price : <span className='text-success fw-bolder fs-2 ms-5 ps-4'> ₹ {calculateTotalPrice()}</span></h5>
            <button className='btn btn-success btn-block' onClick={() => alert('Purchase Successful!')}>
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;