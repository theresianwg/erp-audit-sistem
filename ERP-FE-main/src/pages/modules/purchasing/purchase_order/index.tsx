import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPurchaseOrder } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function PurchaseOrderPage() {
  const selector = useSelector((state: any) => state.purchaseOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPurchaseOrder() as any);
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchAllPurchaseOrder() as any);
  };

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
        <div className="flex justify-end gap-4">
          <button className="text-black" onClick={handleRefresh}>
            Refresh
          </button>
          <Link
            href="/modules/purchasing/purchase_order/add"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New Purchase Order
          </Link>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex gap-3 text-black">
            <Link href="/modules/purchasing" className="text-2xl">
              Purchasing
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link
              href="/modules/purchasing/purchase_order"
              className="text-2xl font-bold"
            >
              Purchase Order
            </Link>
          </div>
          <table className="border-collapse table-auto mt-4">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-black border border-gray-500 px-3 py-1">
                  ID
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  No. Purchase Request
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Supplier
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Total
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Tanggal
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
              {selector.purchaseOrders.length > 0 &&
                selector.purchaseOrders.map((purchaseOrder: any) => (
                  <tr key={purchaseOrder.id}>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {purchaseOrder.id}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {purchaseOrder.id_purchase_request}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {purchaseOrder.InSupplier.name}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1 text-right">
                          {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR"}).format(purchaseOrder.total_price_tax)}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                        {new Date(purchaseOrder.createdAt).toLocaleString('id-ID', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true
                        })}
                      </td>
                    <td className="border border-gray-500 px-3 py-1">
                      <button className="text-black">
                        <Link
                          href={{
                            pathname:
                              '/modules/purchasing/purchase_order/' +
                              purchaseOrder.id,
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
