import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Features from './Features';
import Function from './Function';
import Footer from './Footer';
import Section from './Section';
import MovingBanner from './Banner';

const Hero = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with Animation */}
      <section className="bg-white min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 mt-0 md:pt-0 pb-10">
        <motion.div
          className="max-w-4xl flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize your <span className="text-green-600">business</span> with Webbify
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Cloud-powered solutions to revolutionize your workflow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-green-700 transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition"
            >
              Developer Docs
            </motion.button>
          </motion.div>

          <motion.p
            className="mt-6 text-green-800 font-bold text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Used by Developers and Businesses across the globe.
          </motion.p>
        </motion.div>
      </section>

      <MovingBanner />
      <Features />
      <Section />
      <Function />
      <Footer />
    </>
  );
};

export default Hero;
