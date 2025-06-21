import React, { useState, useEffect } from "react";
import Nax from "./Nax";
import { useDispatch, useSelector } from "react-redux";
import { contactsubmitdata } from "./Redux/contact";


const Contactus = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactsubmitdata(formData));
  };

  return (
    <div>
      <Nax />
      <div className="bg-white py-20 px-4 min-h-screen flex justify-center">
        <div className="w-full max-w-[700px]">
          <h1 className="text-[23px] font-bold uppercase tracking-wide mb-6 text-center">CONTACT US</h1>

          {error && (
            <div className="mb-6 text-red-700 bg-red-100 border border-red-400 px-4 py-3 rounded text-center text-[14px]">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 text-green-700 bg-green-100 border border-green-400 px-4 py-3 rounded text-center text-[14px]">
              Your message has been successfully sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="flex-1 border border-black px-4 py-3 text-[14px] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="flex-1 border border-black px-4 py-3 text-[14px] focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-black px-4 py-3 text-[14px] focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full h-12 ${loading ? "bg-gray-500" : "bg-[#B98940] hover:bg-black"} text-white text-[16px] font-semibold uppercase tracking-wider transition`}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
