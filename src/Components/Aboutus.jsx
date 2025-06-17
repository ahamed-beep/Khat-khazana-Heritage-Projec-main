import React, { useState, useEffect } from "react";
import Nax from "./Nax";

const timelineData = [
  {
    year: "1950",
    image: "Images/heritage1.jpg",
    text: "The Pakistani/Kashmiri community began arriving in Leeds as young economic migrants.",
  },
  {
    year: "1960",
    image: "Images/heritage2.webp",
    text: "These early settlers contributed significantly to the city’s economy and community.",
  },
  {
    year: "Mid 60s",
    image: "Images/heritage3.webp",
    text: "Community institutions began to form, preserving heritage while adapting to modern life.",
  },
  {
    year: "1960",
    image: "Images/heritage4.webp",
    text: "These early settlers contributed significantly to the city’s economy and community.",
  },
  {
    year: "Mid 70s",
    image: "Images/heritage5.jpg",
    text: "Community institutions began to form, preserving heritage while adapting to modern life.",
  },
];

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 bg-white text-purple-600 p-3 rounded-full shadow-md hover:bg-purple-100 transition-opacity duration-500 z-50
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ width: "48px", height: "48px" }}
    >
      {/* SVG Up Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6 mx-auto"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
<Nax/>

   
    <div className="relative ">
      {/* Banner */}
      <div className="relative w-full overflow-hidden h-[250px] md:h-[400px]">
        <img
          src="https://www.puraniyaadein.co.uk/wp-content/uploads/2020/10/leeds-1500x630.jpg"
          alt="Leeds City View"
          className="w-full h-full object-cover"
        />
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon fill="#c084fc" points="0,10 100,0 100,10" />
        </svg>
      </div>

      {/* About Section */}
      <div className="bg-purple-400 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">ABOUT US</h2>
        <p className="max-w-4xl mx-auto mb-6">
          Leeds Muslim Youth Forum is an organisation that supports young people by providing opportunities
          for growth, learning, and leadership.
        </p>
        <p className="max-w-4xl mx-auto">
          We do this by enrolling, supporting and training young people to create positive changes in
          their community while preserving cultural heritage.
        </p>

        {/* WHY IT IS NEEDED */}
        <div className="bg-purple-500 text-white max-w-4xl mx-auto mt-16 p-8 rounded-md shadow-xl border border-purple-300 text-left">
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2 mb-4">Why it is Needed</h3>
          <p className="mb-4">
            Through this project we as young people were attempting to retain this history in the form of stories, film, archives and memorabilia and cascade this to our peer group and other sections of the community.<br />In charting this history, we aim to give our community the knowledge and confidence to be proud of their heritage while still being confidently immersed in modern society today.<br />The project is therefore one which is important to the older generations from within the target community as well as the second, third and fourth generation who need to be made aware of this heritage. It will also be of interest to the wider and non-Asian communities in recognising this aspect of local history in Leeds.
          </p>
          <h3 className="text-xl font-semibold border-b border-white/30 pb-2 mb-4">The Story</h3>
          <p>
            Looking back over sixty years the initiative, explores the arrival of the Pakistani / Kashmiri community who first arrived in the Leeds area in meaningful numbers in the 1950s and 1960s, largely as young economic migrants. Having resided in the city for over six decades, with many now elderly or sadly deceased we recall their lived experiences. Thus, helping to avoid eroding the rich history of their contribution to the city, to the development of their communities and their influence on later generations.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          {/* Mobile Slider */}
          <div className="md:hidden relative max-w-xs mx-auto">
            <div className="p-6 rounded-xl bg-purple-500 shadow-xl text-center relative border border-white/30">
              {/* Year */}
              <div className="text-2xl font-extrabold text-white mb-4">
                {timelineData[currentIndex].year}
              </div>

              {/* Circular Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={timelineData[currentIndex].image}
                  alt={timelineData[currentIndex].year}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed">
                {timelineData[currentIndex].text}
              </p>

              {/* Arrow Buttons (Bottom Right) */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={handlePrev}
                  className=" text-purple-600 p-2 rounded-full shadow-md hover:bg-purple-100 transition"
                >
                  ◀
                </button>
                <button
                  onClick={handleNext}
                  className="text-purple-600 p-2 rounded-full shadow-md hover:bg-purple-100 transition"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 relative mt-20">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-1/5 relative z-10">
                {/* Left horizontal line (except for first item) */}
                {index !== 0 && (
                  <div className="absolute top-1/2 left-0 w-1/2 border-t-2 border-white/60 z-0"></div>
                )}

                {/* Right horizontal line (except for last item) */}
                {index !== timelineData.length - 1 && (
                  <div className="absolute top-1/2 right-0 w-1/2 border-t-2 border-white/60 z-0"></div>
                )}

                {/* Year */}
                <div className="text-md text-center font-bold text-white leading-none relative left-4">
                  {item.year}
                </div>

                {/* Dot below year */}
                <div className="w-1 h-1 bg-white rounded-full mt-1"></div>

                {/* Connector from year to image */}
                <div className="w-0.5 h-12 bg-white/60"></div>

                {/* Image */}
                <div className="relative z-10 bg-white border-2 border-white shadow-md rounded-full w-24 h-24 overflow-hidden">
                  <img src={item.image} alt={item.year} className="w-full h-full object-cover" />
                </div>

                {/* Connector from image to text */}
                <div className="w-0.5 h-9 bg-white/60"></div>

                {/* Dot below image */}
                <div className="w-1 h-1 bg-white rounded-full mt-1"></div>

                {/* Text */}
                <div className="mt-1 text-sm text-center font-bold text-white min-h-[48px] relative left-4">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
     </div>
  );
};

export default AboutUs;