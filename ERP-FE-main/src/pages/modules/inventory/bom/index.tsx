import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBom } from '@/pages/api/inventory/bom/bomSlice';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function BOMPage() {
  const selector = useSelector((state: any) => state.bom);

  const [findBomForm, setFindBomForm] = useState({
    idBom: '',
  });

  const dispatch = useDispatch();

  const handleFindBom = (e: any) => {
    e.preventDefault();
    const search = {
      id: findBomForm.idBom,
    };

    dispatch(fetchBom({ search }) as any);
  };

  const handleFormChange = (e: any) => {
    setFindBomForm(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  if (selector.bom) {
    console.log(selector);
  }

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
        <div className="mx-5">
          <h4 className="text-black">Cari barang</h4>
          <form action="">
            <input
              type="text"
              name="idBom"
              className="border border-black bg-white text-black"
              onChange={handleFormChange}
            />
            <button
              onClick={handleFindBom}
              className="border border-black text-black"
            >
              Cari
            </button>
          </form>

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
          {selector.bom && (
            <div className="flex flex-col gap-3 mb-3">
              <div className="flex">
                <p className="text-black font-bold">Id :</p>
                <p className="text-black ml-2">{selector.bom.id}</p>
              </div>
              <div className="flex">
                <p className="text-black font-bold">Nama :</p>
                <p className="text-black ml-2">{selector.bom.InItem.name}</p>
              </div>
            </div>
          )}
          <table className="border border-black w-[50vw] mt-4">
            <thead className="border border-black">
              <tr>
                <th className="text-black">Nama Item</th>
                <th className="text-black">Kuantitas</th>
              </tr>
            </thead>
            <tbody>
              {selector.bom &&
                selector.bom.InBomChildren.map((child: any) => (
                  <tr className="border border-black" key={child.id}>
                    <td className="text-black">{child.InItem.name}</td>
                    <td className="text-black">{child.quantity}</td>
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
