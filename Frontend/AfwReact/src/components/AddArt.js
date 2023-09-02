import React, {useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link, NavLink } from "react-router-dom";
import artlogo from "../images/artlogo1.png";



export default function AddArt() {
  //const loggedArtist = JSON.parse(localStorage.getItem("loggedartist")).artist_id;
  const init = {
    artist_id: JSON.parse(localStorage.getItem("loggedartist")).artist_id,
    cat_id: 0,
    price: 0,
    ngo_id:0,
    description:"",
    art_name: "",  
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;

    }

  }

  const [info, dispatch] = useReducer(reducer, init);
  const [allcategories, setallcategories] = useState([]);
  const [allngo, setallngo] = useState([]);
  const [file, setFile] = useState();
 

  const artist_id = JSON.parse(localStorage.getItem("loggedartist")).artist_id;
 
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/addart", reqOptions)
      .then((resp) => {
       // resp.json();
        console.log(resp.status);
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("server error")    
        }
      })
      .then(obj => {
        console.log(obj)
        const fd = new FormData();
        fd.append("file", file);
        const reqOptions1 = {
          method: "POST",
        //  headers: {'content-type': 'multipart/form-data'},
          body: fd
        }
        console.log(obj.art_id)
        fetch("http://localhost:8080/uploadimage/"+obj.art_id,reqOptions1)
          .then(resp=>{
            console.log(resp);
            if(resp.status === 200)
            {
             
             // alert("Art added successful")
             Swal.fire({
              icon: "success",
              title: "Success",
              text: "Art Added Successfully",
              
            }).then(() => {
              dispatch({ type: "reset" });
              setFile(null);
              
            });
              
            }
            else {

              Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: "Some Error Occured, Try Again !",
              }).then(() => {
                dispatch({ type: "reset" });
                setFile(null);
                // navigate('/artist_home');
              });
              //alert("Image unable to update.Try again!!");
              
            }
          })
          .then(data => console.log(JSON.stringify(data)))
          })
          .catch((error) => {
          console.log(error);
          alert("Server Error");
          window.location.reload();
        })
        .catch((error)=>{
          console.log(error)
          alert("Server error. Try later")
          console.log(error);
        });
      }
      
      useEffect(() => {
        fetch("http://localhost:8080/getcategory")
          .then((resp) => resp.json())
          .then((c) => setallcategories(c));
    
        fetch("http://localhost:8080/verifiedNgo")
          .then((resp) => resp.json())
          .then((n) => setallngo(n));
      }, []);

      return (
        <div>
           <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={artlogo} height="66" alt="logo" loading="lazy" style={{ marginTop: "-1px" }} />
          </a>
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
              {/* <NavLink className="nav-link white text-danger fw-bolder px-2" to="/addart">
                Welcome, {artist && artist.fname}
              </NavLink> */}
            </ul>
          </div>
          <Link className="btn btn-danger white px-3" to="/logout">
            <b>Logout</b>
          </Link>
        </div>
      </nav>

          <h2 className='header d-flex justify-content-center align-items-center m-4'>ADD ART</h2>
          <div className='container d-flex justify-content-center align-items-center' >
    
            <form className='col-md-6 p-4 rounded bg-light' >
              <div className="mb-3">
                <label className="form-label">Art Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="art_name"
                  required
                  value={info.art_name}
                  onChange={(e) => {
                    dispatch({
                      type: 'update', fld: 'art_name', val: e.target.value
                    })
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">description:</label>
                <input
                type="text"
                id="description"
                
                className="form-control"
                value={info.description}
                required
                onChange={(e) => {
                    dispatch({
                      type: 'update', fld: 'description', val: e.target.value
                    })
                  }}
                />
              </div>
              <div class="mb-3">
              <label className="form-label">Price:</label>
                <input
                type="number"
                id="price"
                className="form-control"
                value={info.price}
                onChange={(e) => {
                    dispatch({
                      type: 'update', fld: 'price', val: e.target.value
                    })
                  }}
                />
              </div>
              <div class="mb-3">
              <label for="inputCategory" class="form-label">Select Category :</label>
              <select
              className="form-group"
              id="cat_id"
              name="cat_id"
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "cat_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select category</option>
              {allcategories.map((category) => {
                return (
                  <option value={category.cat_id} key={category.cat_id}>
                    {category.cat_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="mb-3">
              <label for="inputNGO" class="form-label">NGO :</label>
              <select
              className="form-group"
              id="ngo_id"
              name="ngo_id"
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "ngo_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select NGO</option>
              {allngo.map((NGO) => {
                return (
                  <option value={NGO.ngo_id} key={NGO.ngo_id}>
                    {NGO.ngo_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Art Image:</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              // value={info.certificate}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
            Submit
          </button>
          &nbsp;
          <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }}>
            Reset
          </button>
        </form>
      </ div >
      {/* <p>{JSON.stringify(info)}</p>
      <p>Artist ID: {artist_id}</p> */}
    </div>
  )
}