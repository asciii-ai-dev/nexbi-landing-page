import React from 'react'
import { ImLinkedin } from 'react-icons/im'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-[#060809] flex justify-between items-center flex-col md:flex-row text-white px-8 py-10 md:py-20'>
        <div>
          <a href="https://www.linkedin.com/company/nexbi-ai/" target='_blank'>
          <ImLinkedin color="white" size={22} />
          </a>
        </div>
        <div>
          <p className='text-white text-center text-sm'>
          © {year} Copyright | NexBi | All Rights Reserved
          </p>
        </div>
    </div>
  )
}

export default Footer
