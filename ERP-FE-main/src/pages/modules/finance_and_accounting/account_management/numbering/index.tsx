import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import { Pagination } from '../../../../../components/pagination';

import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchAllNumberings } from '@/pages/api/general_ledger/numbering/numberingSlice';
import Link from 'next/link';

export default function TransactionType(){

    const selector = useSelector(
        (state: any) => state.numberings
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if(!selector.numberings.length){
            dispatch(fetchAllNumberings() as any);
        }
    }, [dispatch]);

    // Navigation Bar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';
    console.log(selector.numberings)

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
    
    const totalPages = Math.ceil(selector.numberings.length / itemsPerPage);
    
    const currentItems = selector.numberings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                <div className="flex justify-end">
                    <Link href="/modules/finance_and_accounting/account_management/transaction_type/create_transaction_type" className="mr-5 bg-green-500 border p-2 rounded-lg">Penomoran Baru</Link>
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
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="text-black px-4 py-2">Nama Penomoran</th>
                                    <th className="text-black px-4 py-2">Tipe Transaksi</th>
                                    <th className="text-black px-4 py-2">Tipe Penomoran</th>
                                    <th className="text-black px-4 py-2">Penomoran Aktif</th>
                                    <th className="text-black px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map((numbering: any) => (
                                    <tr key={numbering.id}>
                                        <td className="text-black text-center border px-4 py-2">{numbering.Numbering_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{numbering.GlTransactionType.TT_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{numbering.Numbering_Type}</td>
                                        <td className="text-black text-center border px-4 py-2">{numbering.Numbering_Active? "Aktif": "Tidak Aktif"}</td>
                                        <td className="flex gap-2 px-4 py-2">
                                            <button className="text-red-500 mr-2">Delete</button>
                                            <button className="text-blue-500">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
        </div>
    )
}