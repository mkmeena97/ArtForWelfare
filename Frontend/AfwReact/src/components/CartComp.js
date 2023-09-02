import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const CartPage = () => {
  const [arts, setArts] = useState([]);
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setArts(storedCartItems || []);
  }, []);

  const calculateTotal = () => {
    return arts.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = arts.filter((item) => item.art_id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setArts(updatedCart);
  };

  const handleCheckout = async () => {
    const custId = JSON.parse(localStorage.getItem('loggedcustomer')).cust_id;
    const totalAmount = calculateTotal();
    const paymentId = Math.random().toString(36).substr(2, 9);
    const payMode = 'credit_card';
    // const datetime = new Date();
    // const year = datetime.getFullYear();
    // const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
    // const day = datetime.getDate().toString().padStart(2, '0');
    // const hour = datetime.getHours().toString().padStart(2, '0');
    // const minute = datetime.getMinutes().toString().padStart(2, '0');
    // const second = datetime.getSeconds().toString().padStart(2, '0');

    // const formattedDatetime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    const artIds = arts.map((item) => item.art_id);

    const requestData = {
      cust_id: custId,
      amount: totalAmount,
      payment_id: paymentId,
      pay_mode: payMode,
      art_id: artIds,
      // datetime:formattedDatetime, 
    };

    try {
      const response = await fetch("http://localhost:8080/saveOrder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Order Placed !",
          
        }).then(() => {
          
          setMsg('Order placed successfully');
          //console.log('Order placed successfully!');
              localStorage.removeItem('cartItems');
              setArts([]);
              navigate("/order");
        });
       
      } else {
        setMsg('Order Not Placed');
        console.error('Error placing the order');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">Art Name</th>
      <th scope="col">Price</th>
      {/* <th scope="col">Service Charge</th> */}
      {/* <th scope="col">Subtotal</th> */}
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {arts.map((item) => (
      <tr key={item.art_id}>
        <td>
          <strong>{item.art_name}</strong>
        </td>
        <td>₹ {item.price} </td>
        {/* <td>₹ {item.price} </td> */}
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleRemoveItem(item.art_id)}
          >
            Remove
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
<div className="cart-buttons mt-4">
  <Link to="/customer_home" className="btn btn-primary me-2">
    Continue Shopping
  </Link>
  <button className="btn btn-success" onClick={handleCheckout}>
    Buy
  </button>
</div>
<p className="cart-subtotal mt-3">
  <strong>Cart Subtotal:</strong>₹ {calculateTotal()} 
</p>
    </div>
  );
};

export default CartPage;