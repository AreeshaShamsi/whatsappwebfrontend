import React from "react";
import Pic from "../assets/bulk1.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const Section = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      <section className="flex flex-col-reverse lg:flex-row items-center px-8 py-12 lg:py-20 gap-8 max-w-7xl mx-auto">
        
        {/* Text content */}
        <div className="max-w-lg lg:max-w-xl space-y-6 lg:flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Transform your messaging
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Need to broadcast a message to many? Webbify makes it easy, efficient, and reliable — whether you're reaching out to customers, clients, or team members. With just a few clicks, you can send personalized messages at scale, saving time and boosting productivity without compromising on quality.
          </p>
         <a href="#" className="inline-flex items-center text-xl underline text-green-600 font-semibold hover:underline">
  <span>Learn more</span>
  <FaLongArrowAltRight className="ml-1" />
</a>

        </div>

        {/* Image */}
        <div className="lg:flex-1 flex justify-center">
          <img
            src={Pic}
            alt="Phone Catalog"
            className="w-92 sm:w-96 lg:w-[420px] h-auto rounded-lg shadow-4xl"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

      </section>
    </div>
  );
};

export default Section;
