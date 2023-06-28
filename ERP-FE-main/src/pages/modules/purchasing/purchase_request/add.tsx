import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { use, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItems } from '@/pages/api/inventory/item/itemSlice';
import { getItemById } from '@/pages/api/inventory/item/itemSlice';
import { createPurchaseRequest } from '@/pages/api/inventory/purchaseRequest/purchaseRequestSlice';
import { checkBudget } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function NewPurchaseRequestPage() {
  const selector = useSelector((state: any) => state.items);
  const selectorPR = useSelector((state: any) => state.purchaseRequest);
  const selectorPO = useSelector((state: any) => state.purchaseOrder);

  const initialItemState = {
    id_item: '',
    quantity: 0,
    name: '',
    unit: '',
    price: 0,
  };

  const initialState = {
    items: [initialItemState],
  };

  const [formData, setFormData] = useState(initialState);

  const [totalSpend, setTotalSpend] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();

  const sumTotalPrice = () => {
    let sum = 0;
    formData.items.forEach((item: any) => {
      sum += item.price * item.quantity;
    });
    return sum;
  }

  const sumTax = () => {
    return sumTotalPrice() * 0.11;
  }

  const addSpend = (itemQty:number, id_item: string ) => {
    if(selector.items){
      const item = selector.items.find((obj: any) => {
        return obj.id == id_item;
      });
      const price = itemQty * item.buy_price;
      const currTotalSpend = price;
      setTotalSpend(currTotalSpend)
    }
  }

  const isBudgetEnough = (estimationPrice: number) => {
    if(selectorPO.checkBudget){
      const total = parseInt(selectorPO.checkBudget.total);
      if(estimationPrice < total){
        return true;
      }
      else{
        return false;
      }
    }
    return false;
  }

  const handleChange = (e: any) => {
    const index = e.target.name.split('-')[1] as number;
    const name = e.target.name.split('-')[0] as string;
    const value = e.target.value;
    const newFormData = { ...formData };
    const item = newFormData.items[index];
    if (name === 'item') {
      item.id_item = value;
      const search = {
        id: value,
      }
      dispatch(getItemById({search}) as any);
      const findItem = selector.items.find((obj: any) => {
        return obj.id == value;
      });
      item.name = findItem.name;
      item.unit = findItem.buy_unit;
      item.price = findItem.buy_price;
    } else if (name === 'quantity') {
      const targetQty = parseInt(value) || 0;
      item.quantity = value;
      const currentIdItem = formData.items[index].id_item;
      addSpend(value as number, currentIdItem)
    }
    newFormData.items[index] = item;
    setFormData(newFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    toast.promise(
      dispatch(createPurchaseRequest(formData) as any),
      {
        loading: 'Loading',
        success: 'Berhasil membuat permintaan pembelian baru',
        error: 'Gagal membuat permintaan pembelian baru',
      }
    )
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/purchasing/purchase_request');
  };

  const handleAddItem = (e: any) => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      items: [...prevFormData.items, initialItemState],
    }));
  };

  useEffect(() => {
      dispatch(fetchAllItems() as any);
    }, [dispatch]);
  
  useEffect(() => {
    dispatch(checkBudget() as any);
  }, [dispatch]);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Purchasing</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <Toaster />
        <div className="flex flex-col p-5">
          <h3 className="text-black">Buat Permintaan Pembelian Baru</h3>
          <hr className="border border-black mb-8" />

          <div className='flex flex-col gap-3'>
            <div className='flex gap-5'>
              {
                selectorPO.checkBudget && (
                  <div className='flex flex-col gap-3'>
                    <h3 className="text-black">Budget Saat Ini</h3>
                    {/* <p>Rp. {selectorPO.checkBudget.total}</p> */}
                    <p style={{ textAlign: 'right' }}>
                      {selectorPO.checkBudget.total.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                      })}
                    </p>
                  </div>
                )
              }
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Status</h3>
                {
                  isBudgetEnough(sumTotalPrice() + sumTax())? (
                    <p className='px-2 py-1 bg-green-500 rounded text-white'>Saldo Cukup</p>
                  ) : (
                    <p className='px-2 py-1 bg-red-500 rounded text-white'>Saldo Tidak Cukup</p>
                  )
                }
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Total Harga</h3>
                {/* <p>Rp. {sumTotalPrice()}</p> */}
                <p style={{ textAlign: 'right' }}>
                      {sumTotalPrice().toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                      })}
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Total Pajak</h3>
                {/* <p>Rp. {sumTax()}</p> */}
                <p style={{ textAlign: 'right' }}>
                      {sumTax().toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                      })}
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Total Pengeluaran</h3>
                {/* <p>Rp. {sumTotalPrice() + sumTax()}</p> */}
                <p style={{ textAlign: 'right' }}>
                    {`${(sumTotalPrice() + sumTax()).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                    })}`}
                </p>
              </div>
            </div>                      
            <hr className="border border-black mb-8" />
          </div>      

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {
                    formData.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Id Item :</p>
                                <p className="text-black">{item.id_item}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Name Item :</p>
                                <p className="text-black">{item.name}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <label className="text-black">Quantity</label>
                                <input type="number" name={"quantity-"+index} onChange={handleChange} className="bg-white text-black border border-black" value={item.quantity}/>
                                <p className='text-black'>{item.unit}</p>
                            </div>
                            {
                                selector.items && (
                                    <div className="flex flex-row gap-3">
                                        <label className="text-black">Cari Item</label>
                                        <select name={"item-"+index} onChange={handleChange} value={item.id_item} className="bg-white text-black border border-black" >
                                            {
                                                selector.items && selector.items.map((item: any) => (
                                                    <option key={item.id_item} value={item.id}>{item.id + " - " + item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>                                    
                                )
                            }
                            <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Harga per Item :</p>
                                <p className="text-black">Rp. {item.price} / {item.unit}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Harga Total :</p>
                                {/* <p className="text-black">Rp. {item.price*item.quantity}</p> */}
                                <p style={{ textAlign: 'right' }}>
                                    {`${(item.price * item.quantity).toLocaleString('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR'
                                    })}`}
                                </p>
                                
                            </div>
                            <hr className="border border-black" />                        
                        </div>
                    ))
                }
                <button onClick={handleAddItem} className="bg-blue-300 border p-2 rounded-lg w-fit">Tambah Item</button>
                <div className="flex gap-3">
                    <button onClick={handleCancel} className="bg-red-500 border p-2 rounded-lg w-fit">Cancel</button>
                    <button type="submit" className="bg-green-500 border p-2 rounded-lg w-fit">Submit</button>
                </div>
                
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
