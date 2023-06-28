// File: src/pages/modules/account_payable/index.tsx
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaClipboardList } from 'react-icons/fa';
import { MdInventory } from 'react-icons/md';
import { LuPackageCheck } from 'react-icons/lu';
import { GiWeight } from 'react-icons/gi';
import { TbPackageExport } from 'react-icons/tb';

import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function InventoryHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Inventory</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <p className="text-2xl font-bold text-black">Inventory</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <MdInventory className="text-4xl text-blue-600 mb-2" />
            <Link href="/modules/inventory/persediaan">
              <div className="text-black cursor-pointer">Persediaan</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <FaClipboardList className="text-4xl text-green-600 mb-2" />
            <Link href="/modules/inventory/bom" passHref>
              <div className="text-black cursor-pointer">Bill Of Materials</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <LuPackageCheck className="text-4xl text-yellow-600 mb-2" />
            <Link href="/modules/inventory/penerimaan" passHref>
              <div className="text-black cursor-pointer">Penerimaan Barang</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <TbPackageExport className="text-4xl text-yellow-600 mb-2" />
            <Link href="/modules/inventory/penerimaan" passHref>
              <div className="text-black cursor-pointer">Pengiriman Barang</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
            <GiWeight className="text-4xl text-red-600 mb-2" />
            <Link href="/modules/inventory/satuan" passHref>
              <div className="text-black cursor-pointer">Satuan</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
