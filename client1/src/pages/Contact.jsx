import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup-container">
          <h2>Contact Us</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              autoComplete="off"
              value={contact.username} // Correct reference to state
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              value={contact.email} // Correct reference to state
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              autoComplete="off"
              value={contact.message} // Correct reference to state
              onChange={handleInput}
            />
          </div>

          <button type="submit" id="sign-btn">Contact Us</button>
        </div>
      </form>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.1616490030283!2d78.06196227417969!3d30.459859198771653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d0dcb65a5313%3A0x71857f87c84a04a1!2sMall%20Rd%2C%20Mussoorie%2C%20Uttarakhand%20248179!5e0!3m2!1sen!2sin!4v1727592026499!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <footer>
        <div className="f-info">
          <div className="f-info-socials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="f-info-brand"> &copy; Wanderlust Pvt Limited</div>
          <div className="f-info-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
};
