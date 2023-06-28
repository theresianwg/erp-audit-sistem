import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPurchaseRequest } from '@/pages/api/inventory/purchaseRequest/purchaseRequestSlice';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function PurchaseRequestDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.purchaseRequest);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchPurchaseRequest({ search }) as any);
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
          {/* Back Button */}
          <Link
            className="text-black bg-blue-200 px-3 py-1 rounded w-fit"
            href="/modules/purchasing/purchase_request"
          >
            Back
          </Link>
          {selector.loading && (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          )}
          {selector.error && (
            <tr>
              <td colSpan={3}>{selector.error}</td>
            </tr>
          )}
          <h4 className="text-black mt-4">Id Purchase Request : {id}</h4>
          <table className="mt-4">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Nama Barang
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Kuantitas
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Sudah Dibeli?
                </th>
                <th className="text-black border border-gray-500 px-3 py-1">
                  Budget Cukup?
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
                  <td colSpan={3}>{selector.error}</td>
                </tr>
              )}
              {selector.purchaseRequest &&
                selector.purchaseRequest.InPurchaseRequestDetails.map(
                  (child: any) => (
                    <tr key={child.id}>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {child.InItem.name}
                      </td>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {child.quantity + ' ' + child.InItem.buy_unit}
                      </td>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {child.ordered ? 'Sudah' : 'Belum'}
                      </td>
                      <td className="text-black border border-gray-500 px-3 py-1">
                        {child.budgetStatus ? 'Cukup' : 'Tidak Cukup'}
                      </td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
