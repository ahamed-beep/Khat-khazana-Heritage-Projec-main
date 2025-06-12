import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useNavigate } from "react-router";
import Nax from "./Nax";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};


const Aboutus = () => {
     const navigate = useNavigate();
  return (
    <div>

<Nax/>
     <motion.section
      className="bg-[#f9fafb] py-24 px-4 md:px-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://www.shutterstock.com/image-photo/contact-us-mockup-happy-consultant-600nw-2254957579.jpg"
            alt="About"
            className="rounded-3xl shadow-2xl w-full max-w-md"
            />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            About Us
          </h2>
          <h4 className="text-xl font-medium mb-3 text-indigo-600">
            Crafting Elegant Digital Experiences
          </h4>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With years of experience, we specialize in innovative digital solutions tailored to your business. 
            We value creativity, precision, and results. Let’s build your online success together.
          </p>

          <motion.button
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 1 }}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Phone size={36} className="text-indigo-600 group-hover:animate-pulse" />,
            title: "Call Us",
            text: "+92 300 1234567",
          },
          {
            icon: <MapPin size={36} className="text-rose-600 group-hover:animate-pulse" />,
            title: "Visit Us",
            text: "Lahore, Pakistan",
          },
          {
            icon: <Mail size={36} className="text-emerald-600 group-hover:animate-pulse" />,
            title: "Email Us",
            text: "info@example.com",
          },
        ].map((item, i) => (
          <motion.div
          key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-indigo-50 p-8 rounded-xl shadow-md text-center hover:shadow-xl transition group "
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
        </div>
  )
}

export default Aboutus
