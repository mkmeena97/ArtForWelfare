import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="">
    <section className ="page_404 d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
  <div className =" container-fluid">
    <div className ="row">
      <div className ="col-sm-12 ">
        <div className ="col-sm-12 col-sm-offset-1  text-center">
          <div className ="four_zero_four_bg">
            <h1 className ="text-center ">404</h1>

          </div>

          <div className ="contant_box_404">
            <h3 className ="h2">
              Look like you're lost
            </h3>

            <p>The page you are looking for is not available!</p>
            <Link to="/homepage" className="btn btn-primary link_404">
        Go to Home
      </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default PageNotFound;