import React from 'react';
import ngo from '../images/ngo.jpg'
import ngo1 from '../images/ngo1.jpg'
import ngo2 from '../images/ngo2.jpg'
import ngo3 from '../images/ngo3.jpg'

const Aboutus = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Empowering Change Through Art</h2>
          <p className="lead">
            In a world where creativity knows no bounds and compassion fuels progress,
            the union of art, social welfare, and community engagement has paved the
            way for a brighter future.
          </p>
          <p>
            Art for welfare is a movement that redefines the way we perceive the power
            of art. Through this initiative, diverse individuals and entities unite
            to uplift communities, support causes, and foster sustainable change.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={ngo2}
            alt="Art for Welfare"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-6">
          <img
            src={ngo}
            alt="NGO Collaboration"
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">NGO Collaboration</h3>
          <p>
            Non-governmental organizations serve as the catalysts that channel
            resources and efforts towards welfare projects. Their deep understanding
            of societal needs and challenges allows them to identify key areas where
            art can make a difference.
          </p>
          <p>
            By collaborating with artists, NGOs translate creative expression into
            tangible solutions, such as educational programs, healthcare initiatives,
            and community development projects.
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3">Artist's Contribution</h3>
          <p>
            Artists are at the heart of this movement, contributing their creative
            expressions to drive positive change. Through their artworks, they not only
            inspire conversations but also donate a portion of the proceeds to the NGOs.
          </p>
          <p>
            With every purchase of an artist's creation, customers not only acquire a
            unique piece of art but also contribute to the welfare of the community,
            creating a profound impact on society's most pressing challenges.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={ngo3}
            alt="Artist's Contribution"
            className="img-fluid rounded mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
