import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReceiveItem } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function ReceiveItemDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.receiveItem);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchReceiveItem({ search }) as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Penerimaan Barang</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      {/* Implement Your Page In Here */}

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
          {selector.receiveItem && (
            <div className="flex flex-col gap-3">
              <h4 className="text-black mb-4">Id Receive : {id}</h4>
              <h4 className="text-black mb-4">
                Id Action : {selector.receiveItem.id_action}
              </h4>
            </div>
          )}

          <table>
            <thead>
              <tr>
                <th className="text-black">Nama Barang</th>
                <th className="text-black">Kuantitas Diterima</th>
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
              {selector.receiveItem &&
                selector.receiveItem.InReceiveItemChecks.map((child: any) => (
                  <tr key={child.id}>
                    <td className="text-black">{child.InItem.name}</td>
                    <td className="text-black">{child.approved_quantity}</td>
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
