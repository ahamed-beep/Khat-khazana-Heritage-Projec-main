import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state?.item;

  if (!item) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-red-600">⚠ No letter data found!</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-orange-500 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="font-serif text-black min-h-screen bg-[#fdfbf6]">
      {/* Top Banner */}
      <div className="bg-[#e75b1e] text-white py-6 text-center">
        <h2 className="text-sm uppercase tracking-widest">From the 1900s archive</h2>
        <h1 className="text-4xl font-bold mt-1">{item.title}</h1>
      </div>

      {/* Image and Caption */}
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <img
          src={item.img}
          alt={item.title}
          className="w-full border-4 border-black shadow-lg"
        />
        <p className="text-sm italic text-gray-600 mt-2">
          Photograph is for illustrative purposes only
        </p>

        {/* Description */}
        <div className="mt-6 text-[18px] leading-8 text-gray-800">
          <p className="mb-4">{item.content}</p>
          <p className="mb-6">{item.more}</p>
        </div>

        {/* Letter Box */}
        <div className="bg-[#f3f1e9] px-6 py-5 border-l-4 border-gray-600 shadow-md text-[17px] leading-7 font-[georgia] whitespace-pre-line">
          <p><strong>{item.date}</strong></p>
          <br />
          <p>Dear Reader,</p>
          <p className="mt-4">{item.content} {item.more}</p>
          <p className="mt-6">Sincerely, <br /> Unknown</p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#003366] text-white text-lg rounded hover:bg-[#001a33]"
          >
            ⬅ Go Back
          </button>
        </div>

        {/* Share Buttons (Dummy Icons) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-2">Share this letter:</p>
          <div className="flex justify-center gap-4">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">F</div>
            <div className="w-8 h-8 bg-sky-500 text-white flex items-center justify-center rounded-full">T</div>
            <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center rounded-full">G</div>
          </div>
        </div>

        {/* Related Articles (Fake for now) */}
        <div className="mt-16 border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-[#e75b1e]">Related Letters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-3 shadow-sm">
              <img src={item.img} alt="related" className="mb-2" />
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
            <div className="border p-3 shadow-sm">
              <img src={item.img} alt="related" className="mb-2" />
              <p className="text-sm font-semibold">Another Featured Letter</p>
            </div>
            <div className="border p-3 shadow-sm">
              <img src={item.img} alt="related" className="mb-2" />
              <p className="text-sm font-semibold">A Touching Farewell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
