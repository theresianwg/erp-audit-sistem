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
          <h4 className="text-black mb-4">Id Purchase Request : {id}</h4>
          <table>
            <thead>
              <tr>
                <th className="text-black">Nama Barang</th>
                <th className="text-black">Kuantitas</th>
                <th className="text-black">Sudah Dibeli?</th>
                <th className="text-black">Budget Cukup?</th>
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
                      <td className="text-black">{child.InItem.name}</td>
                      <td className="text-black">
                        {child.quantity + ' ' + child.InItem.buy_unit}
                      </td>
                      <td className="text-black">
                        {child.ordered ? 'Sudah' : 'Belum'}
                      </td>
                      <td className="text-black">
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
