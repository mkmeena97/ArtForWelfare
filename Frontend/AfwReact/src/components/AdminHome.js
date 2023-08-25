import { Link, NavLink, Route, Routes } from "react-router-dom";
import artlogo from "../images/artlogo1.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome(){

    const[vngo,setVngo]= useState([])
    const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:8080/notverifiedNgo") 
    .then(res=>res.json())
    .then(vngo=>setVngo(vngo))
  },[])

 // const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;
  const handleVerify = (ngo_id) => {
    console.log(ngo_id);
    fetch("http://localhost:8080/verifyngo?ngo_id="+ngo_id)
    .then(resp => {
      if(resp.ok)
      {
        alert("Ngo Verified Successfully...");
        return resp.json();
      }
      else
      {
        throw new Error("server error")
      }
    })
    .then(obj => {
      alert("Request accepted..check application status");
     // navigate("/admin_home");
      window.location.reload(true);
  
    })
    .catch((error)=>alert("Server error. Try later"))

  }

    return(
        
            
         <div >
        <nav
          class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src={artlogo}
                height="66"
                alt="logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link white  px-3" to="/viewfund">
                    View Fund
                  </NavLink>

                  
                </li>
               

              
              </ul>
            </div>
            <Link className="btn btn-danger white px-3" to="/logout">
              <b>Logout</b>
            </Link>
          </div>
        </nav>
        <h2 className="text-center">Admin Profile Page</h2>


        <div className="container">
        <h1 className="p-3">NGO Verification </h1>
        <table className="table table-bordered table-hover mt-3">
    <thead className="thead-dark">
        <tr>
            <th>NGO Id</th>
            <th>NGO Name</th>
            <th>NGO Domain</th>
            <th>Certificate</th>
            <th></th>
            
        </tr>
    </thead>
    <tbody>
        {vngo.map(v => (
            <tr >
                <td>{v.ngo_id}</td>
                <td>{v.ngo_name}</td>
                <td>{v.domain}</td>
                <td>
                    <div style={{display: v?"inline":"none"}}>
                        <img src={`data:image/jpeg;base64,${v && v.certificate}`} width="200" height="200" />
                    </div>
                </td>
                {/* <td>
                  {v.certificate ? (
                      <a
                      href={`data:application/octet-stream;base64,${btoa(String.fromCharCode(...new Uint8Array(v.certificate)))}`}
                      download="certificate.pdf"
                      >
                      Download Certificate
                      </a>
                    ) : (
                    <span>No Certificate Available</span>
                    )}
                </td> */}
                <td><button className="btn btn-primary" onClick={() => handleVerify(v.ngo_id)}>Verify</button></td>
            </tr>
        ))}
    </tbody>
</table>

      </div>

         
            <Routes>
                <Route path='' ></Route>
            </Routes>    
        </div>
    )
}