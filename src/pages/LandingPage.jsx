import "./css/LandingPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  /* ---------------- REGEX ---------------- */
 const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const nameRegex = /^[A-Za-z ]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  /* ---------------- LOGIN ---------------- */
  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!usernameRegex.test(username)) {
      alert("❌ Invalid username (min 10 characters)");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("❌ Password must be at least 6 characters & contain a number");
      return;
    }

    alert("✅ Login Successful!");
    setIsModalOpen(false);
  };

  /* ---------------- REGISTER ---------------- */
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.fullname.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!nameRegex.test(name)) {
      alert("❌ Name should contain only letters");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("❌ Invalid phone number");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("❌ Invalid email address");
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      alert("❌ Password must be 8+ chars with letters & numbers");
      return;
    }

    alert("✅ Registration Successful!");
    setIsRegisterOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-(--apnabackground) overflow-x-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-4">
          <div className="flex items-center gap-2 text-white px-4 py-2 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0f172a] to-[#334155]">
            <div className="w-6 h-6 grid place-items-center rounded-lg bg-white/20">
              <img src="/fav-removebg.png" alt="logo" />
            </div>
            <span>BingeHere</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/about"
              className="text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 pt-6 pb-12 gap-10 items-center">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-[38px] md:text-[64px] font-extrabold text-[#b0b0b4]">
              MOVIE <br /> BOOKING
            </h1>

            <div className="mt-7 hidden md:flex gap-4">
              <button
                className="px-8 py-3 rounded-full bg-[#b91c1c] text-white font-bold text-xs"
                onClick={() => setIsModalOpen(true)}
              >
                LOG IN
              </button>
              <button
                className="px-8 py-3 rounded-full bg-[#1f2937] text-white font-bold text-xs"
                onClick={() => setIsRegisterOpen(true)}
              >
                REGISTER
              </button>
            </div>
          </div>

          {/* LOGIN MODAL */}
          {isModalOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="modal-content slide-down"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-icon"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
                <h2>Login</h2>

                <form className="vertical-form" onSubmit={handleLogin}>
                  <input name="username" placeholder="Username" required />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button type="submit">Sign In</button>
                </form>
              </div>
            </div>
          )}

          {/* REGISTER MODAL */}
          {isRegisterOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsRegisterOpen(false)}
            >
              <div
                className="modal-content slide-down"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-icon"
                  onClick={() => setIsRegisterOpen(false)}
                >
                  &times;
                </button>
                <h2>Register</h2>

                <form className="vertical-form" onSubmit={handleRegister}>
                  <input name="fullname" placeholder="Full Name" required />
                  <input name="phone" placeholder="Phone Number" required />
                  <input name="email" placeholder="Email" required />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button type="submit">Create Account</button>
                </form>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <img src="/landing2.png" alt="hero" className="max-w-[520px]" />
          </div>
        </section>
      </div>
    </div>
  );
}
