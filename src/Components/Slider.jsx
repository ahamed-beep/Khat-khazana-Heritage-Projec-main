import React, { useEffect, useState } from "react";

const images = [
  "https://media.gettyimages.com/id/997586204/photo/engraving-depicting-a-family-enjoying-a-magic-lantern-show-the-apparatus-here-differs-little.jpg?s=612x612&w=gi&k=20&c=MrxFmymoC9Gj6PFA46sifMqcc8d55qEDkE8LrL_vfs8=",
  "https://media.istockphoto.com/id/1402736928/vector/bow-church-and-cheapside-in-1750-london-england.jpg?s=612x612&w=0&k=20&c=vl1PbvUco4EaHMptYU9YAB21re7LK-hYVONatMu6gho=",
  "https://media.gettyimages.com/id/188003240/photo/cases-of-tea-being-unloaded-from-a-china-clipper-at-the-london-docks-in-1868-from-lunivers.jpg?s=612x612&w=0&k=20&c=sDWT8nLMN6_vrEILVC0y6nk-k1sUzwDokban1ArJBb4=",
  "https://media.gettyimages.com/id/3325442/photo/a-plague-spot-near-the-london-gas-works-in-south-lambeth.jpg?s=612x612&w=0&k=20&c=yMyN_fM7vqL9HJQmQnywlpGF6KEj12WTBz6ZPCRljQ8="
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 7000); // Change every 7s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-[60px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full flex-shrink-0 object-cover object-center h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-opacity-30 text-black p-2 rounded-full hover:bg-opacity-60 z-10"
        aria-label="Previous"
      >
        <span className="text-2xl">&#10094;</span>
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-opacity-30 text-black p-2 rounded-full hover:bg-opacity-60 z-10"
        aria-label="Next"
      >
        <span className="text-2xl">&#10095;</span>
      </button>
    </div>
  );
};

export default Slider;