import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMachine } from '@/pages/api/manufacturing/machine/machineSlice';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ModuleSidebar from '../../../components/module_sidebar';

export default function MachinePage() {
  const selector = useSelector((state: any) => state.machines);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMachine() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Machine</title>
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
              href="/modules/manufacturing/machine"
              className="text-2xl font-bold"
            >
              Machine
            </Link>
          </div>
          <div className="flex justify-end gap-4">
          <Link
            href="/modules/manufacturing/machine"
            className="mr-5 bg-green-500 border p-2 rounded-lg"
          >
            New Machine
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
                  <th className="text-black">Machine Id</th>
                  <th className="text-black">ID Aset</th>
                  <th className="text-black">Nama Mesin</th>
                  <th className="text-black">Cost</th>
                  <th className="text-black">Waktu kerja mesin</th>
                  <th className="text-black">Biaya per Jam</th>
                  <th className="text-black">Workcentre</th>
                  <th className="text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {selector.machines.data &&
                  selector.machines.data.map((machine: any) => (
                    <tr key={machine.id}>
                      <td className="text-black">{machine.id}</td>
                      <td className="text-black">{machine.id_asset}</td>
                      <td className="text-black">{machine.m_desc}</td>
                      <td className="text-black">{machine.m_cost}</td>
                      <td className="text-black">{machine.m_working_hour}</td>
                      <td className="text-black">{machine.m_costph}</td>
                      <td className="text-black">{machine.wc_id}</td>
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
