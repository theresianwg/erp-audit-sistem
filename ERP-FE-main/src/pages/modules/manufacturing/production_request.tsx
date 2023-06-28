import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProductionRequest } from '@/pages/api/manufacturing/productionRequest/productionRequestSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function ProductionRequestPage() {
  const selector = useSelector((state: any) => state.productionRequests);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductionRequest() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Production Request</title>
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
              href="/modules/manufacturing/production_request"
              className="text-2xl font-bold"
            >
              Production Request
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
                  <th className="text-black">ID</th>
                  <th className="text-black">Item ID</th>
                  <th className="text-black">Start</th>
                  <th className="text-black">End</th>
                  <th className="text-black">Quantity</th>
                  <th className="text-black">Status</th>
                  <th className="text-black">Sales Order</th>
                  <th className="text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {selector.productionRequests.data &&
                  selector.productionRequests.data.map(
                    (productionRequest: any) => (
                      <tr key={productionRequest.id}>
                        <td className="text-black">{productionRequest.id}</td>
                        <td className="text-black">
                          {productionRequest.item_id}
                        </td>
                        <td className="text-black">
                          {productionRequest.pr_start}
                        </td>
                        <td className="text-black">
                          {productionRequest.pr_end}
                        </td>
                        <td className="text-black">
                          {productionRequest.pr_qty}
                        </td>
                        <td className="text-black">
                          {productionRequest.pr_status}
                        </td>
                        <td className="text-black">
                          {productionRequest.so_id}
                        </td>
                        <td className="flex gap-2">
                          <button className="text-black">Delete</button>
                          <button className="text-black">Edit</button>
                        </td>
                      </tr>
                    ),
                  )}
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
