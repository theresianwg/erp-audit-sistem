import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSuppliers } from '@/pages/api/inventory/supplier/supplierSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function SupplierPage() {
  const selector = useSelector((state: any) => state.supplier);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSuppliers() as any);
  }, [dispatch]);

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
        <div className="flex flex-col p-5">
          <div className="flex gap-3 text-black">
            <Link href="/modules/purchasing" className="text-2xl">
              Purchasing
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link
              href="/modules/purchasing/supplier"
              className="text-2xl font-bold"
            >
              Supplier
            </Link>
          </div>
          <table className="mt-5">
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
                <th className="text-black border border-gray-500 px-3 py-1">
                  Action
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
              {selector.suppliers.length > 0 &&
                selector.suppliers.map((supplier: any) => (
                  <tr key={supplier.id}>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {supplier.name}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {supplier.address}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {supplier.phone}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {supplier.email}
                    </td>
                    <td className="border border-gray-500 px-3 py-1">
                      <button className="text-black">
                        <Link
                          href={{
                            pathname:
                              '/modules/purchasing/supplier/' + supplier.id,
                          }}
                        >
                          Detail
                        </Link>
                      </button>
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
