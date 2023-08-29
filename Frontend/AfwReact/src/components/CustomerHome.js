
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
                    <a className="navbar-brand" href="#">
                        Customer Home
                    </a>
                    <div className="navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer_profile">
                                   {/* <h3>{customer && `${customer.fname} ${customer.lname}`}</h3> */}
                                   <h3 className="text-center mt-4">
                                    <span className="text-primary">
                                        {customer && `${customer.fname} ${customer.lname}`}
                                    </span>
                                    </h3>
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
                    <Link className="btn btn-danger white px-3" to="/logout">
                        <b>Logout</b>
                    </Link>
                </div>
            </nav>
            <div className="container mt-4">
                <h1>Welcome to Customer's Home Page</h1>
                <ArtGallery />
            </div>
        </div>
    );
}

