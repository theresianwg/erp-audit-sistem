import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  FaDollarSign,
  FaExchangeAlt,
  FaCashRegister,
  FaLandmark,
} from 'react-icons/fa';

import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function CashBankHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Cash Bank</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/modules/cash_bank/currency" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaDollarSign className="text-4xl text-blue-600 mb-2" />
              <div className="text-black cursor-pointer">Currency</div>
            </div>
          </Link>

          <Link href="/modules/cash_bank/exchange_rate" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaExchangeAlt className="text-4xl text-green-600 mb-2" />
              <div className="text-black cursor-pointer">Exchange Rate</div>
            </div>
          </Link>

          <Link href="/modules/cash_bank/cash_management" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaCashRegister className="text-4xl text-yellow-600 mb-2" />
              <div className="text-black cursor-pointer">Cash Management</div>
            </div>
          </Link>

          <Link href="/modules/cash_bank/bank_management" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaLandmark className="text-4xl text-red-600 mb-2" />
              <div className="text-black cursor-pointer">Bank Management</div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
