import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductionOrder } from '@/pages/api/manufacturing/productionOrder/productionOrderSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function ProductionOrderPage() {
  const selector = useSelector((state: any) => state.productionOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductionOrder() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Production Order</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      {/* Implement Your Page In Here */}

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex flex-col p-5">
          <div className="flex gap-3 text-black">
            <Link href="/modules/manufacturing" className="text-2xl">
              Manufacturing
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link
              href="/modules/manufacturing/production_order"
              className="text-2xl font-bold"
            >
              Production Order
            </Link>
          </div>
          <div className="flex justify-end gap-4">
          <Link
            href="/modules/inventory/persediaan/add"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New PO
          </Link>
        </div>
          <div className="p-5 flex flex-col">
          {selector.loading && (
            <div className="flex justify-center items-center">
              <p className="text-black">Loading...</p>
            </div>
          )}

          {selector.error && (
            <div className="flex justify-center items-center">
              <p className="text-black">Error Get Data</p>
            </div>
          )}

          {!selector.loading && !selector.error && (
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-black">Production Order Id</th>
                  <th className="text-black">Production Request Id</th>
                  <th className="text-black">Item Id</th>
                  <th className="text-black">Quantity</th>
                  <th className="text-black">PO Start</th>
                  <th className="text-black">PO End</th>
                  <th className="text-black">Status</th>
                  <th className="text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {selector.productionOrders.data &&
                  selector.productionOrders.data.map((productionOrder: any) => (
                    <tr key={productionOrder.id}>
                      <td className="text-black">{productionOrder.id}</td>
                      <td className="text-black">{productionOrder.pr_id}</td>
                      <td className="text-black">{productionOrder.item_id}</td>
                      <td className="text-black">{productionOrder.po_qty}</td>
                      <td className="text-black">{productionOrder.po_start}</td>
                      <td className="text-black">{productionOrder.po_end}</td>
                      <td className="text-black">{productionOrder.po_status}</td>
                      <td className="flex gap-2">
                        <button className="text-black">Delete</button>
                        <button className="text-black">Edit</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
