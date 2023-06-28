import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItems } from '@/pages/api/inventory/item/itemSlice';
import { fetchAllReceiveItems } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import { fetchAllPurchaseOrder } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { fetchPurchaseOrder } from '@/pages/api/inventory/purchaseOrder/purchaseOrderSlice';
import { createReceiveItem } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function NewReceiveItemPage() {
  const selectorPO = useSelector((state: any) => state.purchaseOrder);
  const selectorRCI = useSelector((state: any) => state.receiveItem);

  const [currentReceiveItem, setCurrentReceiveItem] = useState('');
  const tempRCI = currentReceiveItem;

  const initialItemState = {
    id: '',
    approved_quantity: 0,
    name : '',
    unit: '',
    buy_price: 0,
    selected: true,
  };

  let allItems = [initialItemState];

  const [totalSpend, setTotalSpend] = useState(0);

  if (selectorPO.purchaseOrder) {
    let total = 0;
    selectorPO.purchaseOrder.InPurchaseOrderDetails.map(
      (item: any, index: number) => {
        allItems = [];
        allItems.push({
          id: item.id_item,
          approved_quantity: item.quantity,
          name: item.InItem.name,
          unit: item.unit,
          buy_price: item.buy_price,
          selected: true,
        });
      },
    );
  }

  const initialState = {
    id_action: 'PO202304050001',
    items: allItems,
  };

  const [formData, setFormData] = useState(initialState);

  const changeItemInForm = (poDetails: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      items: [],
    }));
    //update attribute items with new value pr details
    poDetails.map((item: any, index: number) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        items: [
          ...prevFormData.items,
          {
            id: item.id_item,
            approved_quantity: item.quantity,
            name: item.InItem.name,
            unit: item.unit,
            buy_price: item.total,
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
        if(e.target.name === "id_action") {
            const search = {
                id: e.target.value,
            }
            dispatch(fetchPurchaseOrder({search}) as any)
            .then((data:any) => {
                changeItemInForm(data.payload.data.InPurchaseOrderDetails);
            })
            setCurrentReceiveItem(e.target.value);
        }
    }

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
      item.approved_quantity = value;
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
    dispatch(createReceiveItem(formData) as any)
      .then((data: any) => {
        if(selectorRCI.status === 'success') {
            toast.success('Berhasil menambahkan penerimaan');
        }
        else if(selectorRCI.status === 'failed') {
            toast.error('Gagal menambahkan penerimaan');
        }
        else if(selectorRCI.status === 'loading') {
            toast.loading('Loading...');
        }
      })
    console.log(selectorRCI);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/inventory/penerimaan');
  };

  const handleAddItem = (e: any) => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      items: [...prevFormData.items, initialItemState],
    }));
  };

  useEffect(() => {
      dispatch(fetchAllPurchaseOrder() as any);
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
        <div className="flex flex-col p-5 gap-3">
          <div className='flex flex-col gap-3'>
            <h3 className="text-black">Buat Pelaksanaan Penerimaan Barang</h3>
            <hr className="border border-black mb-8" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <label className="text-black">Cari Purchase Order</label>
              <select
                className="bg-white text-black border border-black"
                name="id_action"
                onChange={handleChange}
                value={formData.id_action}
              >
                {selectorPO.purchaseOrders &&
                  selectorPO.purchaseOrders.map((pr: any) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.id}
                    </option>
                  ))}
              </select>
            </div>

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
                  <p className="text-black">{item.id}</p>
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
                    value={item.approved_quantity}
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
