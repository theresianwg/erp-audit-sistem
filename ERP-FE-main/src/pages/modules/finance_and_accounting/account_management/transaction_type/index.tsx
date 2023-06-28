import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';

import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchAllTransactionTypes } from '@/pages/api/general_ledger/transaction_type/transactionTypeSlice';
import Link from 'next/link';

export default function TransactionType(){

    const selector = useSelector(
        (state: any) => state.transactiontypes
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if(!selector.transactiontypes.length){
            dispatch(fetchAllTransactionTypes() as any);
        }
    }, [dispatch]);
    console.log(selector.transactiontypes);
    // Navigation Bar
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
                <div className="flex justify-end">
                    <Link href="/modules/finance_and_accounting/account_management/transaction_type/create_transaction_type" className="mr-5 bg-green-500 border p-2 rounded-lg">New Transaction Type</Link>
                </div>
                <div className="p-5 flex flex-col">
                    {(selector.loading) && (
                        <div className="flex justify-center items-center">
                            <p className="text-black">Loading...</p>
                        </div>
                    )}

                    {(selector.error) && (
                        <div className="flex justify-center items-center">
                            <p className="text-black">Error Get Data</p>
                        </div>
                    )}

                    {(!selector.loading && !selector.error) && (
                        <table className="table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-black px-4 py-2">Nomor</th>
                                    <th className="text-black px-4 py-2">Transaction Type Name</th>
                                    <th className="text-black px-4 py-2">Journal Source</th>
                                    <th className="text-black px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selector.transactiontypes && selector.transactiontypes.map((transactiontype: any) => (
                                    <tr key={transactiontype.id}>
                                        <td className="text-black text-center border px-4 py-2">{transactiontype.id}</td>
                                        <td className="text-black text-center border px-4 py-2">{transactiontype.TT_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{transactiontype.GlJournalSource.JS_Modul}</td>
                                        <td className="border px-4 pt-4 pb-2 text-center">
                                            <button className="text-red-500 mr-2">Delete</button>
                                            <Link href="#" className="text-blue-500">Edit</Link>
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
    )
}