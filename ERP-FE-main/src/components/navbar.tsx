import React, { ReactEventHandler } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  handleSidebar: ReactEventHandler;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ handleSidebar, sidebarOpen }) => {
  return (
    <nav
      className="p-4 fixed w-full z-10 text-white"
      style={{
        background: 'linear-gradient(to right, #0020C9, #3864FF, #E169FF)',
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span
              className="text-2xl font-bold cursor-pointer"
              style={{ color: '#fff' }} // Menambahkan style untuk warna putih
            >
              ITS ERP
            </span>
          </Link>
          <button className="ml-4" onClick={handleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer shadow-md hover:bg-blue-600">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer shadow-md hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
