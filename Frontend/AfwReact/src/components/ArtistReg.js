import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Swal from 'sweetalert2';
=======
>>>>>>> 6da3b653c287f2cc3f9c2012cdfd2701493e4d86

export default function ArtistReg() {
  const init = {


    fname: { value: "", hasError: true, touched: false, error: "" },
    lname: { value: "", hasError: true, touched: false, error: "" },
    email: { value: "", hasError: true, touched: false, error: "" },
    contact: { value: "", hasError: true, touched: false, error: "" },
    address: { value: "", hasError: true, touched: false, error: "" },
    area_id: { value: "", hasError: true, touched: false, error: "" },
    city_id: { value: "", hasError: true, touched: false, error: "" },
    state_id: { value: "", hasError: true, touched: false, error: "" },
    user_name: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    role: 3,
    que_id: { value: "", hasError: true, touched: false, error: "" },
    answer: { value: "", hasError: true, touched: false, error: "" },
    speciality: { value: "", hasError: true, touched: false, error: "" },
    isFormValid:false,
  }

  const validateData = (name, value) => {
    let hasError = false, error = "";
    switch (name) {
      default:
    
    break;
        case "email":
            let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!regex4.test(value)) {
                hasError = true;
                error = "Enter valid Email"
            }
            break;
        case "password":
           
           let regex1= /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;    
            
            if (!regex1.test(value)) {
                hasError = true;
                error = "Password Should Contain at least one alphabetical character ,one digit ,  one special character and 10 characters long "
            }
            break;
        case "fname":
            let regex2 =/^[A-Za-z ]{1,20}$/;

            if (!regex2.test(value)) {
                hasError = true;
                error = "First Name should not more than 20 characters"
            }
            break;
        case "lname":
            let regex3 = /^[A-Za-z ]{1,20}$/;

            if (!regex3.test(value)) {
                hasError = true;
                error = "Last Name should not be more than 20 characters"
            }
            break;
        case "contact":
            let regex5 = /^[0-9]{10}$/;

            if (!regex5.test(value)) {
                hasError = true;
                error = "Contact Number Should have 10 Digits"
            }
            break;
       
        case "address":
           let regex10 =/^[A-Za-z0-9\s.,#-/()]*$/;

            if (!regex10.test(value)) {
                hasError = true;
                error = "Please Enter Address"
            }
            break;
        case "user_name":
          let regex6 = /^[a-zA-Z0-9_@]{8,12}$/;
          if (!regex6.test(value)) {
            hasError = true;
            error = "Username should Contain 8 to 12 characters"
        }
        break; 

    }
    return { hasError, error }
}


const reducer = (state, action) => {
  switch (action.type) {
    
    case 'update':
      {
        const{name,value,hasError,error,touched,isFormValid}=action.data;
        return {
           ...state,
           [name]: {...state[name],value,hasError,error,touched,isFormValid },
           isFormValid
           }
      }
      
    case 'reset':
      return init;

      default:
        return state;

  }

}

  const [info, dispatch] = useReducer(reducer, init);
  const [allarea, setAllarea] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [allques, setAllques] = useState([]);
  const [allstates, setAllstates] = useState([]);
  const navigate = useNavigate();
<<<<<<< HEAD
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const onInputChange = (name, value, dispatch) => {
    //validation logic
    const { hasError, error } = validateData(name, value); //form field, latest value
    //which key to be modified - value, hasError, error, touched 
    let isFormValid = true;
    for (const key in info) {
        let item = info[key];
       
        if (item.hasError) {
            isFormValid = false;
            break;
        }
    }
    dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
}

const onFocusOut = (name, value, dispatch) => {
  const { hasError, error } = validateData(name, value)
  let isFormValid = true
  for (const key in info) {
      const item = info[key]
      if (key === name && hasError) {
          isFormValid = false
          break
      } else if (key !== name && item.hasError) {
          isFormValid = false
          break
      }
  }
  dispatch({
      type: "update",
      data: { name, value, hasError, error, touched: true, isFormValid },
  })
}


=======
>>>>>>> 6da3b653c287f2cc3f9c2012cdfd2701493e4d86

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify( {
        fname:info.fname.value,
        lname:info.lname.value,
        email:info.email.value,
        contact:info.contact.value,
        address:info.address.value,
        area_id:info.area_id.value,
        city_id:info.city_id.value,
        state_id:info.state_id.value,
        user_name:info.user_name.value,
        password:info.password.value,
        role:2,
        que_id:info.que_id.value,
        speciality:info.speciality.value,
        answer:info.answer.value
      }),
    }
    fetch("http://localhost:8080/regArtist", reqOptions)
      .then((resp) => {
        resp.json();
        console.log(resp.status);
        if (resp.status === 200) {
<<<<<<< HEAD
          
          //alert("Registration Successful...!");
          //navigate("/");

          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registration Successful",
            
          }).then(() => {
            
            navigate("/");
          });

=======
          //resp.json();
          alert("Registration Successful...!");
          navigate("/homepage");
>>>>>>> 6da3b653c287f2cc3f9c2012cdfd2701493e4d86
        } else {
         // alert("Registration Failed.");
         // window.location.reload();
         setMsg("Registration Failed");
         Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Some Error Occured",
        }).then(() => {
            
          navigate("/reg_artist");
        });

        }
      })
      .catch((e) => {
        console.log(e);
       // alert("Registration Failed.");
       // window.location.reload();
       setMsg("Registration Failed");
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
      <h2 className='header d-flex justify-content-center align-items-center'>Artist Registration Form</h2>
      <div className='container d-flex justify-content-center align-items-center' >

        <form className='col-md-6 p-4 rounded bg-light' >
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={info.fname.value}
              onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }} 
            />
          </div>
          <p className="invalid-feedback" style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>

          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              value={info.lname.value}
              onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }} 
            />
          </div>
          <p className="invalid-feedback" style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={info.email.value}
              onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }} 
            />
            
            <p className="invalid-feedback" style={{ display: info.email.touched && info.email.hasError ? "block" : "none", color: "red" }}> {info.email.error} </p>
          </div>
          <div className="mb-3">
            <label className="form-label">Speciality:</label>
            <input
              type="speciality"
              id="speciality"
              className="form-control"
              name="speciality"
             
              value={info.speciality.value}
              onChange={(e) => { onInputChange("speciality", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("speciality", e.target.value, dispatch) }} 
            />
            
            <p className="invalid-feedback" style={{ display: info.speciality.touched && info.speciality.hasError ? "block" : "none", color: "red" }}> {info.speciality.error} </p>
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number:</label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              name="contact"
             
              value={info.contact.value}
              onChange={(e) => { onInputChange("contact", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("contact", e.target.value, dispatch) }} 
            />
            
            <p className="invalid-feedback" style={{ display: info.contact.touched && info.contact.hasError ? "block" : "none", color: "red" }}> {info.contact.error} </p>
          </div>
          <div class="mb-3">
            <label for="Address" class="form-label">Address</label>
            <input type="text" 
            className ="form-control" 
            id="address"

            name="address"
             
            value={info.address.value}
            onChange={(e) => { onInputChange("address", e.target.value, dispatch) }}
            onBlur={(e) => { onFocusOut("address", e.target.value, dispatch) }} 
          />
          
          <p className="invalid-feedback" style={{ display: info.address.touched && info.address.hasError ? "block" : "none", color: "red" }}> {info.address.error} </p>
        </div>

          <div class="mb-3">
            <label for="inputState" class="form-label">State</label>
            <select
              className="form-group"
              id="state_id"
              name="state_id"
              value={info.state_id.value}
              onChange={(e) => { onInputChange("state_id", e.target.value, dispatch);getcities(e.target.value) }}
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
              value={info.city_id.value}
              onChange={(e) => {
                 onInputChange("city_id", 
                 e.target.value, dispatch);
                 getAreas(e.target.value)  }}
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
              value={info.area_id.value}
              onChange={(e) => { onInputChange("area_id", e.target.value, dispatch) }}
              onBlur={(e) => { onFocusOut("area_id", e.target.value, dispatch) }} 
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
              name="user_name"
             value={info.user_name.value}
                onChange={(e) => { onInputChange("user_name", e.target.value, dispatch) }}
                onBlur={(e) => { onFocusOut("user_name", e.target.value, dispatch) }} 
              />
             
              <p className="invalid-feedback" style={{ display: info.user_name.touched && info.user_name.hasError ? "block" : "none", color: "red" }}> {info.user_name.error} </p>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"> Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={info.password.value}
                onChange={(e) => { onInputChange("password", e.target.value, dispatch) }}
                onBlur={(e) => { onFocusOut("password", e.target.value, dispatch) }} 
              />
              
              <p className="invalid-feedback" style={{ display: info.password.touched && info.password.hasError ? "block" : "none", color: "red" }}> {info.password.error} </p>
          </div>
          <div className="mb-3">
            <label htmlFor="que_id" className="form-label"> Select Security Question:</label>
            <select
              className="form-group"
              id="que_id"
              name="que_id"
              value={info.que_id.value}
              onChange={(e) => { onInputChange("que_id", e.target.value, dispatch)}}
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
              name="answer"
              placeholder="Enter the answer"
              value={info.answer.value}
            onChange={(e) => { onInputChange("answer", e.target.value, dispatch) }}
            onBlur={(e) => { onFocusOut("answer", e.target.value, dispatch) }} 
            />
            {errors.answer && <div className="invalid-feedback">{errors.answer}</div>}
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
      {/* <p>{JSON.stringify(info)}</p> */}
      <p className='text-danger'>{msg}</p>
    </div>


  )
}
