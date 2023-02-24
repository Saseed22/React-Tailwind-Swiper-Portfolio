import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop}
        className="bg-accent w-12 h-12 rounded-full text-white hover:bg-accent-hover 
        fixed right-24 bottom-24 cursor-pointer flex items-center justify-center transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopButton;
