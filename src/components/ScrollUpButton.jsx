import React, { useEffect } from "react";
import { useState } from "react";

const ScrollUpButton = () => {
  // untuk fungsi onclick ke atas
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // untuk handle muncul atau tidaknya scroll
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed right-5 bottom-5 p-3 bg-yellow-500 text-white rounded-xl z-50"
          onClick={ScrollUp}
        >
          <i className="ri-arrow-up-s-line text-3xl"></i>
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
