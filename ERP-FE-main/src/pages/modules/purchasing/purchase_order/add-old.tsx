import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItems } from '@/pages/api/inventory/item/itemSlice';
import { fetchAllPurchaseRequest } from '@/pages/api/inventory/purchaseRequest/purchaseRequestSlice';
import { fetchPurchaseRequest } from '@/pages/api/inventory/purchaseRequest/purchaseRequestSlice';
import { fetchAllSuppliers } from '@/pages/api/inventory/supplier/supplierSlice';
import { createPurchaseOrder } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { checkBudget } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function NewPurchaseOrderPage() {
  const selectorItem = useSelector((state: any) => state.items);
  const selectorPR = useSelector((state: any) => state.purchaseRequest);
  const selectorSupplier = useSelector((state: any) => state.supplier);
  const selectorPO = useSelector((state: any) => state.purchaseOrder);

  const [currentPurchaseRequest, setCurrentPurchaseRequest] = useState('');
  const tempPR = currentPurchaseRequest;

  const initialItemState = {
    id_item: '',
    quantity: 0,
    name : '',
    unit: '',
    selected: true,
  };

  let allItems = [initialItemState];

  const [totalSpend, setTotalSpend] = useState(0);

  if (selectorPR.purchaseRequest) {
    let total = 0;
    selectorPR.purchaseRequest.InPurchaseRequestDetails.map(
      (item: any, index: number) => {
        allItems = [];
        allItems.push({
          id_item: item.InItem.id,
          quantity: item.quantity,
          name: item.InItem.name,
          unit: item.InItem.buy_unit,
          selected: true,
        });
      },
    );
  }

  const initialState = {
    id_purchase_request: 'PR202304050001',
    id_supplier: '',
    items: allItems,
  };

  if (selectorSupplier.suppliers.length > 0) {
    initialState.id_supplier = selectorSupplier.suppliers[0].id;
  }

  const [formData, setFormData] = useState(initialState);

  const changeItemInForm = (prDetaills: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      items: [],
    }));
    //update attribute items with new value pr details
    prDetaills.map((item: any, index: number) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        items: [
          ...prevFormData.items,
          {
            id_item: item.InItem.id,
            quantity: item.quantity,
            name: item.InItem.name,
            unit: item.InItem.buy_unit,
            selected: true,
          },
        ],
      }));
    });
    console.log(formData);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === 'id_purchase_request') {
      const search = {
        id: e.target.value,
      };
      dispatch(fetchPurchaseRequest({ search }) as any).then((data: any) => {
        changeItemInForm(data.payload.data.InPurchaseRequestDetails);
      });
      setCurrentPurchaseRequest(e.target.value);
    }
  };

  const handleItemChange = (e: any) => {
    const index = e.target.name.split('-')[1] as number;
    const name = e.target.name.split('-')[0] as string;
    const value = e.target.value;
    const newFormData = { ...formData };
    const item = newFormData.items[index];
    // if(name === "item") {
    //     item.id_item = value;
    // }
    if (name === 'quantity') {
      item.quantity = value;
    } else if (name === 'selected') {
      item.selected = !item.selected;
    }
    newFormData.items[index] = item;
    setFormData(newFormData);
  };

  const formSubmitData = () => {
    const newFormData = { ...formData };
    newFormData.items = newFormData.items.filter(
      (item: any) => item.selected === true,
    );
    //remove selected
    newFormData.items.map((item: any) => {
      delete item.selected;
    });
    return newFormData;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = formSubmitData();
    console.log(formData);
    dispatch(createPurchaseOrder(formData) as any)
    .then(
      (data: any) => {
        if(selectorPO.status === 'success') {
          toast.success('Purchase Order Created');
        }
        else if(selectorPO.status === 'failed') {
          toast.error('Purchase Order Failed to Create');
        }
        else if(selectorPO.status === 'loading') {
          toast.loading('Loading...');
        }
      }
    )
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/purchasing/purchase_order');
  };

  const handleAddItem = (e: any) => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      items: [...prevFormData.items, initialItemState],
    }));
  };

  useEffect(() => {
    dispatch(fetchAllSuppliers() as any);
  }, [dispatch]);

  useEffect(() => {
      dispatch(fetchAllPurchaseRequest() as any);
  }, [dispatch]);

  useEffect(()=> {
    dispatch(checkBudget() as any)
  }, [dispatch])

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
        <div className="flex flex-col p-5 gap-3">
          <div className='flex flex-col gap-3'>
            <h3 className="text-black">Buat Pelaksanaan Pembelian Baru</h3>
            <hr className="border border-black mb-8" />
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5'>
              {
                selectorPO.checkBudget && (
                  <div className='flex flex-col gap-3'>
                    <h3 className="text-black">Budget Saat Ini</h3>
                    <p>Rp. {selectorPO.checkBudget.total}</p>
                    {/* <p style={{ textAlign: 'right' }}>
                      {selectorPO.checkBudget.total.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR'
                      })}
                    </p> */}
                  </div>
                )
              }
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Total Pengeluaran</h3>
                <p>Rp. </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className="text-black">Status</h3>
                <p className='px-2 py-1 bg-green-500 rounded text-white'>Saldo Cukup</p>
              </div>
            </div>            
            <hr className="border border-black mb-8" />
          </div>      

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <label className="text-black">Cari Purchase Request</label>
              <select
                className="bg-white text-black border border-black"
                name="id_purchase_request"
                onChange={handleChange}
                value={formData.id_purchase_request}
              >
                {selectorPR.purchaseRequests &&
                  selectorPR.purchaseRequests.map((pr: any) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.id}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-row gap-3">
              <label className="text-black">Cari Supplier</label>
              <select
                className="bg-white text-black border border-black"
                name="id_supplier"
                id=""
                onChange={handleChange}
              >
                {selectorSupplier.suppliers &&
                  selectorSupplier.suppliers.map((supplier: any) => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.id} - {supplier.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* {
                    formData.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Id Item :</p>
                                <p className="text-black">{item.id_item}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <label className="text-black">Quantity</label>
                                <input type="number" name={"quantity-"+index} onChange={handleChange} className="bg-white text-black border border-black" value={item.quantity}/>
                            </div>
                            {
                                selectorItem.items && (
                                    <div className="flex flex-row gap-3">
                                        <label className="text-black">Cari Item</label>
                                        <select name={"item-"+index} onChange={handleChange} value={item.id_item} className="bg-white text-black border border-black" >
                                            {
                                                selectorItem.items.data && selectorItem.items.data.map((item: any) => (
                                                    <option key={item.id_item} value={item.id}>{item.id + " - " + item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>                                    
                                )
                            }    
                            <hr className="border border-black" />                        
                        </div>
                    ))
                } */}

            {formData.items.map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-3">
                {item.selected ? (
                  <input
                    type="checkbox"
                    name={'selected-' + index}
                    checked
                    onChange={handleItemChange}
                  ></input>
                ) : (
                  <input
                    type="checkbox"
                    name={'selected-' + index}
                    onChange={handleItemChange}
                  ></input>
                )}

                {/* <div className="flex flex-row gap-3">
                                <p className="text-black font-bold">Nama Item :</p>
                                <p className="text-black">{item.InItem.name}</p>
                            </div> */}
                <div className="flex flex-row gap-3">
                  <p className="text-black font-bold">Id Item :</p>
                  <p className="text-black">{item.id_item}</p>
                  {/* <input type="number" name={"id_item-"+index} className="bg-white text-black border border-black" value={item.InItem.id}/> */}
                </div>
                <div className="flex flex-row gap-3">
                  <p className="text-black font-bold">Nama Item :</p>
                  <p className="text-black">{item.name}</p>
                  {/* <input type="number" name={"name-"+index} className="bg-white text-black border border-black" value={item.InItem.id}/> */}
                </div>
                <div className="flex flex-row gap-3">
                  <label className="text-black">Quantity</label>
                  <input
                    type="number"
                    name={'quantity-' + index}
                    onChange={handleItemChange}
                    className="bg-white text-black border border-black"
                    value={item.quantity}
                  />
                  <p className="text-black">{item.unit}</p>
                </div>
                <hr className="border border-black" />
              </div>
            ))}
            <button
              onClick={handleAddItem}
              className="bg-green-500 border p-2 rounded-lg w-fit"
            >
              Tambah Item
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="bg-red-500 border p-2 rounded-lg w-fit"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 border p-2 rounded-lg w-fit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
