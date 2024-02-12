import React, { useState, useEffect } from "react";
import movetop from "../../assets/move.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This smooths the scrolling behavior
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed right-[2%] md:bottom-[0%] w-[80px] ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button
        className="topbtn animate-bounce mb-20 mr-4 p-2 border-none rounded-full cursor-pointer bg-gray-100"
        onClick={handleScrollToTop}
      >
        <img src={movetop} alt="" />
      </button>
    </div>
  );
};

export default ScrollToTop;
