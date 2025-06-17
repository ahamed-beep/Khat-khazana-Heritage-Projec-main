import React from 'react';
import { Link } from 'react-router';
import Nax from './Nax';

const ProductList = () => {
  return (
    <div>
        <Nax/>
<section class="bg-[#ec572f] text-white mx-auto mt-10 max-w-6xl px-4 relative overflow-hidden">
  <div class="px-4 py-12 flex flex-col md:flex-row justify-center items-center relative z-10">
    
    <div class="md:w-1/2 z-10 md:ml-10">
      <h1 class="text-4xl md:text-5xl font-light mb-8">Ernest Hemingway Print</h1>
      <p class="leading-relaxed mb-4 text-white font-semibold text-lg">
        Limited edition Letters of Note print designed by Stanley Chow, featuring a quote from an Ernest Hemingway letter to F. Scott Fitzgerald:
      </p>
      <blockquote class="italic mb-6 font-semibold text-lg">
        “I write one page of masterpiece to ninety one pages of shit. I try to put the shit in the wastebasket.”
      </blockquote>
      <Link to="/productview" class="bg-black text-white font-bold px-5 py-3 text-base tracking-wide inline-block">
        Buy a print
      </Link>
    </div>

    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-end">
      <img src="https://i0.wp.com/lettersofnote.com/wp-content/uploads/2023/03/hem1.jpeg?resize=768%2C1086&ssl=1"
           alt="Ernest Hemingway Print"
           class="shadow-xl max-w-[300px]" />
    </div>
  </div>
<div class="absolute bottom-[-40px] left-[-10px] w-[110%] h-33 bg-white transform rotate-[-2deg] origin-bottom-left z-0"></div>


</section>
    <div className="font-serif bg-white text-black min-h-screen">
      {/* Header */}
      <header className="flex justify-between ml-10 items-center px-10 pt-10">
        <h1 className="text-4xl  font-medium">Letters</h1>
        <nav className="space-x-6">
          <a href="#" className="text-[#d35400] font-bold hover:underline">
            Most Read
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-[#d35400] font-bold hover:underline">
            Surprise Me
          </a>
        </nav>
      </header>

      {/* Dividers */}
      

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 pt-6">
        {/* Card 1 */}
       <div className="flex flex-col items-center text-center max-w-md mx-auto">
  <div className="text-md italic font-semibold mb-3">
        <hr className="my-3 border-t-4 border-black w-130" />

    Saturday, 11 February 2023
           <hr className="my-3 border-t-2 border-black w-130" />

  </div>
  <h2 className=" text-3xl text-[#e75b1e] font-bold mb-4 leading-snug">
    Please don’t let anyone <br /> Americanise it!
  </h2>
  <img
    src="https://i.pinimg.com/736x/42/d8/66/42d866f2f4c48736e1ecdb958cfc21fa.jpg"
    alt="Author"
    className="w-full "
  />
  <p className="mt-4 text-xl text-left text-gray-900 text-base leading-relaxed">
    Born in Cambridge in 1952, Douglas Adams was best known for creating
    The Hitchhiker’s Guide to the Galaxy, a wildly successful project that
    began in 1978 as a science-fiction comedy radio series and eventually
    evolved to become something much larger, in many formats and in many
    languages, adored by many millions of people around the world.
  </p>
   <div className="mt-4">
    <button className="bg-[#e75b1e] text-white font-bold px-6 py-4 mt-8  tracking-wide">
      read
    </button>
  </div>
</div>

        {/* Card 2 */}
       <div className="flex flex-col items-center text-center max-w-md mx-auto">
  <div className="text-md italic font-semibold mb-3">
        <hr className="my-3 border-t-4 border-black w-130" />

    Thursday, 12 January 2023
           <hr className="my-3 border-t-2 border-black w-130" />

  </div>
  <h2 className=" text-3xl text-[#e75b1e] font-bold mb-4 leading-snug">
    Into Eternity
  </h2>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ALC1qg6I7Bocc8ogIeOnjOBxkmtH0zAlWg&s"
    alt="Letter"
    className="w-full border-4 border-black"
  />
  <p className="mt-4 text-left text-xl text-gray-900 leading-relaxed">
    Born in the Czech Republic in 1904, Vilma Grünwald was 39 years old when
    she wrote a final letter to her husband, Kurt. They had been held at
    Auschwitz with their two sons for 7 months, separated for much of their
    ordeal following a stint in a “family camp” that was soon dismantled by the
  </p>
  <div className="mt-4">
    <button className="bg-[#e75b1e] text-white font-bold px-6 py-4 mt-8  tracking-wide">
      read
    </button>
  </div>
</div>
       <div className="flex flex-col items-center text-center max-w-md mx-auto">
  <div className="text-md italic font-semibold mb-3">
        <hr className="my-3 border-t-4 border-black w-130" />

   Tuesday, 06 December 2022
           <hr className="my-3 border-t-2 border-black w-130" />

  </div>
  <h2 className=" text-3xl text-[#e75b1e] font-bold mb-4 leading-snug">
   I miss you so very much, Ryan
  </h2>
  <img
    src="https://www.shutterstock.com/image-illustration/spencerian-steel-pens-chromolithograph-vintage-260nw-2521264727.jpg"
    alt="Author"
    className="w-full "
  />
  <p className="mt-4 text-xl text-left text-gray-900  leading-relaxed">
   In December of 1984, 13-year-old Ryan White was given 6 months to live after contracting AIDS during a contaminated treatment for hemophilia, a blood condition with which he had lived since birth. By June of 1985, keen to resume as normal a lifestyle as possible, Ryan attempted to return to school; however, due to ignorance


  </p>
   <div className="mt-4">
    <button className="bg-[#e75b1e] text-white font-bold px-6 py-4 mt-8  tracking-wide">
      read
    </button>
  </div>
</div>

        {/* Card 2 */}
       <div className="flex flex-col items-center text-center max-w-md mx-auto">
  <div className="text-md italic font-semibold mb-3">
        <hr className="my-3 border-t-4 border-black w-130" />

 Tuesday, 05 October 2021
           <hr className="my-3 border-t-2 border-black w-130" />

  </div>
  <h2 className=" text-3xl text-[#e75b1e] font-bold mb-4 leading-snug">
   Never get a bulldog
  </h2>
  <img
    src="https://i0.wp.com/lettersofnote.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-05-at-17.04.27.png?w=460&ssl=1"
    alt="Letter"
    className="w-full border-4 border-black"
  />
  <p className="mt-4 text-left text-xl text-gray-900 leading-relaxed">
   When he wrote this letter to his mother in 1944, Roald Dahl was working at the British Embassy in Washington, D.C.—one of hundreds of undercover agents employed by Britain’s MI6 foreign intelligence service to spy on the United States. Dahl’s debut novel, The Gremlins, had been published the year before, and it would be another
  </p>
  <div className="mt-4">
    <button className="bg-[#e75b1e] text-white font-bold px-6 py-4 mt-8  tracking-wide">
      read
    </button>
  </div>
</div>
      </div>
      {/* Footer Section - Twitter and Newsletter */}
<div className="flex flex-col md:flex-row justify-between mt-20 mb-10 px-4 md:px-10 gap-10">
  {/* Twitter Section */}
  <div className="bg-[#f8f6f1] p-10 flex-1">
    <h3 className="text-3xl font-light mb-4">Twitter</h3>
    <a href="#" className="text-blue-600 underline text-lg">My Tweets</a>
  </div>

  {/* Newsletter Section */}
  <div className="flex-1">
    <h3 className=" text-4xl mb-4 py-2">Letters of Note in your<br/> inbox</h3>
    <div className="bg-[#fef3ea] p-8">
      <div className="text-center">
        <img
          src="https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6f08c121-b0ba-454e-bae3-61c44be6926d_306x306.png"
          alt="Seal Logo"
          className="mx-auto mb-2  rounded-xl"
          style={{ width: 40, height: 40 }}
        />
        <h4 className=" text-2xl font-bold underline">Letters of Note</h4>
        <p className="text-sm mt-1 mb-4">
          Nothing but history's most interesting letters.<br />By Shaun Usher
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Type your email..."
            className="border border-orange-300  rounded-l-lg px-4 py-2 w-64 text-black"
          />
          <button className="bg-[#f26322] text-white px-4 py-2 rounded-r-lg ">
            Subscribe
          </button>
        </div>
        <p className="text-xs mt-6 text-gray-600">
          By subscribing you agree to <a href="#" className="underline">Substack’s Terms of Use</a>, <a href="#" className="underline">our Privacy Policy</a> and <a href="#" className="underline">our information collection notice</a>
        </p>
      </div>
    </div>
  </div>
</div>

    </div>







    </div>
  );
};

export default ProductList;
