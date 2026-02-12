import "./css/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <div className="logo">🍿 BingeHere</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <p>
            Have questions, feedback, or need help with booking? We’d love to
            hear from you.
          </p>

          <div className="contact-info">
            <p>📧 support@bingehere.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 India</p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
