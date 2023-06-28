import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiCartAdd, BiCartDownload } from 'react-icons/bi';
import { FaTruckLoading } from 'react-icons/fa';
import { GiWeight } from 'react-icons/gi';
import { TbPackageExport } from 'react-icons/tb';
import toast, { Toaster } from 'react-hot-toast';

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
        <title>ITS ERP - Purchasing</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <Toaster />
        <p className="text-2xl font-bold text-black">Purchasing</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <BiCartAdd className="text-4xl text-green-600 mb-2" />
            <Link href="/modules/purchasing/purchase_request" passHref>
              <div className="text-black cursor-pointer">Purchase Request</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <BiCartDownload className="text-4xl text-green-600 mb-2" />
            <Link href="/modules/purchasing/purchase_order">
              <div className="text-black cursor-pointer">Purchase Order</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <FaTruckLoading className="text-4xl text-yellow-600 mb-2" />
            <Link href="/modules/purchasing/supplier" passHref>
              <div className="text-black cursor-pointer">Supplier</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
