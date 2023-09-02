import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import artlogo from "../images/artlogo1.png";
import MyArts from "./ArtistArtComp";

const ArtistHome = () => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;

    fetch("http://localhost:8080/getArtist?user_id=" + userid)
      .then((resp) => resp.json())
      .then((obj) => {
        localStorage.setItem("loggedartist", JSON.stringify(obj));
        setArtist(obj);
      });
  }, []);

  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src={artlogo} height="66" alt="logo" loading="lazy" style={{ marginTop: "-1px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink className="nav-link white  px-3" to="/addart">
                  Add Art
                </NavLink>
              </li>
              <NavLink className="nav-link white text-danger fw-bolder px-2" to="/addart">
                Welcome, {artist && artist.fname}
              </NavLink>
            </ul>
          </div>
          <Link className="btn btn-danger white px-3" to="/logout">
            <b>Logout</b>
          </Link>
        </div>
      </nav>
      <div>
        <MyArts></MyArts>
      </div>
    </div>
  );
};

export default ArtistHome;
