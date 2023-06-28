import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import { Pagination } from '../../../../../components/pagination';

import { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import {useSelector, useDispatch} from "react-redux"
import { fetchAllCoas,deleteCoa } from "@/pages/api/general_ledger/coa/coaSlice";
import Link from 'next/link';

export default function ListOfCoas(){
    const selector= useSelector(
        (state: any) => state.coas
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(!selector.coas.length){
            dispatch(fetchAllCoas() as any);
        }
    }, [dispatch]);

    console.log(selector.coas)
    // Refresh
    const handleRefresh = () => {
        dispatch(fetchAllCoas() as any);
    }
    // Delete
    const handleDelete = (e: any, id:any) => {
        console.log(e, id)
        e.preventDefault()
        dispatch(deleteCoa(id) as any)
    }
    // Navigation Bar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    
    const totalPages = Math.ceil(selector.coas.length / itemsPerPage);
    
    const currentItems = selector.coas.slice(
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
                <div className="flex justify-end gap-4">
                    <button className='text-black' onClick={handleRefresh}>Refresh</button>
                    <Link href="/modules/finance_and_accounting/account_management/coa/addCoa" className="mr-5 bg-green-500 border p-2 rounded-lg">New Coa</Link>
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
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="text-black border px-4 py-2">Nomor Coa</th>
                                    <th className="text-black border px-4 py-2">Nama Coa</th>
                                    <th className="text-black border px-4 py-2">Saldo Normal</th>
                                    <th className="text-black border px-4 py-2">Grup Coa</th>
                                    <th className="text-black border px-4 py-2">Tipe Akun</th>
                                    <th className="text-black border px-4 py-2">Kode Perusahaan</th>
                                    <th className="text-black border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map((coa: any) => (
                                    <tr key={coa.id}>
                                        <td className="text-black text-center border px-4 py-2">{coa.Coa_Number}</td>
                                        <td className="text-black text-center border px-4 py-2">{coa.Coa_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{coa.Coa_Normal_Balance}</td>
                                        <td className="text-black text-center border px-4 py-2">{coa.GlCoaGroup.CG_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{coa.GlCoaGroup.GlAccountType.AT_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{coa.wc_id}</td>
                                        <td className="border px-4 pt-4 pb-2 text-center">
                                            <button value={coa.id} onClick ={e=>handleDelete(e,coa.id)} className="text-red-500 mr-2">Delete</button>
                                            <Link href={"/modules/finance_and_accounting/account_management/coa/"+coa.id} className="text-blue-500">Edit</Link>
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