import React, { useState, useEffect } from 'react';
import './ArtGallery.css';
import Cart from './Cart';

const ArtGallery = () => {
  const [artList, setArtList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/unsoldarts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArtList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Load cart from local storage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateLocalStorageCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (artPiece) => {
    if (!cart.some(item => item.art_id === artPiece.art_id)) {
      const updatedCart = [...cart, artPiece];
      setCart(updatedCart);
      // Save updated cart to local storage
      updateLocalStorageCart(updatedCart);
    }
  };

  const removeFromCart = (artPiece) => {
    const updatedCart = cart.filter(item => item.art_id !== artPiece.art_id);
    setCart(updatedCart);
    // Save updated cart to local storage
    updateLocalStorageCart(updatedCart);
  };

  return (
    <div className="art-gallery">
      {artList.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          <p>Artist: {artPiece.artist_name}</p>
          <p>Price: {artPiece.price}</p>
          {cart.some(item => item.art_id === artPiece.art_id) ? (
            <button className="btn btn-secondary" disabled>
              Already in Cart
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => addToCart(artPiece)}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default ArtGallery;
