import React, {useEffect,useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchAllCoas,fetchCoaById } from "@/pages/api/general_ledger/coa/coaSlice";

interface JournalFormProps {
    title: string,
    data: any,
    handleCancel : any,
    handleSubmit : any,
    handleChangeJournal : any,
    handleAddJournalDetail: any,
    handleDeleteRow: any,
    handleChangeJournalDetail: any,
}

export default function JournalForm(props: JournalFormProps){

    const dispatch = useDispatch()
    const selector_coas = useSelector(
        (state: any) => state.coas
    );
    useEffect(() => {
        if(!selector_coas.coas.length){
            dispatch(fetchAllCoas() as any);
        }
    }, [dispatch]);

    console.log(props.data)

    const [selectIdCoa, setSelectIdCoa] = useState(1)
    const handleSelectedCoa=(e:any)=>{
        console.log(e.target.value)
        setSelectIdCoa(e.target.value)
    }

    return(
        <div className="flex flex-col p-5">
            <h3 className="text-black pb-6">{props.title}</h3>
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
                <div className="flex mb-4 space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="Journal_Post_Date" className="text-black block mb-2">Tanggal</label>
                        <DatePicker 
                            className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                            selected={props.data.Journal_Post_Date} 
                            name= "Journal_Post_Date"
                            onChange={props.handleChangeJournal}
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="Journal_Ref" className="text-black block mb-2">Nomor Jurnal</label>
                        <input type="text"  value={props.data.Journal_Ref} onChange={props.handleChangeJournal} name="Journal_Ref" id="Journal_Ref" className="w-full px-3 py-2 border rounded bg-white shadow-inner"/>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="id_transaction_type" className="text-black">Journal Transaction Type</label>
                    <input type="text"  name="Journal_Ref" id="Journal_Ref" className="w-full px-3 py-2 border rounded bg-slate-200 shadow-inner" value={"Jurnal Umum"} readOnly={true}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="Journal_Notes" className="text-black">Journal Notes</label>
                    <textarea name="Journal_Notes" value={props.data.Journal_Notes}id="Journal_Notes" onChange={props.handleChangeJournal} className="border bg-white shadow-inner text-black rounded-md p-1 h-52"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-black">Journal Item Details</h3>
                    <hr className="border border-black mb-2" />
                    <label className="text-black">Akun Perkiraan</label>
                    <select onClick={handleSelectedCoa} name="id_coa" id="id_coa" className="border bg-white shadow-inner text-black rounded-md p-1">
                        {selector_coas.coas && selector_coas.coas.map((coa:any) => (
                            <option value={coa.id} key={coa.id}>{coa.Coa_Number + " "+ coa.Coa_Name}</option>
                        ))}
                    </select>
                    <button
                        className="bg-green-500 border my-4 p-2 rounded-lg w-fit"
                        type="button"
                        onClick={e => props.handleAddJournalDetail(e,selectIdCoa)}
                        >
                        Tambah Item Journal
                    </button>
                </div>
                <div className="flex flex-col gap-1">
                    <table>
                        <thead className='bg-blue-100'>
                            <tr>
                                <th className="text-black border border-gray-500 px-3 py-1">Kode</th>
                                <th className="text-black border border-gray-500 px-3 py-1">Nama</th>
                                <th className="text-black border border-gray-500 px-3 py-1">Debit</th>
                                <th className="text-black border border-gray-500 px-3 py-1">Kredit</th>
                                <th className="text-black border border-gray-500 px-3 py-1">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.journaldetails.map((data:any, id:any)=>(
                                <tr key={id}>
                                    <td className="text-black border border-gray-500 px-3 py-1">{data.Coa_Number}</td>
                                    <td className="text-black border border-gray-500 px-3 py-1">{data.Coa_Name}</td>
                                    <td className="text-black border border-gray-500 px-3 py-1">
                                    <input
                                        type="text"
                                        name="debit"
                                        placeholder={data.JD_Debit}
                                        onChange={e=>props.handleChangeJournalDetail(e,id)}
                                        className=" bg-white outline-none text-right w-full"
                                        />
                                    </td>
                                    <td className="text-black border border-gray-500 px-3 py-1">
                                    <input
                                        type="text"
                                        name="kredit"
                                        placeholder={data.JD_Credit}
                                        onChange={e=>props.handleChangeJournalDetail(e,id)}
                                        className=" bg-white outline-none text-right w-full"
                                        />
                                    </td>
                                    <td className="border border-gray-500 px-4 pt-4 pb-2 text-center">
                                        <button type="button" onClick={e=>props.handleDeleteRow(e,id)} className="text-red-500 mr-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-1 my-10">
                    <button onClick={props.handleCancel} className="bg-red-500 px-3 py-1 rounded">Cancel</button>
                    <button type="submit" onClick={props.handleSubmit} className="bg-green-500 px-3 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}