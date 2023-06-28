import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className={`text-gray-100 bg-gray-800 body-font mt-auto`}
      style={{ backgroundColor: '#0B0645' }}
    >
      <div className="container px-5 py-8 mx-auto flex items-center justify-between">
        <div className="flex justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/company/mci-its"
            className="ml-3 text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/iimlab_its/"
            className="ml-3 text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-gray-300 text-sm text-center sm:text-right sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © 2023 ITS ERP — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
