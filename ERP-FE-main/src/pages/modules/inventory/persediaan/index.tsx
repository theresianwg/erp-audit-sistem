import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItems } from '@/pages/api/inventory/item/itemSlice';

import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function StoragePage() {
  const selector = useSelector((state: any) => state.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems() as any);
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchAllItems() as any);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Persediaan</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex gap-3 text-black">
          <Link href="/modules/inventory" className="text-2xl">
            Inventory
          </Link>
          <p className="text-2xl">{'>'}</p>
          <Link
            href="/modules/inventory/persediaan"
            className="text-2xl font-bold"
          >
            Persediaan
          </Link>
        </div>
        <div className="flex justify-end gap-4">
          <button className="text-black" onClick={handleRefresh}>
            Refresh
          </button>
          <Link
            href="/modules/inventory/persediaan/add"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New Item
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
            <table className="table-auto border">
              <thead className="border bg-blue-100">
                <tr>
                  <th className="text-black border p-2">ID</th>
                  <th className="text-black border p-2">Name</th>
                  <th className="text-black border p-2">Category</th>
                  <th className="text-black border p-2">Quantity</th>
                  <th className="text-black border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {selector.items &&
                  selector.items.map((item: any) => (
                    <tr key={item.id} className="border">
                      <td className="text-black border p-2">{item.id}</td>
                      <td className="text-black border p-2">{item.name}</td>
                      <td className="text-black border p-2">
                        {item.GlItemCategory.Category_Name}
                      </td>
                      {item.InInventory ? (
                        <td className="text-black p-2">
                          {item.InInventory.quantity} {item.sale_unit}
                          {item.buy_unit}
                        </td>
                      ) : (
                        <td className="text-black">
                          0 {item.sale_unit}
                          {item.buy_unit}
                        </td>
                      )}
                      <td className="flex gap-2 border p-2">
                        <button className="text-black">Delete</button>
                        <Link
                          href={'/modules/inventory/persediaan/' + item.id}
                          className="text-black"
                        >
                          Edit
                        </Link>
                                          <Link href={"/modules/inventory/persediaan/item/"+item.id} className="text-black">Detail</Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
