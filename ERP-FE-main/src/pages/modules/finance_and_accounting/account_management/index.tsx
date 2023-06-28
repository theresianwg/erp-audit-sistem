import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { FiBookOpen, FiLayers, FiDollarSign, FiFileText } from 'react-icons/fi';
import { TbNumbers } from 'react-icons/tb';

export default function AccountManagementHome(){
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
                        <FiBookOpen className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/account_management/coa" passHref>
                        <div className="text-black cursor-pointer">Akun Perkiraan</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiLayers className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/account_management/coa_group/" passHref>
                        <div className="text-black cursor-pointer">Grup Akun Perkiraan</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiFileText className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/account_management/transaction_type" passHref>
                        <div className="text-black cursor-pointer">Tipe Transaksi</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <TbNumbers className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/account_management/numbering" passHref>
                        <div className="text-black cursor-pointer">Penomoran</div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}