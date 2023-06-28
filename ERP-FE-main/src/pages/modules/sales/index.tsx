import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdPointOfSale } from 'react-icons/md';
import { BsPersonHeart } from 'react-icons/bs';

import Head from 'next/head';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function PruchasingHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Sales</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <p className="text-2xl font-bold text-black">Sales</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <MdPointOfSale className="text-4xl text-green-600 mb-2" />
            <Link href="/modules/sales/sales_order" passHref>
              <div className="text-black cursor-pointer">Sales Order</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <BsPersonHeart className="text-4xl text-yellow-600 mb-2" />
            <Link href="/modules/sales/customer" passHref>
              <div className="text-black cursor-pointer">Customer</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
