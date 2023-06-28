import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import { Pagination } from '../../../../../components/pagination';


import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchAllCoaGroups } from "@/pages/api/general_ledger/coa_group/coaGroupSlice";
import Link from 'next/link';


export default function ListOfCoaGroups(){
    const selector= useSelector(
        (state: any) => state.coagroups
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if(!selector.coagroups.length){
            dispatch(fetchAllCoaGroups() as any);
        }
    }, [dispatch]);

    console.log(selector.coagroups);

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

    const totalPages = Math.ceil(selector.coagroups.length / itemsPerPage);

    const currentItems = selector.coagroups.slice(
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
                    <Link href="/modules/finance_and_accounting/account_management/create_coa_group" className="mr-5 bg-green-500 border p-2 rounded-lg">New Coa Group</Link>
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
                                    <th className="text-black border border-slate-300 px-4 py-2">Coa Group Code</th>
                                    <th className="text-black border border-slate-300 px-4 py-2">Coa Group Name</th>
                                    <th className="text-black border border-slate-300 px-4 py-2">Account Type</th>
                                    <th className="text-black border border-slate-300 px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map((coagroup: any) => (
                                    <tr key={coagroup.id}>
                                        <td className="text-black text-center border px-4 py-2">{coagroup.CG_Code}</td>
                                        <td className="text-black text-center border px-4 py-2">{coagroup.CG_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{coagroup.GlAccountType.AT_Name}</td>
                                        <td className="border px-4 pt-4 pb-2 text-center">
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