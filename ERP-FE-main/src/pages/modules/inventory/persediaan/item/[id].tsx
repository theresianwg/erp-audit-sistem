import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById } from '@/pages/api/inventory/item/itemSlice';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';

export default function ItemDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.items);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(getItemById({ search }) as any);
  }, [dispatch]);

  console.log(selector);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Item Detail</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex flex-col p-5">
          {/* Back Button */}
          <Link className='text-black bg-blue-200 px-3 py-1 rounded w-fit' href="/modules/inventory/persediaan">Back</Link>
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
          {
            selector.item && (
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold'>Id Item :</p>
                        <p className='text-black'>{selector.item.id}</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold'>Nama Item :</p>
                        <p className='text-black'>{selector.item.name}</p>
                    </div>
                </div>
                <table className='mt-4'>
                    <thead className='bg-blue-100'>
                    <tr>
                        <th className="text-black border border-gray-500 px-3 py-1">id</th>
                        <th className="text-black border border-gray-500 px-3 py-1">harga beli</th>
                        <th className="text-black border border-gray-500 px-3 py-1">quantity</th>
                        <th className="text-black border border-gray-500 px-3 py-1">satuan beli</th>
                        <th className="text-black border border-gray-500 px-3 py-1">tanggal beli</th>
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
                    {selector.item.InItemDetails &&
                        selector.item.InItemDetails.map(
                        (child: any) => (
                            <tr key={child.id}>
                                <td className="text-black border border-gray-500 px-3 py-1">{child.id}</td>
                                <td className="text-black border border-gray-500 px-3 py-1 text-right">
                                  {/* Rp. {child.buy_price} */}
                                  {new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR"}).format(child.buy_price)}
                                </td>
                                <td className="text-black border border-gray-500 px-3 py-1">{child.quantity}</td>
                                <td className="text-black border border-gray-500 px-3 py-1">{selector.item.buy_unit}</td>
                                {/* <td className="text-black border border-gray-500 px-3 py-1">{child.date}</td> */}
                                <td className="text-black border border-gray-500 px-3 py-1">
                                    {new Date(child.date).toLocaleString('id-ID', {
                                      day: 'numeric',
                                      month: 'numeric',
                                      year: 'numeric',
                                      hour: 'numeric',
                                      minute: 'numeric',
                                      hour12: true
                                    })}
                                </td>
                            </tr>
                        ),
                        )}
                    </tbody>
                </table>
                    </div>
                )
            }
                
            </div>
        </div>
      <Footer />
    </div>
  );
}
