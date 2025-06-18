import React, { useState } from "react";
import Nax from "./Nax";



const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };
  return (
    <div>
   <Nax/>
      <div className="bg-white py-20 px-4 min-h-screen flex justify-center">
      <div className="w-full max-w-[700px]">
        {/* Heading & Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-[23px] font-bold uppercase tracking-wide mb-6">
            CONTACT US
          </h1>
          <p className="text-[16px] leading-relaxed text-black">
            Have any more questions? Please check our{" "}
            <span  className="text-[#f4b813] underline hover:text-black">
                         FAQ
                              </span>{" "}
            for information on License, Usage, Installing your fonts. 
            For anything else, just drop us a message here. We'll get back within 24 hours.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 text-green-700 bg-green-100 border border-green-400 px-4 py-3 rounded text-center text-[14px]">
            Your message has been successfully sent.
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text" name="name" placeholder="Your name"
              required value={formData.name} onChange={handleChange}
              className="flex-1 border border-black px-4 py-3 text-[14px] focus:outline-none placeholder-gray-600"
            />
            <input
              type="email" name="email" placeholder="Your email"
              required value={formData.email} onChange={handleChange}
              className="flex-1 border border-black px-4 py-3 text-[14px] focus:outline-none placeholder-gray-600"
            />
          </div>

          {/* Message */}
          <textarea
            name="message" placeholder="Your message" rows="10"
            required value={formData.message} onChange={handleChange}
            className="w-full border border-black px-4 py-3 text-[14px] focus:outline-none placeholder-gray-600"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-[#B98940] text-white text-[16px] font-semibold uppercase tracking-wider transition duration-200 hover:bg-black"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
              </div>
  )
}

export default Contactus
