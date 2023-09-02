import React, { useEffect, useState } from "react";

const MyArts = () => {
  const [arts, setArts] = useState([]);
  const loggedArtist = JSON.parse(localStorage.getItem("loggedartist"));

  useEffect(() => {
    const fetchData = async () => {
      if (loggedArtist && loggedArtist.artist_id) {
        try {
          const artistId = loggedArtist.artist_id;
          const response = await fetch(`http://localhost:8080/getArtByArtistId?artist_id=${artistId}`);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setArts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
  
    fetchData();
  }, [loggedArtist]);
  

  return (
    <div className="art-gallery  m-3">
      {arts.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} className='art-image' />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          {/* <p>Artist: {artPiece.artist_name}</p> */}
          <p>Price: ₹ {artPiece.price} </p>
          <p>Status: {artPiece.status} </p>
        </div>
      ))}
    </div>
  );
};

export default MyArts;
