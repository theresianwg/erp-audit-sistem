import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import { FiFileText, FiBook, FiBarChart2, FiTrendingUp, FiDatabase, FiList, } from 'react-icons/fi';
import {BsJournalText} from 'react-icons/bs';
export default function JournalManagementHome(){
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
                        <FiFileText className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/income_statement/create_income_statement" passHref>
                        <div className="text-black cursor-pointer">Income Statement</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiBarChart2 className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/balance_sheet/create_balance_sheet" passHref>
                        <div className="text-black cursor-pointer">Balance Sheet</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiTrendingUp  className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/cash_flow/create_cash_flow" passHref>
                        <div className="text-black cursor-pointer">Cash Flow</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiDatabase  className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/equity_change/create_equity_change" passHref>
                        <div className="text-black cursor-pointer">Equity Change</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiBook  className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/general_ledger" passHref>
                        <div className="text-black cursor-pointer">Jurnal Umum</div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-colors duration-200">
                        <FiList  className="text-4xl text-blue-600 mb-2" />
                        <Link href="/modules/finance_and_accounting/report_management/journal_entry" passHref>
                        <div className="text-black cursor-pointer">Journal Entries</div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
