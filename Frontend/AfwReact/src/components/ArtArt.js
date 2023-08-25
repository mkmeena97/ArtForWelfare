import React, {useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function ArtArt() {
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
  const navigate = useNavigate();

  const artist_id = JSON.parse(localStorage.getItem("loggedartist")).artist_id;
 
  const sendData = (e) => {
    e.preventDefault();
    
    const fd = new FormData();
    fd.append("file", file);
  
    for (const key in info) {
      fd.append(key, info[key]);
    }
  
    const reqOptions = {
      method: "POST",
      body: fd,
    };
  
    fetch("http://localhost:8080/addart", reqOptions)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("server error");
        }
      })
      .then((obj) => {
        const art_id = obj.art_id;
  
        const fdImage = new FormData();
        fdImage.append("file", file);
  
        const reqOptionsImage = {
          method: "POST",
          body: fdImage,
        };
  
        fetch("http://localhost:8080/uploadimage/" + art_id, reqOptionsImage)
          .then((resp) => {
            if (resp.status === 200) {
              alert("Art added successfully");
              navigate('/');
            } else {
              alert("Image unable to update. Try again!!");
              navigate('/');
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Image Upload Error");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Server Error");
      });
  };
  
      
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
          <h2 className='header d-flex justify-content-center align-items-center'>ADD ART</h2>
          <div className='container d-flex justify-content-center align-items-center' >
    
            <form className='col-md-6 p-4 rounded bg-light' >
              <div className="mb-3">
                <label className="form-label">Art Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="art_name"
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
      <p>{JSON.stringify(info)}</p>
      <p>Artist ID: {artist_id}</p>
    </div>
  )
}