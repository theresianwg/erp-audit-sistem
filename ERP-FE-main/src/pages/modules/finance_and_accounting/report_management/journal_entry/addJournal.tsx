import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';

import { newJournal } from '@/pages/api/general_ledger/journal';
import { newJournalDetail } from '@/pages/api/general_ledger/journal_detail';
import { fetchCoaById } from '@/pages/api/general_ledger/coa/coaSlice';

import React, {useState} from "react"
import { useRouter } from "next/router"
import JournalForm from "./components/journal_form";
import {useDispatch} from "react-redux"

export default function AddCoa(){
    const dispatch = useDispatch();
    const router = useRouter()

    //Data Management
    const initialStateJournalDetail = {
        JD_Credit: 0, 
        JD_Debit: 0, 
        id_coa: 1,
        id_journal: 3,

        //Untuk Penamaan Tabel
        Coa_Name: "Kas Kecil",
        Coa_Number: 110101
    }
    let allJournalDetails = [initialStateJournalDetail];

    const initialStateJournal = {
        Journal_Code: "JV-2023-06-00002", 
        Journal_Ref: "JV-2023-06-00002",
        Journal_Post_Date: new Date(), 
        Journal_Notes: "",
        Journal_Amount: 0, 
        id_accounting_period:1,
        id_numbering:13,
        journaldetails: allJournalDetails,
    }
    const [formDataJournal, setFormDataJournal] = useState(initialStateJournal);

    // Button Handle
    const handleChangeJournal = (e: any) => {
        setFormDataJournal(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
        
    }
    const handleChangeJournalDetail = (e:any, index:any) =>{
        const updatedJournalDetails = {...formDataJournal};
        const journaldetail = updatedJournalDetails.journaldetails[index];
        if (e.target.name === 'kredit') {
            journaldetail.JD_Credit = e.target.value;
        } else if (e.target.name === 'debit') {
            journaldetail.JD_Debit = e.target.value;
        }
        updatedJournalDetails.journaldetails[index] = journaldetail;
        console.log(updatedJournalDetails.journaldetails[index])
        setFormDataJournal(updatedJournalDetails);
    }
    const deleteRow = (e:any,index:any) => {
        e.preventDefault()
        const updatedJournalDetails = {...formDataJournal};
        const newjournaldetail = updatedJournalDetails.journaldetails.splice(index,1);
        console.log(newjournaldetail)
        console.log(index)
        setFormDataJournal(prevFormData=>({
            ...prevFormData,
            journaldetails:[
                ...prevFormData.journaldetails,
            ]
        }));
    };
    const handleCancel = (e: any) => {
        e.preventDefault();
        router.push("/modules/finance_and_accounting/report_management/journal_entry")
    }
    const handleJournalDetail = (coa:any)=>{
        setFormDataJournal(prevFormData => ({
        ...prevFormData,
        journaldetails: [
            ...prevFormData.journaldetails,
            {
                JD_Credit: 0, 
                JD_Debit: 0, 
                id_coa: coa.id,
                id_journal: 3,
                Coa_Name: coa.Coa_Name,
                Coa_Number: coa.Coa_Number
            }
        ],
        }))
    }
    const handleAddJournalDetail = (e: any, IdCoa:any) => {
        dispatch(fetchCoaById(IdCoa) as any).then((data:any)=>{
            handleJournalDetail(data.payload.data.data)
        })
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const DataJournal = {...formDataJournal};
        let Total = 0
        DataJournal.journaldetails.map((data: any) => {
            Total += ( data.JD_Debit - data.JD_Credit)
            DataJournal.Journal_Amount += parseInt(data.JD_Debit)
        })
        console.log(Total, DataJournal.Journal_Amount)
        if(Total == 0){
            const { journaldetails, ...selectedPropertiesJournal } = formDataJournal;
            const selectedJournalDetails = formDataJournal.journaldetails.map(({ Coa_Name, Coa_Number, ...rest }) => rest);
            console.log(selectedPropertiesJournal);
            console.log(selectedJournalDetails);
            dispatch(newJournal(selectedPropertiesJournal) as any);
            dispatch(newJournalDetail(formDataJournal.journaldetails) as any)
            router.push("/modules/finance_and_accounting/report_management/journal_entry")
        }
    };

    // SideBar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className="flex flex-col w-full gap-3">
                <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                    <JournalForm title="New Journal" handleChangeJournalDetail={handleChangeJournalDetail} handleDeleteRow={deleteRow}handleChangeJournal={handleChangeJournal} handleSubmit={handleSubmit} handleAddJournalDetail={handleAddJournalDetail}  data={formDataJournal} handleCancel={handleCancel}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}