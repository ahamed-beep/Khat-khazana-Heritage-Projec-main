import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nax from './Nax';

const LetterForms = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('hindi');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    setError('');
    setSubmitted(true);

    setTimeout(() => {
      alert('Form submitted!');
      setSubmitted(false);
      setName('');
      setDescription('');
      setCategory('hindi');
      setFile(null);
      e.target.reset();
    }, 1500);
  };

  return (
    <div>
      <Nax />
      <div className="min-h-screen mt-15 bg-white flex items-center justify-center p-6">
        <AnimatePresence>
          {!submitted && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full max-w-lg bg-white border border-black rounded-3xl p-10 text-black shadow-xl"
              noValidate
            >
              <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
                Upload Form
              </h2>

              <AnimatePresence>
                {error && (
                  <motion.div
                    key="error"
                    initial={{ x: -10 }}
                    animate={{ x: [0, -10, 10, -10, 10, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 text-center text-red-500 font-semibold"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-0 w-full mb-8 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" "
                  autoComplete="off"
                  className="block py-3 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                  focus:outline-none focus:ring-0 focus:border-black peer"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text"
                >
                  Name <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder=" "
                  className="block py-3 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-400 resize-none appearance-none
                focus:outline-none focus:ring-0 focus:border-black peer"
                />
                <label
                  htmlFor="description"
                  className="absolute text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 cursor-text"
                >
                  Description (Optional)
                </label>
              </div>

              <div className="relative z-0 w-full mb-8 group">
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block py-3 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                focus:outline-none focus:ring-0 focus:border-black peer"
                >
                  <option value="hindi">Hindi</option>
                  <option value="punjabi">Punjabi</option>
                </select>
                <label
                  htmlFor="category"
                  className="absolute text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:scale-75 peer-focus:-translate-y-6 cursor-pointer"
                >
                  Category
                </label>
              </div>

              <label htmlFor="fileUpload" className="block mb-4 font-semibold text-gray-800 cursor-pointer">
                Select File (optional)
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full mb-12 cursor-pointer rounded-xl border border-gray-400 bg-white py-3 px-5 text-black
              focus:outline-none focus:ring-4 focus:ring-black transition duration-300"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black hover:bg-gray-900 text-white rounded-3xl py-4 font-extrabold text-lg
              shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-gray-800"
              >
                Submit
              </motion.button>
            </motion.form>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="text-black text-center text-2xl font-bold"
            >
              🎉 Thank you! Your form was submitted.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LetterForms;
