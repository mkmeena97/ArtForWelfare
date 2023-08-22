import { Link, Route, Routes } from "react-router-dom";

export default function AdminHome(){
    return(
        <div>
            <h1>Admin Profile Page</h1>
            <nav className='navbar navbar-expand-sm bg-light mb-3'>
            <div className='container-fluid'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="" className='nav-link px-3'>NGO Requests</Link>
                    <Link to="viewfund" className='nav-link px-3'>View Fund</Link>
                    <Link to="/logout" className='nav-link px-3'>Logout</Link>
                </li>
              </ul>
            </div>
         </nav>
         
            <Routes>
                <Route path='' ></Route>
            </Routes>    
        </div>
    )
}