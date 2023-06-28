import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPurchaseOrder } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function PurchaseOrderDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.purchaseOrder);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchPurchaseOrder({ search }) as any);
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
          {selector.purchaseOrder && (
            <div className="flex flex-col gap-3 mb-3">
              <div className="flex flex-col">
                <p className="text-black font-bold">Id :</p>
                <p className="text-black ml-2">{selector.purchaseOrder.id}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-black font-bold">Id Purchase Request:</p>
                <p className="text-black ml-2">
                  {selector.purchaseOrder.id_purchase_request}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-black font-bold">Supplier: </p>
                <p className="text-black ml-2">
                  Nama: {selector.purchaseOrder.InSupplier.name}
                </p>
                <p className="text-black ml-2">
                  Alamat: {selector.purchaseOrder.InSupplier.address}
                </p>
              </div>
            </div>
          )}
          <table className="border-collapse table-auto">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-black border border-gray-500">
                  Nama Barang
                </th>
                <th className="text-black border border-gray-500">Kuantitas</th>
                <th className="text-black border border-gray-500">Harga</th>
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
              {selector.purchaseOrder &&
                selector.purchaseOrder.InPurchaseOrderDetails.map(
                  (child: any) => (
                    <tr key={child.id}>
                      <td className="text-black border border-gray-500">
                        {child.InItem.name}
                      </td>
                      <td className="text-black border border-gray-500">
                        {child.quantity + ' ' + child.unit}
                      </td>
                      <td className="text-black border border-gray-500 text-end">
                        {child.total.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                        })}
                      </td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
          {selector.purchaseOrder && (
            <div className="flex flex-col mt-3 items-end">
              <div className="flex">
                <p className="text-black font-bold">Total: </p>
                <p className="text-black ml-2">
                  {selector.purchaseOrder.total_price_tax.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                  })}
                </p>
              </div>
              <div className="flex">
                <p className="text-black font-bold">Tax: </p>
                <p className="text-black ml-2" >
                  {selector.purchaseOrder.total_tax.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                  })}
                </p>
              </div>
              <div className="flex">
                <p className="text-black font-bold">Price: </p>
                <p className="text-black ml-2">
                  {selector.purchaseOrder.total_price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                  })}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
