import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import {FiDollarSign} from 'react-icons/fi';
export default function GeneralLedgerHome(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiDollarSign className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/cost_control/budget_control" passHref>
                        <div className="text-black cursor-pointer">Kontrol Budget</div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}