import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import { useSelector } from "react-redux";
import LoginComp from "./components/LoginComp";
import AdminHome from "./components/AdminHome";
import NgoHome from "./components/NgoHome";
import CustomerHome from "./components/CustomerHome";
import ArtistHome from "./components/ArtistHome";
import LogoutComp from "./components/LogoutComp";
import ForgotPassword from "./components/ForgotPassword";
import CustomerReg from "./components/CustomerReg";
import ArtistReg from "./components/ArtistReg";
import artlogo from "../src/images/artlogo1.png";
import NgoReg from "./components/NgoReg";
import AddArt from "./components/AddArt";
import ArtArt from "./components/ArtArt";
import Cart from "./components/CartComp";

import AddArt from "./components/AddArt";
import CartPage from "./components/CartComp";
import ViewNgoFund from "./components/ViewNgoFund";
import ApproveNgo from "./components/ApproveNgo";
import AfwFundComponent from "./components/AfwFund";


function App() {
  //referering initial state of logged
  const mystate = useSelector((state) => state.logged);
  return (
    <div>
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
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
                  <NavLink className="nav-link white" to="/homepage">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link white" to="/aboutuspage">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link white" to="/contactpage">
                    Contact
                  </NavLink>
                </li>
                
                

                <li class="nav-item dropdown pe-4">
                  <a
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Registration
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="reg_customer" className="dropdown-item ">
                        Customer Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="reg_ngo"
                        className="dropdown-item nav-link px-3"
                      >
                        NGO Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="reg_artist"
                        className="dropdown-item nav-link px-3"
                      >
                        Artist Registration
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link className="btn btn-warning white px-3" to="/login">
              <b>Login</b>
            </Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route element={<Home />} path="homepage" />

        <Route path="/login" element={<LoginComp />}></Route>
        
        <Route path="/ngo_home" element={<NgoHome />}></Route>
        <Route path="/customer_home" element={<CustomerHome />}></Route>
        <Route path="/artist_home" element={<ArtistHome />}></Route>
        <Route path="/logout" element={<LogoutComp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/reg_customer" element={<CustomerReg />}></Route>
        <Route path="/reg_ngo" element={<NgoReg />}></Route>
        <Route path="/reg_artist" element={<ArtistReg />}></Route>
        <Route path="/addart" element={<AddArt></AddArt>}></Route>
<<<<<<< HEAD
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        
        <Route path="/viewfund" element={<ViewNgoFund></ViewNgoFund>}></Route>
        <Route path="/viewafwfund" element={<AfwFundComponent/>}></Route>


        <Route path="/admin_home" element={<AdminHome />}>
            <Route  path="approve_ngo" element={<ApproveNgo />}></Route>
        </Route>




=======
        <Route path="/cart" element={<Cart></Cart>}></Route>
>>>>>>> 6da3b653c287f2cc3f9c2012cdfd2701493e4d86
        <Route exact element={<Navigate to="/homepage" />} path="/" />
        <Route exact element={<Navigate to="/404" />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
