import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCustomers } from '@/pages/api/inventory/customer/customerSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function CustomerPage() {
  const selector = useSelector((state: any) => state.customer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCustomers() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Sales Order Detail</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex flex-col p-5">
          <div className="flex gap-3 text-black">
            <Link href="/modules/sales" className="text-2xl">
              Sales
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link href="/modules/sales/customer" className="text-2xl font-bold">
              Customer
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <table>
            <thead className="bg-blue-100">
              <tr>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Nama
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Alamat
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  No Telp
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {selector.loading && (
                <tr>
                  <td colSpan={3}>Loading...</td>
                </tr>
              )}
              {selector.error && (
                <tr>
                  <td colSpan={3}>{selector.error.message}</td>
                </tr>
              )}
              {selector.customers.length > 0 &&
                selector.customers.map((customer: any) => (
                  <tr key={customer.id}>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {customer.name}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {customer.address}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {customer.phone}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {customer.email}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
