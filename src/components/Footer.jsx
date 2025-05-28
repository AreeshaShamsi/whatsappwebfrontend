import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Webbify</h2>
          <p className="text-sm">
            Cloud-powered solutions to revolutionize your workflow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {["Features", "Pricing", "Contact", "Docs"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-green-300 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Webbify. All rights reserved.
      </div>
    </footer>
  );
}
