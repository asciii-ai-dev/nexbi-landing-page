import { useState, useEffect } from "react";
import NexbiLogo from "../assets/nexbi_logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Handle scroll logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle hash change logic
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Initialize the hash on component mount
    setCurrentHash(window.location.hash);

    // Attach hash change event listener
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header
      className="fixed !z-50 top-6 left-1/2 transform -translate-x-1/2 max-w-4xl w-full flex justify-between items-center px-4 py-2.5 text-white rounded-full border border-[#FFFFFF08] transition-all duration-300 ease-in-out"
      style={{
        background: isScrolled
          ? "linear-gradient(90.29deg, rgba(9, 10, 12, 0.7) 41.9%, rgba(7, 7, 9, 0.7) 65%)"
          : "linear-gradient(90.29deg, rgba(9, 10, 12, 0.02) 11.9%, rgba(7, 7, 9, 0.02) 76.85%)",
      }}
    >
      <img
        src={NexbiLogo}
        width="100px"
        height="18px"
        alt="nexbi_logo"
        className="object-contain"
      />
      <nav className="space-x-12 items-center hidden md:flex">
        <a
          style={{ opacity: currentHash === "" ? 1 : 0.45 }}
          href="#"
          className="hover:text-gray-400"
        >
          Home
        </a>
        <a
          style={{ opacity: currentHash === "#whyus" ? 1 : 0.45 }}
          href="#whyus"
          className="text-[#F7F8F8]"
        >
          Why Us
        </a>
        <a
          style={{ opacity: currentHash === "#how_it_works" ? 1 : 0.45 }}
          href="#how_it_works"
          className="text-[#F7F8F8]"
        >
          How it works
        </a>
      </nav>
      <a
        href="#waitlist"
        className="bg-[#FFFFFF] opacity-100 text-[#2F3031] text-md px-5 py-2.5 rounded-full"
      >
        Join the waitlist
      </a>
    </header>
  );
};

export default Header;
