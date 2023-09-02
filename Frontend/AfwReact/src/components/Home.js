import React from "react";
import gallery1 from "../images/c1.png";
import gallery2 from "../images/c2.png";
import gallery3 from "../images/c3.png";
import artist from "../images/artist.jpg";
import customer from "../images/customer.jpeg";
import ngo from "../images/ngo.jpg";



import iphone from "../images/iphone.png";
import googleplay from "../images/googleplay.png";
import appstore from "../images/appstore.png";
import "./style.css";

const Home = () => {
  return (
    <div>
      {/* <div
        className="p-5  bg-image "
        style={{
          height: "500px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
           
          </div>
        </div>
      </div> */}
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src={gallery3} class="d-block w-100 "  alt="..." />
              
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={gallery2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={gallery1} class="d-block w-100" alt="..." />
            </div>
          </div>
          
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       
      </div>

      <section class="divider py-5 ">
        <div class="row justify-content-center align-items-center">
          <h3 class="my-4 ">
            <i class="fas fa-minus    "></i> ART FOR WELFARE{" "}
            <i class="fas fa-minus    "></i>
          </h3>
          <p class="py-4  ">
            ArtForWelfare presents a
            transformative initiative that fuses the creative brilliance of
            artists with the vital needs of non-governmental organizations
            (NGOs). Our project acts as a bridge between artistic expression and
            impactful social change, allowing artists to contribute their
            talents to support NGOs. Through this unique platform, artists
            create and showcase their works, while customers purchase these
            artworks, with the funds directly benefiting NGOs dedicated to
            making a positive impact on society.
          </p>
        </div>
      </section>

      <div>


      <div class="row row-cols-1 row-cols-md-3 g-4 p-5 mcustome-4">
  <div class="col">
    <div class="card h-100">
      <img src={artist} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Artist</h5>
        <p class="card-text">We are excited to have an artist graciously donating their art to our website. Their creative contributions will undoubtedly enrich our platform and bring inspiration to our visitors. We extend our sincere gratitude for their generosity and look forward to sharing their unique artwork with the world.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={customer} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Customer</h5>
        <p class="card-text">By purchasing art from our website, customer is not just acquiring beauty; he is also making a meaningful contribution to the cause of welfare. His choice echoes with generosity, as a portion of your purchase goes towards making a difference in the lives of those in need. Thank you for being a part of this purposeful journey through your purchase.</p>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img  src={ngo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">NGO's</h5>
        <p class="card-text">Our website's funds are making a direct impact as they flow to dedicated NGOs. These organizations are not just recipients; they are catalysts for welfare. With your support, they are empowered to drive meaningful change and improve lives. Thank you for being a part of this important journey with us.</p>
      </div>
      
    </div>
  </div>
</div>



      </div>

      <div className="container-fluid bg-grey pb-5">
        <div className="d-flex justify-content-center align-item-center">
          <p className="fs-1 m-5 pt-4">Keep in touch, join our newsletter</p>
        </div>
        <div className="input-group pb-5 mx-auto input-size px-5 ">
          <input
            type="email"
            className="form-control  p-4 bg-darkgrey"
            placeholder="Enter your email id"
            aria-label="Enter your email id"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-success fs-5"
            type="submit"
            id="button-addon2"
            data-mdb-ripple-color="dark"
          >
            Submit
          </button>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted ">
        <section className="py-4 bg-dark ">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  About Us
                </h6>
                <p className="text-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat voluptate expedita aliquam labore, exercitationem
                  impedit, delectus minima cumque deleniti, quas nostrum dolore?
                  Modi alias ipsa numquam, expedita eum voluptate veniam!
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  About Us
                </h6>
                <p>
                  <a href="#!" className=" text-secondary">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className=" text-secondary">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className=" text-secondary">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className=" text-secondary">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">
                  Help & Support
                </h6>
                <p className=" text-secondary">FAQ</p>
                <p className=" text-secondary">Term & Conditions</p>
                <p className=" text-secondary">Policy and Privacy</p>
                <p className=" text-secondary">Customer Care</p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ft-title">Social</h6>
                <p className=" text-white">
                  <i
                    className="fab fa-facebook-f white pill-radius"
                    aria-controls="#picker-editor"
                  ></i>
                </p>
                <p className=" text-secondary">
                  <i
                    className="fab fa-twitter white pill-radius"
                    aria-controls="#picker-editor"
                  ></i>
                </p>
                <p className=" text-secondary">
                  <i
                    className="fab fa-pinterest white pill-radius"
                    aria-controls="#picker-editor"
                  ></i>
                </p>
                <p className=" text-secondary">
                  <i
                    className="fab fa-instagram white pill-radius"
                    aria-controls="#picker-editor"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-light p-5 fs-6 bg-black">
          © 2022-2023 ART FOR WELFARE, Inc. All RIGHT RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Home;
