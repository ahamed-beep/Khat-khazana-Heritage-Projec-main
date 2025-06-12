import React from 'react';

const Slider = () => {
  return (
    <div className="w-full mt-[60px]">
      <div className="carousel w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
        
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://media.gettyimages.com/id/997586204/photo/engraving-depicting-a-family-enjoying-a-magic-lantern-show-the-apparatus-here-differs-little.jpg?s=612x612&w=gi&k=20&c=MrxFmymoC9Gj6PFA46sifMqcc8d55qEDkE8LrL_vfs8="
            className="w-full h-full object-cover object-center"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src="https://media.istockphoto.com/id/1402736928/vector/bow-church-and-cheapside-in-1750-london-england.jpg?s=612x612&w=0&k=20&c=vl1PbvUco4EaHMptYU9YAB21re7LK-hYVONatMu6gho="
            className="w-full h-full object-cover object-center"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src="https://media.gettyimages.com/id/188003240/photo/cases-of-tea-being-unloaded-from-a-china-clipper-at-the-london-docks-in-1868-from-lunivers.jpg?s=612x612&w=0&k=20&c=sDWT8nLMN6_vrEILVC0y6nk-k1sUzwDokban1ArJBb4="
            className="w-full h-full object-cover object-center"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full h-full">
          <img
            src="https://media.gettyimages.com/id/3325442/photo/a-plague-spot-near-the-london-gas-works-in-south-lambeth.jpg?s=612x612&w=0&k=20&c=yMyN_fM7vqL9HJQmQnywlpGF6KEj12WTBz6ZPCRljQ8="
            className="w-full h-full object-cover object-center"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Slider;
