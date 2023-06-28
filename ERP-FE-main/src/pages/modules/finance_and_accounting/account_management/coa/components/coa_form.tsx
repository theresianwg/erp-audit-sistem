import {fetchAllCoaGroups} from "../../../../../api/general_ledger/coa_group/coaGroupSlice"
import {fetchAllAccountTypes} from "../../../../../api/general_ledger/account_type/accountTypeSlice"
import {useSelector, useDispatch} from "react-redux"
import React, {useEffect} from "react"

interface CoaFormProps {
    title: string,
    handleCancel : any,
    handleSubmit : any,
    handleChange : any,
}

export default function CoaForm(props: CoaFormProps){
    const selector_coagroups= useSelector(
        (state: any) => state.coagroups
    );
    const selector_accounttypes= useSelector(
        (state: any) => state.accounttypes
    );
    
    const dispatch = useDispatch()
    useEffect(() => {
        if(!selector_coagroups.coagroups.length){
            dispatch(fetchAllCoaGroups() as any);
        }
        if(!selector_accounttypes.accounttypes.length){
            dispatch(fetchAllAccountTypes() as any);
        }
    }, [dispatch]);

    return(
        <div className="flex flex-col p-5">
            <h3 className="text-black">{props.title}</h3>
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="Coa_Name" className="text-black">Coa Name</label>
                    <input type="text" placeholder="Cash Bank" name="Coa_Name" id="Coa_Name" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="Coa_Normal_Balance" className="text-black">Coa Normal Balance</label>
                    <select name="Coa_Normal_Balance" id="Coa_Normal_Balance" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1">
                        <option value="D">Debit</option>
                        <option value="K">Kredit</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="id_coa_group" className="text-black">Coa Group</label>
                    <select name="id_coa_group" id="id_coa_group" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1">
                        {selector_coagroups.coagroups && selector_coagroups.coagroups.map((coagroup:any) => (
                            <option value={coagroup.id} key={coagroup.id}>{coagroup.CG_Name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="id_account_type" className="text-black">Account Type</label>
                    <select name="id_account_type" id="id_account_type" onChange={props.handleChange} className="border border-black bg-gray-300 text-black rounded-md p-1">
                        {selector_accounttypes.accounttypes && selector_accounttypes.accounttypes.map((accounttypes:any) => (
                            <option value={accounttypes.id} key={accounttypes.id}>{accounttypes.AT_Name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-1">
                    <button onClick={props.handleCancel} className="bg-red-500 px-3 py-1 rounded">Cancel</button>
                    <button type="submit" onClick={props.handleSubmit} className="bg-green-500 px-3 py-1 rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}