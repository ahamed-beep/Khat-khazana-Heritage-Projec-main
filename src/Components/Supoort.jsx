import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router';
import Nax from './Nax';
const HathiwalasPage = () => {
  return (
    <div>
        <Nax/>
        <div className='flex flex-col md:flex md:flex-row items-center md:items-start  justify-center md:gap-10 mx-10 md:mx-0 mb-10  '>
        
          <div className="w-full max-w-sm px-4 py-6 space-y-8 ml-10 hidden md:block   ">
      <div>
        <label className="block uppercase text-sm font-semibold  text-gray-700 border-l-2 border-yellow-500 pl-2 mb-4">
          Language
        </label>
        <select className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none mb-4">
          <option>English</option>
        </select>
        <p className="text-xs text-gray-500 mt-1 italic">
          All translations are machine generated, hence are not 100% accurate.
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
        />
      </div>

      <div>
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          / The Past is Present
        </p>
        <hr className="mt-1 border-t-2 border-black w-2/3" />
      </div>

      <div className="bg-yellow-100 p-4 text-sm text-gray-800 rounded">
        <p>
          Founded in 2010, Indian Memory Project is an online archive that traces
          the history of the Indian Subcontinent via images and stories contributed
          by people around the world.
        </p>
        <p className="mt-2">
          While no images or text can be used without permissions, everyone is free
          to read and share narratives links. We hope you enjoy this archive as much
          as we do.
        </p>
      </div>

      <div>
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          Support the Project
        </p>
        <hr className="mt-1 border-t-2 border-black w-2/3" />

        <div className="my-4">
          <img
            src="https://thumbs.dreamstime.com/b/exploration-slavic-symbol-amidst-ancient-patterns-mystical-designs-generative-ai-captivating-stylization-captures-384001996.jpg" 
            alt="Support"
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm text-gray-800">
          For 14 years, Indian Memory Project has remained ad-free and relies on
          personal funds, and your patronage to collect and share stories of the
          subcontinent far and wide. Please consider offering us your patronage in
          any amount you like.{" "}
          <Link to='/productlist' className="font-semibold text-yellow-900 cursor-pointer underline">
            Please Consider Purchasing Our Merchandise
          </Link>
        </p>
      </div>

      <div>
        <hr className="my-3 border-t-2 border-black w-2/3" />
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          Directory of Archives
        </p>

        <div className="my-4">
          <img
            src="https://thumbs.dreamstime.com/b/symbolic-representation-slavic-heritage-artistic-design-craftsmanship-generative-ai-ornate-stylization-symbol-384002094.jpg" 
            alt="Directory"
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm text-gray-800">
          An updateable list of public and private archives, and museums around the
          world with collections about the Indian Subcontinent.
        </p>
      </div>
    </div>
    <div className=''>
        <div className="bg-white flex flex-col items-center justify-center">
      <div className="bg-white flex items-center mt-10 justify-center">
        <div className="max-w-3xl w-full overflow-hidden bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-yellow-800 mb-4 text-left">
              The Forgotten Hathiwalas Of Surat
            </h1>
            <img
              src="https://c8.alamy.com/comp/J3T2KD/the-kashmiri-people-in-the-early-1900s-were-part-of-the-rich-cultural-J3T2KD.jpg"
              alt="Vintage family photograph circa 1900"
              className="mx-auto w-full h-full"
            />
          </div>
           <div className="max-w-3xl w-full overflow-hidden bg-white ">
      
          <p className="text-gray-800 mt-4">
        A few years ago, while I was trying to piece together my extended Surati Bohra (Dawoodi Bohras from Surat, Gujarat) family tree, I chanced upon a few photographs that had lain forgotten between photo album sheets for over a century. Photographed circa 1904, this picture could very well be one of the oldest family treasures we have, and it took me some time to ascertain who the people in these photographs were. That little girl in the photograph is my paternal grandmother Kulsum Bengaliwala (née Hathiwala), and the adults are her parents – my great-grandparents. But we didn’t know their names, and even my father’s sister, my aunt, couldn’t remember.
          </p>
          <button className="bg-white border border-gray-300 text-sm px-4 py-2 mt-6 rounded hover:bg-gray-100 transition inline-flex items-center">
            Continue Reading <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        
        </div>
        </div>
      </div>

      <div className="bg-white flex items-center mt-10 justify-center">
        <div className="max-w-3xl w-full overflow-hidden bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-yellow-800 mb-4 text-left">
              “I Am A Refugee In Love!”
            </h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Old_heritage_in_lahore_-_Lahore_Fort.jpg/1200px-Old_heritage_in_lahore_-_Lahore_Fort.jpg"
              alt="I Am A Refugee In Love"
              className="mx-auto w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center mt-10 justify-center">
        <div className="max-w-3xl w-full overflow-hidden bg-white ">
          <p className="text-gray-500 mt-6">
            My paternal grandparents - Kewal Krishan, and Reva Puri (nee Barbara Dorothy Reynolds). Calcutta (now Kolkata), West Bengal. 1968
          </p>
          <p className="text-gray-800 mt-4">
            This is a photograph of my paternal grandparents Kewal Krishan Puri and Reva Puri whom I call Dadu and Granny, taken at the Bombay Photo Stores Pvt. Ltd Studio in Calcutta, (Kolkata), West Bengal. My granny’s maiden name was Barbara Dorothy Reynolds, and my Dadu was devoted to her. This is their love story.
          </p>
          <button className="bg-white border border-gray-300 text-sm px-4 py-2 mt-6 rounded hover:bg-gray-100 transition inline-flex items-center">
            Continue Reading <ArrowRight className="w-4 h-4 ml-2" />
          </button>
       
        </div>
      </div>
    </div>
    
    
    </div>
    
              <div className="w-full max-w-sm px-4 py-6 space-y-8 ml-10  block md:hidden   ">
      <div>
        <label className="block uppercase text-sm font-semibold  text-gray-700 border-l-2 border-yellow-500 pl-2 mb-4">
          Language
        </label>
        <select className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none mb-4">
          <option>English</option>
        </select>
        <p className="text-xs text-gray-500 mt-1 italic">
          All translations are machine generated, hence are not 100% accurate.
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
        />
      </div>

      <div>
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          / The Past is Present
        </p>
        <hr className="mt-1 border-t-2 border-black w-2/3" />
      </div>

      <div className="bg-yellow-100 p-4 text-sm text-gray-800 rounded">
        <p>
          Founded in 2010, Indian Memory Project is an online archive that traces
          the history of the Indian Subcontinent via images and stories contributed
          by people around the world.
        </p>
        <p className="mt-2">
          While no images or text can be used without permissions, everyone is free
          to read and share narratives links. We hope you enjoy this archive as much
          as we do.
        </p>
      </div>

      <div>
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          Support the Project
        </p>
        <hr className="mt-1 border-t-2 border-black w-2/3" />

        <div className="my-4">
          <img
            src="https://thumbs.dreamstime.com/b/exploration-slavic-symbol-amidst-ancient-patterns-mystical-designs-generative-ai-captivating-stylization-captures-384001996.jpg" 
            alt="Support"
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm text-gray-800">
          For 14 years, Indian Memory Project has remained ad-free and relies on
          personal funds, and your patronage to collect and share stories of the
          subcontinent far and wide. Please consider offering us your patronage in
          any amount you like.{" "}
          <Link to='/productlist' className="font-semibold text-yellow-900 cursor-pointer underline">
            Please Consider Purchasing Our Merchandise
          </Link>
        </p>
      </div>

      <div>
        <hr className="my-3 border-t-2 border-black w-2/3" />
        <p className="uppercase text-sm tracking-widest font-semibold text-gray-600 border-l-2 border-yellow-500 pl-2">
          Directory of Archives
        </p>

        <div className="my-4">
          <img
            src="https://thumbs.dreamstime.com/b/symbolic-representation-slavic-heritage-artistic-design-craftsmanship-generative-ai-ornate-stylization-symbol-384002094.jpg" 
            alt="Directory"
            className="w-full object-contain"
          />
        </div>

        <p className="text-sm text-gray-800">
          An updateable list of public and private archives, and museums around the
          world with collections about the Indian Subcontinent.
        </p>
      </div>
    </div>
   
    <div>
        <div className="bg-white mr-10 flex flex-col items-start mt-12 px-6 w-full max-w-xs text-sm">
  <div className=" mb-6">
    <h2 className=" pl-3  border-l-2 border-yellow-600 uppercase text-gray-800 font-semibold tracking-wide">Guidelines</h2>
    <ul className="list-disc list-inside space-y-3 text-gray-800 mt-5">
            <li>Image rights belong to the guardian/s of the photograph.</li>
            <li>Text rights belong to Indian Memory Project / The Memory Company, unless stated otherwise.</li>
            <li>No images or text can be used for any reason whatsoever, without prior permission</li>
            <li>Any unauthorised use will lead to prompt legal action</li>
            <li>
              For Permissions please <span className="underline cursor-pointer">email here</span>
            </li>
          </ul>
  </div>

  <div className=" mb-6 w-full">
    <h2 className=" border-l-2 border-yellow-600 pl-3 uppercase text-gray-800 font-semibold tracking-wide">Subjects</h2>
    <select className="mt-2 w-full border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm">
      <option>Select Category</option>
    </select>
  </div>

  <div className="border-l-2 border-yellow-600 pl-3">
    <h2 className="uppercase text-gray-800 font-semibold tracking-wide">Popular Tags</h2>
  </div>
  <div className="w-full max-w-xs px-4 text-[13px] leading-relaxed font-sans">
  <div className="mb-10">
    <div className="border-l-2 border-yellow-600 pl-2 mb-4">
      <h2 className="uppercase font-bold text-[11px] tracking-wider">Guidelines</h2>
    </div>
    <ul className="list-disc list-inside space-y-3 text-gray-800">
      <li>Image rights belong to the guardian/s of the photograph.</li>
      <li>Text rights belong to Indian Memory Project / The Memory Company, unless stated otherwise.</li>
      <li>No images or text can be used for any reason whatsoever, without prior permission</li>
      <li>Any unauthorised use will lead to prompt legal action</li>
      <li>
        For Permissions please <span className="underline cursor-pointer">email here</span>
      </li>
    </ul>
  </div>

  <div className="mb-10">
    <div className="border-l-2 border-yellow-600 pl-2 mb-2">
      <h2 className="uppercase font-bold text-[11px] tracking-wider">Subjects</h2>
    </div>
    <select className="border border-gray-300 text-gray-800 text-sm w-full py-1 px-2 rounded">
      <option>Select Category</option>
    </select>
  </div>

 <div className="border-l-2 border-yellow-600 pl-2 mb-4">
  <h2 className="uppercase font-bold text-[11px] tracking-wider">Popular Tags</h2>
</div>
<div className="text-yellow-800 text-[13px] leading-snug font-medium flex flex-wrap gap-x-4 gap-y-2">
  <span>1920</span>
  <span>1930</span>
  <span className="text-[17px] font-bold">1940</span>
  <span>1947</span>
  <span>India</span>
  <span>Pakistan</span>
  <span>Partition</span>
  <span>1950s</span>
  <span>1960s</span>
  <span>1970s</span>
  <span>Bangalore</span>
  <span className="text-lg font-semibold">Bombay</span>
  <span>British Empire</span>
  <span>Calcutta</span>
  <span>Couple</span>
  <span>Delhi</span>
  <span>Doctor</span>
  <span className="text-lg font-semibold">Education</span>
  <span>Fashion & Trends</span>
  <span>Gujarat</span>
  <span className="text-lg font-semibold">Hair Styles</span>
  <span>Head Gear</span>
  <span>Hyderabad</span>
  <span>Indian Politics</span>
  <span>Jewellery</span>
  <span>Kolkata</span>
  <span>Lahore</span>
  <span className="text-lg font-semibold">Maharashtra</span>
  <span>Marriage</span>
  <span>Men's Clothes</span>
  <span className="text-xl font-bold">Migration</span>
  <span>Mumbai</span>
  <span>Muslim</span>
  <span className="text-lg font-semibold">Pakistan</span>
  <span>Partition</span>
</div>
   <div className="mt-10">
              <hr className="border-black w-30 border-1 mx-auto mb-5"  />
    
          <div className="border-l-2 border-yellow-600 pl-2 mb-3">
            <h2 className="uppercase font-bold text-[11px] tracking-wider">Interactive Timeline</h2>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwDna5CVJMDpa0ldQubXRosmUZi8k6Kw-dA&s"
            alt="Interactive Timeline"
            className="w-full h-auto mb-6"
          />
          <hr className="border-black w-30 border-1 mx-auto" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Photograph_of_an_Indian_miniature_painting_depicting_Aram_Shah_of_the_Mamluk_Sultanate%2C_published_in_%27Tawarikh-i-Ghuri%27_by_Munshi_Bulaqi_Das_Sahib_%281881%29.jpg"
            alt="Send In Your Family Story"
            className="w-full h-auto mt-6"
          />
        </div>

</div>

</div>

    </div>
    </div>
<footer class="bg-[#DECEA7] text-black">
  <div class="max-w-screen-xl mx-auto px-4 py-8 flex flex-col sm:items-center md:items-start">
    <h2 class="uppercase text-sm font-semibold tracking-wider border-l-2 border-yellow-800 pl-2 mb-2">Concept & Design</h2>
    <p class="text-sm">Anusha Yadav, India / UK</p>
  </div>

  <div class="bg-black text-white text-xs py-4 px-4">
    <div class="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
      <div class="text-center sm:text-left">
        <p class="text-[11px]">
          ALL RIGHTS RESERVED © ANUSHA YADAV / THE MEMORY COMPANY |
          <span class="text-[#8cd0f7]">INDIA</span>. 2010 - 2025
        </p>
      </div>
      <div class="text-center sm:text-right space-x-2 text-[11px]">
        <a href="#" class="text-[#8cd0f7] font-bold">ANUSHA YADAV</a> |
        <a href="#" class="text-[#8cd0f7]">PRIVACY POLICY</a> |
        <a href="#" class="text-[#8cd0f7]">TERMS OF SERVICE</a> |
        <a href="#" class="text-[#8cd0f7]">CONTACT</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HathiwalasPage;