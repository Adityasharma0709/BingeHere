import "./css/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="about-nav">
        <div className="logo">🍿 BingeHere</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about" className="active">
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Content */}
      <section className="about-container">
        <div className="about-left">
          <h1>About BingeHere</h1>
          <p>
            BingeHere is a modern movie ticket booking platform built for speed,
            simplicity, and a cinematic experience.
          </p>

          <p>
            From choosing the best seats to seamless booking, we make sure your
            movie night starts the moment you open our app.
          </p>

          <div className="about-stats">
            <div>
              <h2>🎬</h2>
              <span>Latest Movies</span>
            </div>
            <div>
              <h2>💺</h2>
              <span>Smart Seat Selection</span>
            </div>
            <div>
              <h2>⚡</h2>
              <span>Fast Booking</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src="/landing2.png" alt="BingeHere" />
        </div>
      </section>
    </div>
  );
}
