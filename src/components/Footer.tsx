import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { MdMail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#060809] flex gap-4 justify-between items-center flex-col md:flex-row text-white px-8 py-10 md:py-20">
      <div className="flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/company/nexbi-ai/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn NexBI page"
        >
          <ImLinkedin size={22} />
        </a>
        <a 
          href="mailto:info@nexbi.ai" 
          aria-label="Email NexBI at info@nexbi.ai"
        >
          <MdMail size={24} />
        </a>
      </div>
      <div>
        <p className="text-white text-center text-sm">
          © {year} Copyright | NexBI | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
