import artlogo from "../images/artlogo1.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtGallery from './ArtGallery'; // Import your ArtGallery component

export default function CustomerHome() {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const userid = JSON.parse(localStorage.getItem("loggeduser")).user_id;

        fetch("http://localhost:8080/getCustomer?user_id=" + userid)
            .then((resp) => resp.json())
            .then((obj) => {
                localStorage.setItem("loggedcustomer", JSON.stringify(obj));
                setCustomer(obj);
            });
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" to="/homepage">
            <img src={artlogo} height="66" alt="logo" loading="lazy" style={{ marginTop: "-1px" }} />
          </Link>
                    <div className="navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer_profile">
                                   
                                   <h4 className="text-center  mt-4">
                                    <span className="text-danger ">
                                       Welcome, {customer && `${customer.fname} ${customer.lname}`}
                                    </span>
                                    </h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                <h3 className="text-center mt-4">
                                    <span className="">
                                        Cart
                                    </span>
                                    </h3> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn btn-danger white px-3 text-center mt-4" to="/logout">
                        <b>Logout</b>
                    </Link>
                </div>
            </nav>
            <div className="container mt-4">
                
                <ArtGallery />
            </div>
        </div>
    );
}

