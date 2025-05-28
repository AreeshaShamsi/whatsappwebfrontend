import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const features = [
  {
    title: "Full-Featured JSON API",
    description:
      "Send and receive messages, manage contacts, and media with ease using our robust JSON API.",
    icon: (
      <svg
        className="w-14 h-14 stroke-current transition-colors duration-500"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20h9M12 4v16M3 12h9M16 8l4 4-4 4" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Group Management",
    description:
      "Create, manage, and moderate WhatsApp groups seamlessly through API calls.",
    icon: (
      <svg
        className="w-14 h-14 stroke-current transition-colors duration-500"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 20a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
  {
    title: "Rich Message Types",
    description:
      "Support text, images, docs, interactive buttons, templates, and more rich content.",
    icon: (
      <svg
        className="w-14 h-14 stroke-current transition-colors duration-500"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3h-8v4h8V3z" />
      </svg>
    ),
  },
  {
    title: "Stable & Scalable API",
    description:
      "Cloud infrastructure built for stability and scale to meet your messaging needs.",
    icon: (
      <svg
        className="w-14 h-14 stroke-current transition-colors duration-500"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 1v22" />
        <path d="M4 6h16M4 18h16" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-white max-w-screen mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 mb-16 text-center"
      >
        Key Features
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon }) => (
          <Tilt
            key={title}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#22c55e"
            glarePosition="all"
            glareBorderRadius="20px"
            className="group bg-gray-100 rounded-2xl p-8 shadow-lg cursor-pointer transform transition-colors duration-500 hover:bg-green-100 hover:scale-105"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 text-gray-700 group-hover:text-green-600 transition-colors duration-500">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-500">
                {title}
              </h3>
              <p className="text-gray-700 group-hover:text-green-600 transition-colors duration-500">
                {description}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
