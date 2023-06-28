import Head from 'next/head';
import Navbar from '../../../../../../components/navbar';
import Footer from '../../../../../../components/footer';
import ModuleSidebar from '../../../../../../components/module_sidebar';

import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { fetchJournalDetailByJournal} from "@/pages/api/general_ledger/journal/journalSlice";
import { useRouter } from 'next/router';

export default function JournalDetails(){
    const router = useRouter()
    const code = router.query

    const dispatch = useDispatch();
    const selector= useSelector(
        (state: any) => state.journals
    );
    useEffect(() => {
        if(!selector.journaldetails.length && code){
            dispatch(fetchJournalDetailByJournal(code) as any);
        }
    }, [dispatch]);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';

    const journals = selector.journaldetails.GlJournalDetails
    console.log(journals);
    return(
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
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
                                    <th className="text-black px-4 py-2">Kode Akun Perkiraan</th>
                                    <th className="text-black px-4 py-2">Akun Perkiraan</th>
                                    <th className="text-black px-4 py-2">Debit</th>
                                    <th className="text-black px-4 py-2">Kredit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {journals && journals.map((journal: any) => (
                                    <tr key={journal.id}>
                                        <td className="text-black text-center border px-4 py-2">{journal.GlCoa.Coa_Number }</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.GlCoa.Coa_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.JD_Debit}</td>
                                        <td className="text-black text-center border px-4 py-2">{journal.JD_Credit}</td>
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