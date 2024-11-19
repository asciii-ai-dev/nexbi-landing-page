import { useState, useEffect } from "react";
import NexbiLogo from "../assets/nexbi_logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 0, we consider it scrolled
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed !z-50 top-6 left-1/2 transform -translate-x-1/2 max-w-4xl w-full flex justify-between items-center px-4 py-2.5 text-white rounded-full border border-[#FFFFFF08] transition-all duration-300 ease-in-out"
      style={{
        background: isScrolled
          ? "linear-gradient(90.29deg, rgba(9, 10, 12, 0.7) 41.9%, rgba(7, 7, 9, 0.7) 65%)" // Hex background when scrolled
          : "linear-gradient(90.29deg, rgba(9, 10, 12, 0.02) 11.9%, rgba(7, 7, 9, 0.02) 76.85%)", // Linear gradient when at the top
      }}
    >
      <img src={NexbiLogo} width="100px" height="18px" alt="nexbi_logo" className="object-contain" />
      <nav className="space-x-12 items-center hidden md:flex">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#how_it_works" className="text-[#F7F8F8] opacity-[0.45]">How it works</a>
      </nav>
      <a href="#waitlist" className="bg-[#FFFFFF] opacity-100 text-[#2F3031] text-md px-5 py-2.5 rounded-full">
        Join the waitlist
      </a>
    </header>
  );
};

export default Header;
