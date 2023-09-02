import { Link, NavLink, Outlet, Route, Routes} from "react-router-dom";
import artlogo from "../images/artlogo1.png";
import VarifyNgo from "./VarifyNgo";
import AfwFundComponent from "./AfwFund";
import AdminProfile from "./AdminProfile";
import NgoFundComponent from "./NgoFund";

export default function AdminHome(){


    return(
<div>
  <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
            <NavLink className="nav-link white  px-3" to="/admin_home/varifyngo">
              Varify NGO
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link white  px-3" to="/admin_home/viewafwfund">
              AFW Fund
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link white  px-3" to="/admin_home/viewngofund">
              NGO Fund
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link white  px-3" to="/admin_home/viewadminprofile">
                Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className="btn btn-danger white px-3" to="/logout">
        <b>Logout</b>
      </Link>
    </div>
  </nav>
      <div>
        <Outlet/>
        </div>
          <Routes>
              <Route path="/varifyngo" element={<VarifyNgo></VarifyNgo>}></Route>
              <Route path="/viewafwfund" element={<AfwFundComponent></AfwFundComponent>}></Route>
              <Route path="/viewadminprofile" element={<AdminProfile></AdminProfile>}></Route>
              <Route path="/viewngofund" element={<NgoFundComponent></NgoFundComponent>}></Route>
          </Routes>

</div>
    )
}