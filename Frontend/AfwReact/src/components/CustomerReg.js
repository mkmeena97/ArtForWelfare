import React, { useEffect, useReducer, useState } from 'react'


export default function CustomerReg() {
  const init = {
    fname: "",
    lname: "",
    email: "",
    contact: "",
    address: "",
    area_id: 0,
    city_id: 0,
    state_id: 0,
    user_name: "",
    password: "",
    role: 3,
    que_id: 0,
    answer: ""

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
  const [allarea, setAllarea] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [allques, setAllques] = useState([]);
  const [allstates, setAllstates] = useState([]);

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/regCustomer", reqOptions)
      .then((resp) => {
        resp.json();
        console.log(resp.status);
        if (resp.status === 200) {
          //resp.json();
          alert("Registration Successful...!");

        } else {
          alert("Registration Failed.");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Registration Failed.");
        window.location.reload();
      });
  };
  const getAreas = (id) => {
    fetch("http://localhost:8080/getAllAreas?cityid="+id)
      .then((resp) => resp.json())
      .then((a) => setAllarea(a));
  };
  const getcities = (id) => {
    fetch("http://localhost:8080/getAllCities?stateid="+id)
      .then((resp) => resp.json())
      .then((c) => setAllcities(c));
  };
  useEffect(() => {
    fetch("http://localhost:8080/getallstate")
      .then((resp) => resp.json())
      .then((c) => setAllstates(c));

    fetch("http://localhost:8080/getque")
      .then((resp) => resp.json())
      .then((q) => setAllques(q));
  }, []);


  return (
    <div>
      <h2 className='header d-flex justify-content-center align-items-center'>Customer Registration Form</h2>
      <div className='container d-flex justify-content-center align-items-center' >

        <form className='col-md-6 p-4 rounded bg-light' >
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={info.fname}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'fname', val: e.target.value
                })
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              value={info.lname}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'lname', val: e.target.value
                })
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={info.email}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'email', val: e.target.value
                })
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number:</label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              value={info.contact}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'contact', val: e.target.value
                })
              }}
            />
          </div>
          <div class="mb-3">
            <label for="Address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" value={info.address}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'address', val: e.target.value
                })
              }} />
          </div>

          <div class="mb-3">
            <label for="inputState" class="form-label">State</label>
            <select
              className="form-group"
              id="state_id"
              name="state_id"
              onChange={(e) => {
                getcities(e.target.value);
                dispatch({
                  type: "update",
                  fld: "state_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select One</option>
              {allstates.map((state) => {
                return (
                  <option value={state.state_id} key={state.state_id}>
                    {state.state_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="mb-3">
            <label for="inputCity" class="form-label">City</label>
            <select
              className="form-group"
              id="city_id"
              name="city_id"
              onChange={(e) => {
                getAreas(e.target.value);
                dispatch({
                  type: "update",
                  fld: "city_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select One</option>
              {allcities.map((city) => {
                return (
                  <option value={city.city_id} key={city.id}>
                    {city.city_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="mb-3">
            <label for="Area" class="form-label">Area</label>
            <select
              className="form-group"
              id="area_id"
              name="area_id"
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "area_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select One</option>
              {allarea.map((area) => {
                return (
                  <option value={area.area_id} key={area.area_id}>
                    {area.area_name}
                  </option>
                );
              })}
            </select>
          </div>

          <br />
          <div className="mb-3">
            <label className="form-label"> User Name:</label>
            <input
              type="tel"
              className="form-control"
              id="user_name"
              value={info.user_name}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'user_name', val: e.target.value
                })
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"> Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={info.password}
              onChange={(e) => {
                dispatch({
                  type: 'update', fld: 'password', val: e.target.value
                })
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="que_id" className="form-label"> Select Security Question:</label>
            <select
              className="form-group"
              id="que_id"
              name="que_id"
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "que_id",
                  val: e.target.value,
                });
              }}
            >
              <option>Select One</option>
              {allques.map((q) => {
                return (
                  <option value={q.que_id} key={q.que_id}>
                    {q.que_text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label"> Answer:</label>
            <input className="form-control"
              type="text"
              id="answer"
              placeholder="Enter the answer"
              value={info.answer}
              onChange={(e) => { dispatch({ type: "update", fld: "answer", val: e.target.value }) }}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => { sendData(e) }}>
            Register
          </button>
          &nbsp;
          <button type="reset" className="btn btn-primary" onClick={() => { dispatch({ type: 'reset' }) }}>
            Reset
          </button>
        </form>
      </ div >
      <p>{JSON.stringify(info)}</p>
    </div>


  )
}
