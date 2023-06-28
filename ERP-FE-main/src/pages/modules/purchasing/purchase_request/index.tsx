import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPurchaseRequest } from '@/pages/api/inventory/purchaseRequest/purchaseRequestSlice';
import { checkBudget } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function PurchaseRequestPage() {
  const selectorPR = useSelector((state: any) => state.purchaseRequest);
  const selectorPO = useSelector((state: any) => state.purchaseOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPurchaseRequest() as any);
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkBudget() as any);
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchAllPurchaseRequest() as any);
  };

  const isBudgetEnough = (estimationPrice: number) => {
    if(selectorPO.checkBudget){
      const total = parseInt(selectorPO.checkBudget.total);
      if(estimationPrice < total){
        return true;
      }
      else{
        return false;
      }
    }
    return false;
  }

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
        <div className="flex flex-col p-5 gap-3">
          <div className="flex gap-3 text-black">
            <Link href="/modules/purchasing" className="text-2xl">
              Purchasing
            </Link>
            <p className="text-2xl">{'>'}</p>
            <Link
              href="/modules/purchasing/purchase_request"
              className="text-2xl font-bold"
            >
              Purchase Request
            </Link>
          </div>
          <div className="flex justify-end gap-4">
            <button className="text-black" onClick={handleRefresh}>
              Refresh
            </button>
            <Link
              href="/modules/purchasing/purchase_request/add"
              className="mr-5 bg-green-500 border p-2 rounded-lg"
            >
              New Purchase Request
            </Link>
          </div>
            <table>
              <thead className='bg-blue-100'>
                <tr>
                  <th className="text-black border border-gray-500 px-3 py-1">No. Purchase Request</th>
                  <th className="text-black border border-gray-500 px-3 py-1">Tanggal</th>
                  <th className="text-black border border-gray-500 px-3 py-1">Estimasi Pengeluaran</th>
                  <th className="text-black border border-gray-500 px-3 py-1">Status</th>
                  <th className="text-black border border-gray-500 px-3 py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectorPR.loading && (
                  <tr>
                    <td colSpan={3}>Loading...</td>
                  </tr>
                )}
                {selectorPR.error && (
                  <tr>
                    <td colSpan={3}>{selectorPR.error.message}</td>
                  </tr>
                )}
                {selectorPR.purchaseRequests.length > 0 &&
                  selectorPR.purchaseRequests.map((purchaseRequest: any) => (
                    <tr key={purchaseRequest.id}>
                      <td className="text-black border border-gray-500 px-3 py-1">{purchaseRequest.id}</td>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {new Date(purchaseRequest.createdAt).toLocaleString('id-ID', {
                          day: 'numeric',
                          month: 'numeric',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true
                        })}
                      </td>
                      <td className="text-black border border-gray-500 px-3 py-1 text-right">
                          {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR"}).format(purchaseRequest.est_total_price_tax)}
                      </td>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {
                          isBudgetEnough(purchaseRequest.est_total_price_tax) ? (
                            <p className='bg-green-300 rounded px-2 py-1'>Budget Cukup</p>
                          ):
                          (
                            <p className='bg-red-300 rounded px-2 py-1'>Budget Tidak Cukup</p>
                          )
                        }
                      </td>
                      <td className='border border-gray-500 px-3 py-1'>
                        <button className="text-black">
                          <Link
                            href={{
                              pathname:
                                '/modules/purchasing/purchase_request/' +
                                purchaseRequest.id,
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
