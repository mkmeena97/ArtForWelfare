
import React, { useState, useEffect } from 'react';
import './ArtGallery.css'; // Import your CSS file if needed

const ArtGallery = () => {
  const [artList, setArtList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (artPiece) => {
    const updatedCartItems = [...cartItems, artPiece];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  return (
    <div className="art-gallery m-3">
      {artList.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} className='art-image' />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          {/* <p>Artist: {artPiece.artist_name}</p> */}
          <p>Price:₹ {artPiece.price}</p>
          <button
            onClick={() => addToCart(artPiece)}
            disabled={cartItems.some((item) => item.art_id === artPiece.art_id)}
          >
            {cartItems.some((item) => item.art_id === artPiece.art_id) ? 'Already in Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
