import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';

import { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import {useSelector, useDispatch} from "react-redux"
import { fetchAllBudgetControls } from '@/pages/api/general_ledger/budget_control/budgetControlSlice';
import Link from 'next/link';

export default function BudgetControls(){
    const selector= useSelector(
        (state: any) => state.budgetcontrols
    );
    const dispatch = useDispatch();
    useEffect(() => {
        if(!selector.budgetcontrols.length){
            dispatch(fetchAllBudgetControls() as any);
        }
    }, [dispatch]);
    console.log(selector.budgetcontrols)
    // Navigation Bar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';

    selector.budgetcontrols && selector.budgetcontrols.map((budgetcontrol: any) => console.log(budgetcontrol))
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
                                    <th className="text-black px-4 py-2">Coa Number</th>
                                    <th className="text-black px-4 py-2">Coa Name</th>
                                    <th className="text-black px-4 py-2">Periode Akuntansi</th>
                                    <th className="text-black px-4 py-2">Jumlah Kontrol Budget</th>
                                    <th className="text-black px-4 py-2">Entity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selector.budgetcontrols && selector.budgetcontrols.map((budgetcontrol: any) => (
                                    <tr key={budgetcontrol.id}>
                                        <td className="text-black text-center border px-4 py-2">{budgetcontrol.GlCoa.Coa_Number}</td>
                                        <td className="text-black text-center border px-4 py-2">{budgetcontrol.GlCoa.Coa_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{budgetcontrol.GlAccountingPeriod.AP_Name}</td>
                                        <td className="text-black text-center border px-4 py-2">{budgetcontrol.BC_Amount}</td>
                                        <td className="text-black text-center border px-4 py-2">{budgetcontrol.BC_Entity}</td>
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