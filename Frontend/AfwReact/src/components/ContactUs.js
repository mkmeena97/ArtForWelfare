import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to get in touch with us.</p>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Visit Us</h4>
          <p>123 Main Street<br />City, Country</p>
          <h4>Reach Us</h4>
          <p>artforWelfare@gmail.com</p>
          <h4>Follow Us</h4>
          <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            {/* Add more social media links */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
