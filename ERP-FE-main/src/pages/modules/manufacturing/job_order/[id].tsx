import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobOrderDetails } from '@/pages/api/manufacturing/jobOrder/jobOrderSlice';
import Link from 'next/link';

import { useRouter } from 'next/router';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function ProductionOrderPage() {
  const router = useRouter();
  const id = router.query.id;
  const selector = useSelector((state: any) => state.jobOrders);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchJobOrderDetails({search}) as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Job Order Detail</title>
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
              href="/modules/manufacturing/job_order"
              className="text-2xl font-bold"
            >
              Job Order Detail
            </Link>
          </div>
          <div className="flex justify-end gap-4">
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
                  <th className="text-black">Job Order Detail Id</th>
                  <th className="text-black">Job Order Id</th>
                  <th className="text-black">Operation Id</th>
                  <th className="text-black">Item Hasil</th>
                  <th className="text-black">Quantity</th>
                  <th className="text-black">Machine Id</th>
                  <th className="text-black">Durasi Pengerjaan</th>
                  <th className="text-black">Skill Pekerja</th>
                  <th className="text-black">Jumlah Skill Pekerja</th>

                  <th className="text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {selector.jobOrders.data &&
                  selector.jobOrders.data.map((jobOrder: any) => (
                    <tr key={jobOrder.id}>
                      <td className="text-black">{jobOrder.id}</td>
                      <td className="text-black">{jobOrder.jo_id}</td>
                      <td className="text-black">{jobOrder.item_id}</td>
                      <td className="text-black">{jobOrder.jod_qty}</td>
                      <td className="text-black">{jobOrder.m_id}</td>
                      <td className="text-black">{jobOrder.jod_m_hour}</td>
                      <td className="text-black">{jobOrder.jod_id_skill}</td>
                      <td className="text-black">{jobOrder.jod_man_qty}</td>
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
