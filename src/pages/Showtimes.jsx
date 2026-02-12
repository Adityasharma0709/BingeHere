import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Showtimes.css";
import Footer from "./Footer";

export default function Showtimes() {
  const navigate = useNavigate();

  const dates = ["MON 02", "TUE 03", "WED 04", "THU 05", "FRI 06"];
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const theatreData = {
    "MON 02": [
      {
        name: "Cinepolis: Nexus Esplanade",
        location: "Bhubaneswar",
        shows: ["12:55 PM", "04:10 PM", "07:30 PM"],
      },
      {
        name: "INOX: DN Regalia Mall",
        location: "Bhubaneswar",
        shows: ["02:15 PM", "05:45 PM"],
      },
    ],
    "TUE 03": [
      {
        name: "PVR: Forum Mall",
        location: "Bhubaneswar",
        shows: ["11:30 AM", "03:00 PM", "08:15 PM", "10:45 PM"],
      },
    ],
    "WED 04": [
      {
        name: "INOX: DN Regalia Mall",
        location: "Bhubaneswar",
        shows: ["01:00 PM", "06:30 PM"],
      },
    ],
    "THU 05": [
      {
        name: "PVR: Esplanade",
        location: "Bhubaneswar",
        shows: ["10:45 AM", "02:30 PM", "07:00 PM"],
      },
    ],
    "FRI 06": [
      {
        name: "Cinepolis: Nexus Esplanade",
        location: "Bhubaneswar",
        shows: ["01:30 PM", "06:00 PM", "09:30 PM"],
      },
    ],
  };

  return (
    <div className="showtimes-page">
      {/* NAVBAR */}
      <nav className="showtimes-nav">
        <div className="logo">🍿 BingeHere</div>

        <div className="nav-search">
          <input placeholder="Search for Movies, Events, Plays..." />
        </div>

        <div className="nav-right">
          <select className="location-select">
            <option>Bhubaneswar</option>
            <option>Cuttack</option>
            <option>Kolkata</option>
          </select>

          <button className="sign-in-btn">Sign in</button>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {menuOpen && (
            <div className="hamburger-menu">
              <div className="menu-item">Movies</div>
              <div className="menu-item">Events</div>
              <div className="menu-item">Plays</div>
              <div className="menu-item">Sports</div>
              <div className="menu-divider"></div>
              <div className="menu-item">Offers</div>
              <div className="menu-item">Gift Cards</div>
            </div>
          )}
        </div>
      </nav>

      {/* MOVIE INFO */}
      <section className="movie-info">
        <h1>
          Marty Supreme <span>(English)</span>
        </h1>
        <div className="movie-tags">
          <span>2h 32m</span>
          <span>Comedy</span>
          <span>Drama</span>
          <span>Sports</span>
        </div>
      </section>

      {/* DATE BAR */}
      <section className="date-bar">
        {dates.map((date) => (
          <button
            key={date}
            className={date === selectedDate ? "date-btn active" : "date-btn"}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </section>

      {/* THEATRES */}
      <section className="theatre-list">
        {theatreData[selectedDate].map((theatre, idx) => (
          <div className="theatre-card" key={idx}>
            <div className="theatre-info">
              <h3>{theatre.name}</h3>
              <p>{theatre.location}</p>
            </div>

            <div className="showtimes">
              {theatre.shows.map((time) => (
                <button
                  key={time}
                  className="time-btn"
                  onClick={() =>
                    navigate("/seats", {
                      state: {
                        movie: "Marty Supreme",
                        language: "English",
                        theatre: theatre.name,
                        date: selectedDate,
                        time,
                      },
                    })
                  }
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
