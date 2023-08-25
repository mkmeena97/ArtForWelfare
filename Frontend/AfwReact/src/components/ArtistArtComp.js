import React, { useEffect, useState } from "react";

const MyArts = () => {
  const [arts, setArts] = useState([]);
  const loggedArtist = JSON.parse(localStorage.getItem("loggedartist"));

  useEffect(() => {
    if (loggedArtist && loggedArtist.artist_id) {
      const artistId = loggedArtist.artist_id;

      fetch("http://localhost:8080/getArtByArtistId?artist_id=" + artistId)
        .then((resp) => resp.json())
        .then((obj) => {
          setArts(obj);
        });
    }
  }, [loggedArtist]);

  return (
    <div className="art-gallery">
      {arts.map((artPiece) => (
        <div key={artPiece.art_id} className="art-card">
          <img src={`data:image/jpeg;base64,${artPiece.image}`} alt={artPiece.title} />
          <h3>{artPiece.art_name}</h3>
          <p>Description: {artPiece.description}</p>
          <p>Artist: {artPiece.artist_name}</p>
          <p>Price: {artPiece.price}</p>
          <p>Status: {artPiece.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyArts;
