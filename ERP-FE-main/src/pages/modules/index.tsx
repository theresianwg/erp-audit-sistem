import { useState } from 'react';
import { contentData } from '../../components/content_data';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ModuleSidebar from '../../components/module_sidebar';

const ModuleHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Modules</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <main
        className={`flex flex-wrap p-4 mt-20 ${sidebarOpen ? 'ml-64' : ''}`}
      >
        {contentData.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="border p-4 rounded shadow">
              <div className="flex justify-center items-center text-6xl mb-4">
                {/* Kode lainnya... */}
              </div>
              <h2 className="text-xl text-center">
                <Link href={item.link}>{item.name}</Link>
              </h2>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ModuleHome;
