import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';


import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchAllJournals} from "@/pages/api/general_ledger/journal/journalSlice";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function JournalEntries(){
    const router = useRouter()
    const selector= useSelector(
        (state: any) => state.journals
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if(!selector.journals.length){
            dispatch(fetchAllJournals() as any);
        }
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchAllJournals() as any);
    }
    console.log(selector.journals);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';

    //Handle Click
    const handleJournalDetail = (e: any, code:any) => {
        e.preventDefault();
        router.push(`/modules/finance_and_accounting/report_management/journal_entry/detailJournal/${code}`)
    }
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                <div className="flex justify-end">
                    <button type="button" className='text-black mr-6' onClick={handleRefresh}>Refresh</button>
                    <Link href="/modules/finance_and_accounting/report_management/journal_entry/addJournal" className="mr-5 bg-green-500 border p-2 rounded-lg">Buat Jurnal</Link>
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
                                    <th className="text-black px-4 py-2">Nomor Jurnal</th>
                                    <th className="text-black px-4 py-2">Nomor Transaksi</th>
                                    <th className="text-black px-4 py-2">Tanggal</th>
                                    <th className="text-black px-4 py-2">Keterangan</th>
                                    <th className="text-black px-4 py-2">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selector.journals && selector.journals.map((journal: any) => (
                                    <tr key={journal.id}>
                                        <td className="text-black text-center border px-4 py-2 cursor-pointer transition-colors hover:text-white hover:bg-gray-500" onClick={(e)=>handleJournalDetail(e,journal.Journal_Code)} >{journal.Journal_Code}</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.Journal_Ref}</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.Journal_Post_Date}</td>
                                        
                                        <td className="text-black text-center border px-4 py-2">{journal.Journal_Notes}</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.Journal_Amount}</td>
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