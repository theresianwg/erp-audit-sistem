import React, {useState} from "react"
import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import ReportForm from "../components/report_form";

import {useDispatch} from "react-redux"
import { useRouter } from "next/router"

export default function CreateBSReport(){
    const initialState = {
        start_date: new Date(),
        end_date: new Date(),
        Coa_Name: 'New Coa Item',
        Coa_Normal_Balance: 'D',
    }

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const router = useRouter()

    const handleChange = (e: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        // dispatch(newCoa(formData) as any)
        router.push({
            pathname: "/modules/finance_and_accounting/report_management/income_statement",
            // query: formData
        })
    }
    const handleCancel = (e: any) => {
        e.preventDefault();
        router.push("/modules/finance_and_accounting/report_management/")
    }

    // SideBar
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
            <div className="flex flex-col w-full gap-3">
                <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                    <ReportForm title="Income Statement Report" handleCancel={handleCancel} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}