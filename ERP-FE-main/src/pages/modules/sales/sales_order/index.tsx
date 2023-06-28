import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSalesOrders } from '../../../api/inventory/salesOrder/salesOrdersSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function SalesOrderPage() {
  const selector = useSelector((state: any) => state.salesOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSalesOrders() as any);
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchAllSalesOrders() as any);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Sales Order</title>
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
            <Link
              href="/modules/sales/sales_order"
              className="text-2xl font-bold"
            >
              Sales Order
            </Link>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="text-black" onClick={handleRefresh}>
            Refresh
          </button>
          <Link
            href="/modules/sales/sales_order/add"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New Sales Order
          </Link>
        </div>
        <div className="flex flex-col p-5">
          <table>
            <thead className="bg-blue-100">
              <tr>
                <th className="text-black border border-gray-500 px-3 py-1">
                  SO Number
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Customer
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Total Price
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Payment Type
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  DP Amount
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
              {selector.salesOrders.length > 0 &&
                selector.salesOrders.map((salesOrder: any) => (
                  <tr key={salesOrder.id}>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.id}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.InCustomer.name}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.total_price}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.payment_type}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.dp_amount}
                    </td>
                    <td className="text-black border border-gray-500 px-3 py-1">
                      {salesOrder.createdAt}
                    </td>
                    <td className="border border-gray-500 px-3 py-1">
                      <button className="text-black">
                        <Link
                          href={{
                            pathname:
                              '/modules/sales/sales_order/' + salesOrder.id,
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
