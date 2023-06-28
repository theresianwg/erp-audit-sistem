import {useSelector, useDispatch} from "react-redux"
import React, {useEffect} from "react"
import {fetchAllCoas} from "../../../../api/general_ledger/coa/coaSlice"

interface ReportFormProps {
    title: string,
    handleCancel : any,
    handleSubmit : any,
    handleChange : any,
}

export default function ReportForm(props: ReportFormProps){
    const selector_coa = useSelector(
        (state:any) => state.coas
    );
    const dispatch = useDispatch()
    useEffect(() => {
        if(!selector_coa.coas.length){
            dispatch(fetchAllCoas() as any);
        }
    }, [dispatch]);

    console.log(selector_coa)
    return(
        <div className="flex flex-col p-5">
            <h2 className="text-black">{props.title}</h2>
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
                <div className="pt-4 flex flex-col gap-1">
                    <h3 className="text-lg">Tanggal</h3>
                    <span className="border-b-2 border-gray-300"></span>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="start_date" className="text-black">Start Date</label>
                    <input type="date" name="start_date" id="start_date" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="end_date" className="text-black">End Date</label>
                    <input type="date" name="end_date" id="end_date" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1"/>
                </div>
                <div className="pt-4 flex flex-col gap-1">
                    <h3 className="text-lg">Parameter Tambahan</h3>
                    <span className="border-b-2 border-gray-300"></span>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="end_date" className="text-black">Cabang</label>
                    <div className="border border-black bg-gray-300 text-black rounded-md p-1 h-8 inline-block cursor-pointer relative">

                    </div>
                </div>
                <div className="block m-0">

                </div>
                <div className="flex gap-1">
                    <button onClick={props.handleCancel} className="bg-red-500 px-3 py-1 rounded">Cancel</button>
                    <button type="submit" onClick={props.handleSubmit} className="bg-green-500 px-3 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}