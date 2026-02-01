import { useState, useEffect } from "react";

const banners = [
  // Hollywood
  "https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg", // Avengers
  "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg", // Avatar
  "https://image.tmdb.org/t/p/original/r7XifzvtezNt31ypvsmb6Oqxw49.jpg", // John Wick
  "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg", // Interstellar

  // Indian (Bollywood & South)
  "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg", // RRR
  "https://image.tmdb.org/t/p/original/z7A4jJtZ3Gx0NypQFvZb7BeMyrZ.jpg", // Jawan
  "https://image.tmdb.org/t/p/original/gPbM0MK8CP8A174rmUwGsADNYKD.jpg", // Pathaan
  "https://image.tmdb.org/t/p/original/1N3y7xG0zC2Vzz9vGvB9MvdnC5n.jpg", // KGF

  // Upcoming
  "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg", // Dune 2
  "https://image.tmdb.org/t/p/original/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg", // Deadpool 3
  "https://image.tmdb.org/t/p/original/z7A4jJtZ3Gx0NypQFvZb7BeMyrZ.jpg", // Indian upcoming style
];


const extended = [banners[banners.length - 1], ...banners, banners[0]];

const PromoCarousel = () => {
  // start from index 2 (so banners[1] is centered visually)
  const [index, setIndex] = useState(2);
  const [transition, setTransition] = useState(true);

  const slide = 60; // center width %

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extended.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <div className="w-full bg-[#f2f2f2] py-15">
      <div className="max-w-7xl mx-auto relative">

        {/* Viewport */}
        <div className="overflow-hidden px-[10%]">
          <div
            className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * slide}%)` }}
          >
            {extended.map((img, i) => (
              <div key={i} className="shrink-0 w-[60%] px-2">
                <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-black">
                  <img
                    src={img}
                    alt="banner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
        >
          ‹
        </button>

        {/* Right */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
        >
          ›
        </button>

      </div>
    </div>
  );
};

export default PromoCarousel;
