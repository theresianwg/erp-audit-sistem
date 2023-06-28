import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS Enterprise Resource Planning</title>
      </Head>
      <nav className="backdrop-filter backdrop-blur-lg p-4 fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white cursor-pointer"
          >
            ITS ERP
          </Link>
          <div className="space-x-4">
            <Link href="/modules" className="cursor-pointer text-white">
              Modules
            </Link>
            <Link href="#contact" className="cursor-pointer text-white">
              Contact
            </Link>
            <Link href="#about" className="cursor-pointer text-white">
              About
            </Link>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer shadow-md hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer shadow-md hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center flex-grow text-center z-0 relative">
        <Image
          alt="Background"
          src="/assets/background_landing.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute"
        />
        <h1 className="text-5xl text-white font-bold mb-5 z-10">
          ITS Enterprise Resource Planning
        </h1>
        <Link
          href="/signup"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded z-10 cursor-pointer"
        >
          Get Started
        </Link>
      </main>
      <footer
        className="backdrop-filter backdrop-blur-lg text-gray-100 bg-gray-800 body-font"
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
    </div>
  );
};

export default IndexPage;
