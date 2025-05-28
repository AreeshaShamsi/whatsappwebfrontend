import React from "react";
import "./Marquee.css"; // You'll add keyframes here

const MovingBanner = () => {
  return (
    <div className="relative overflow-hidden bg-green-900 whitespace-nowrap py-2">
      <div className="marquee-track">
        <span className="marquee-text">
           GROW YOUR BUSINESS ✦ BUILD YOUR AUDIENCE ✦ DO BULK MESSAGING ✦ COST EFFECTIVE ✦ DEVELOP GLOBAL PRESENCE ✦ WE BUILD BRANDS ✦ FOCUS ON YOUR GROWTH ✦
        </span>
        <span className="marquee-text">
           GROW YOUR BUSINESS ✦ BUILD YOUR AUDIENCE ✦ DO BULK MESSAGING ✦ COST EFFECTIVE ✦ DEVELOP GLOBAL PRESENCE ✦ WE BUILD BRANDS ✦ FOCUS ON YOUR GROWTH ✦
        </span>
      </div>
    </div>
  );
};

export default MovingBanner;
