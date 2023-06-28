import Head from 'next/head';
import Navbar from '../../../../../components/navbar';
import Footer from '../../../../../components/footer';
import ModuleSidebar from '../../../../../components/module_sidebar';
import {updateCoa, fetchCoaById} from "../../../../api/general_ledger/coa/coaSlice"

import React, {useState, useEffect} from "react"
import { useRouter } from "next/router"
import CoaFormEdit from "./components/coa_form_edit";
import {useDispatch,useSelector} from "react-redux"

export default function UpdateCoa(){
    const selector= useSelector(
        (state: any) => state.coas
    );
    const dispatch = useDispatch();

    // Button Handle
    const router = useRouter()
    const id = router.query.id;
    const initialState = {
        id_coa_group: "",
        id_account_type: "",
        Coa_Name: "",
        Coa_Number: "",
        Coa_Normal_Balance: "",
        Coa_Opening_Balance: "",
        Coa_Description: "tes"
    }
    const [formData, setFormData] = useState(initialState);
    
    console.log(selector.coa)
    useEffect(() => {
        if(!selector.coa || selector.coa.id != id){
            console.log('masuk');
            dispatch(fetchCoaById(id) as any);
        }
    }, [dispatch]);
    useEffect(() => {
        if (selector.coa && selector.coa.data && selector.coa.data.id == id) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                id_coa_group: selector.coa.data.id_coa_group,
                id_account_type: selector.coa.data.id_account_type,
                Coa_Name: selector.coa.data.Coa_Name,
                Coa_Number: selector.coa.data.Coa_Number,
                Coa_Normal_Balance: selector.coa.data.Coa_Normal_Balance,
                Coa_Opening_Balance: selector.coa.data.Coa_Opening_Balance,
                Coa_Description: selector.coa.data.Coa_Description
        }));
        }
    }, [selector.coa, id, setFormData]);

    const handleChange = (e: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
    }
    const updateData = {
        "id": id,
        "data":formData
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(updateCoa(updateData) as any)
        router.back()
    }
    const handleCancel = (e: any) => {
        e.preventDefault();
        router.push("/modules/finance_and_accounting/account_management/coa")
    }

    // SideBar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const mainContentClass = sidebarOpen ? 'ml-64' : '';
    console.log(formData)
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Head>
                <title>ITS ERP - Account Payable</title>
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <ModuleSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <div className="flex flex-col w-full gap-3">
                <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
                    <CoaFormEdit coa={formData} title= "Edit Coa" handleCancel={handleCancel} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}