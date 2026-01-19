
export default function App() {
  return (
    <div className="min-h-screen grid place-items-center px-6 py-6 bg-gradient-to-tr from-[#dbe7ff] via-[#eaf5ff] to-[#dff2ff]">

      {/* Main Card */}
      <div className="relative w-[95vw] max-w-[1100px] h-[90vh] max-h-[620px] bg-[#eef2ff] rounded-[26px] shadow-[0_18px_50px_rgba(0,0,0,0.18)] overflow-hidden">

        {/* Background Shapes */}
        <div className="absolute -left-[120px] -top-[120px] w-[520px] h-[520px] bg-white/80 rounded-full blur-[1px]" />

        <div className="absolute -right-[200px] -bottom-[180px] w-[650px] h-[650px] bg-[#1d2b44] rounded-full opacity-85" />

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white px-5 py-3 rounded-[14px] font-bold text-sm tracking-wide bg-gradient-to-r from-[#0f172a] to-[#334155]">
            <div className="w-7 h-7 grid place-items-center rounded-[8px] bg-white/20">
              ◆
            </div>
            <span>YOUR WEBSITE</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-7">
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
              About
            </a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
              Service
            </a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
              Contact Us
            </a>

            {/* Search */}
            <div className="flex items-center bg-slate-50 px-4 py-2 rounded-2xl w-[220px] shadow-inner border border-black/5">
              <input
                className="w-full bg-transparent outline-none text-sm"
                placeholder="Search Movie"
              />
              <span className="opacity-70">🔍</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 h-[calc(100%-80px)] grid grid-cols-2 px-8 py-5">

          {/* Left */}
          <div className="flex flex-col justify-start pt-8">
            <h1 className="text-[58px] leading-[0.95] tracking-wide font-extrabold text-[#0f172a]">
              MOVIE <br /> BOOKING
            </h1>

            <p className="mt-5 max-w-[420px] text-slate-500 text-sm leading-relaxed">
              Book your favorite movies in seconds! Discover the latest releases,
              pick your seats, and enjoy a smooth ticket booking experience — anytime,
              anywhere.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="px-7 py-2.5 rounded-full bg-[#b91c1c] text-white font-bold text-xs hover:opacity-90">
                LOG IN
              </button>
              <button className="px-7 py-2.5 rounded-full bg-[#1f2937] text-white font-bold text-xs hover:opacity-90">
                REGISTER
              </button>
            </div>

            {/* Dots */}
            <div className="mt-14 flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0f172a]" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 opacity-60" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 opacity-60" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 opacity-60" />
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center items-start">
            <img
              src="/landing2.png"
              alt="hero"
              className="w-full max-w-[600px] -mt-12"
            />
          </div>
        </section>
      </div>
    </div>
  );
}