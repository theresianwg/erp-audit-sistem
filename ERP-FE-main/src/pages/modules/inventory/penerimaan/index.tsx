import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReceiveItems } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function ReceiveItemPage() {
  const selector = useSelector((state: any) => state.receiveItem);

  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(fetchAllReceiveItems() as any);
  };

  useEffect(() => {
    dispatch(fetchAllReceiveItems() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Implement Your Page In Here */}
      <Head>
        <title>ITS ERP - Penerimaan Barang</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
      <div className="flex justify-end gap-4">
          <button className="text-black" onClick={handleRefresh}>
            Refresh
          </button>
          <Link
            href="/modules/inventory/penerimaan/add"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New Receive Item
          </Link>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex gap-3 text-black">
            <Link href="/modules/inventory" className="text-2xl">
              Inventory
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link
              href="/modules/inventory/penerimaan"
              className="text-2xl font-bold"
            >
              Penerimaan Barang
            </Link>
          </div>
          <table className='border-collapse table-auto mt-4'>
            <thead className='bg-blue-100'>
              <tr>
                <th className="text-black border border-gray-500 px-3 py-1">Id</th>
                <th className="text-black border border-gray-500 px-3 py-1">Id. Action</th>
                <th className="text-black border border-gray-500 px-3 py-1">Action</th>
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
              {selector.receiveItems.length > 0 &&
                selector.receiveItems.map((receiveItem: any) => (
                  <tr key={receiveItem.id}>
                    <td className="text-black border border-gray-500 px-3 py-1">{receiveItem.id}</td>
                    <td className="text-black border border-gray-500 px-3 py-1">{receiveItem.id_action}</td>
                    <td className='border border-gray-500 px-3 py-1'>
                      <button className="text-black">
                        <Link
                          href={{
                            pathname:
                              '/modules/inventory/penerimaan/' + receiveItem.id,
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
