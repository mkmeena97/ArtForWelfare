import { Link, NavLink, Route, Routes } from "react-router-dom";
import artlogo from "../images/artlogo1.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function ApproveNgo(){

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
       // alert("Ngo Verified Successfully...");
        return resp.json();
      }
      else
      {
        throw new Error("server error")
      }
    })
    .then(obj => {

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Ngo Approved ",
        
      }).then(() => {
        
        navigate("/admin_home/approve_ngo");
      });
      //alert("Request accepted..check application status");
     // navigate("/admin_home");
     // window.location.reload(true);
  
    })
    .catch((error)=>alert("Server error. Try later"))

  }

    return(
        
            
         <div >

        
        {/* <h2 className="text-center m-2">Admin Profile Page</h2> */}


        <div className="container">
        <h1 className="p-3">NGO Request Approval</h1>
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
                <td><button className="btn btn-primary" onClick={() => handleVerify(v.ngo_id)}>Approve</button></td>
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