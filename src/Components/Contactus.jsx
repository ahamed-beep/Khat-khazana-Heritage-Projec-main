import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import Nax from "./Nax";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contactus = () => {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aap apni form submission logic yahan daal sakte hain, jaise API call
    alert("Thank you, ${formData.name}! We received your message");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div>
   <Nax/>
        <motion.section
      className="bg-[#f9fafb] py-24 px-4 md:px-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you. Please fill out the form below and we'll get back to you shortly.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="your.email@example.com"
              />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
              ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Phone size={36} className="text-indigo-600 mx-auto mb-2" />,
              title: "Call Us",
              text: "+92 300 1234567",
            },
            {
              icon: <MapPin size={36} className="text-rose-600 mx-auto mb-2" />,
              title: "Visit Us",
              text: "Lahore, Pakistan",
            },
            {
              icon: <Mail size={36} className="text-emerald-600 mx-auto mb-2" />,
              title: "Email Us",
              text: "info@example.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
              </div>
  )
}

export default Contactus
