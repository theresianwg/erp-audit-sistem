import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaReceipt,
  FaAdjust,
} from 'react-icons/fa';

import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function AccountPayableHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Account Payable</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/modules/account_payable/purchase_down_payment_invoice"
            passHref
          >
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaFileInvoiceDollar className="text-4xl text-blue-600 mb-2" />
              <div className="text-black cursor-pointer">
                Purchase Down Payment Invoice
              </div>
            </div>
          </Link>

          <Link href="/modules/account_payable/purchase_invoice" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaFileInvoice className="text-4xl text-green-600 mb-2" />
              <div className="text-black cursor-pointer">Purchase Invoice</div>
            </div>
          </Link>

          <Link
            href="/modules/account_payable/purchase_return_invoice"
            passHref
          >
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaReceipt className="text-4xl text-yellow-600 mb-2" />
              <div className="text-black cursor-pointer">
                Purchase Return Invoice
              </div>
            </div>
          </Link>

          <Link href="/modules/account_payable/ap_adjustment" passHref>
            <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200 hover:border-[#ccc]">
              <FaAdjust className="text-4xl text-red-600 mb-2" />
              <div className="text-black cursor-pointer">AP Adjustment</div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
