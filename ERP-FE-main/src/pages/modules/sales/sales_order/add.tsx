import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEndProducts } from '@/pages/api/inventory/item/itemSlice';
import { createSalesOrder } from '@/pages/api/inventory/salesOrder/salesOrdersSlice';
import { fetchAllCustomers } from '@/pages/api/inventory/customer/customerSlice';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function NewSalesOrderPage() {
  const selectorSO = useSelector((state: any) => state.salesOrders);
  const selectorItem = useSelector((state: any) => state.items);
  const selectorCustomer = useSelector((state: any) => state.customer);

  const initialItemState = {
    id_item: selectorItem.endProducts[0]?.id || '',
    quantity: 0,
  };

  const paymentState = {
    type: '',
    dp_percent: 0,
    dp_money: 0,
  };

  const initialState = {
    id_customer: selectorCustomer.customers[0]?.id || '',
    products: [initialItemState],
    payment: paymentState,
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeMultiple = (e: any) => {
    const index = e.target.name.split('-')[1] as number;
    const name = e.target.name.split('-')[0] as string;
    const value = e.target.value;
    const newFormData = { ...formData };
    const item = newFormData.products[index];
    if (name === 'item') {
      item.id_item = value;
    } else if (name === 'quantity') {
      item.quantity = value;
    } else if (name === 'type') {
      newFormData.payment.type = value;
    } else if (name === 'dp_percent') {
      newFormData.payment.dp_percent = value;
    } else if (name === 'dp_money') {
      newFormData.payment.dp_money = value;
    }
    newFormData.products[index] = item;
    setFormData(newFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    toast.promise(
      dispatch(createSalesOrder(formData) as any),
      {
        loading: 'Loading',
        success: (data) => {
          return 'Successfully create sales order';
        },
        error: (err) => {
          return err;
        },
      },
    );
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/sales/sales_order');
  };

  const handleAddItem = (e: any) => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      products: [...prevFormData.products, initialItemState],
    }));
  };

  useEffect(() => {
    dispatch(fetchAllCustomers() as any);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllEndProducts() as any);
  }, [dispatch]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Sales Order</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex flex-col p-5">
          <h3 className="text-black">Buat Penjualan Baru</h3>
          <hr className="border border-black mb-8" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <label className="text-black">Cari Customer</label>
              <select
                name="id_customer"
                onChange={handleChange}
                className="bg-white text-black border border-black"
                value={formData.id_customer}
              >
                {selectorCustomer.customers &&
                  selectorCustomer.customers.map((customer: any) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.id + ' - ' + customer.name}
                    </option>
                  ))}
              </select>
            </div>
            <h3 className="text-black mt-5">Pilih Produk:</h3>
            <hr className="border border-black mb-3" />
            {formData.products.map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex flex-row gap-3">
                  <p className="text-black font-bold">Id Item :</p>
                  <p className="text-black">{item.id_item}</p>
                </div>
                <div className="flex flex-row gap-3">
                  <label className="text-black">Quantity</label>
                  <input
                    type="number"
                    name={'quantity-' + index}
                    onChange={handleChangeMultiple}
                    className="bg-white text-black border border-black"
                    value={item.quantity}
                  />
                </div>
                {selectorItem.endProducts && (
                  <div className="flex flex-row gap-3">
                    <label className="text-black">Cari Item</label>
                    <select
                      name={'item-' + index}
                      onChange={handleChangeMultiple}
                      value={item.id_item}
                      className="bg-white text-black border border-black"
                    >
                      {selectorItem.endProducts &&
                        selectorItem.endProducts.map((item: any) => (
                          <option key={item.id_item} value={item.id}>
                            {item.id + ' - ' + item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
                <hr className="border border-black" />
              </div>
            ))}
            <button
              onClick={handleAddItem}
              className="bg-green-500 border p-2 rounded-lg w-fit"
            >
              Tambah Item
            </button>
            <div className="flex flex-col mt-3 py-3">
              <h3 className="text-black mt-5">Metode Pembayaran:</h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3">
                  <label className="text-black">Tipe Pembayaran</label>
                  <select
                    name="type"
                    onChange={handleChangeMultiple}
                    className="bg-white text-black border border-black"
                    value={formData.payment.type}
                  >
                    <option value="cash">Cash</option>
                    <option value="dp_percent">DP Percent</option>
                    <option value="dp_money">DP Value</option>
                  </select>
                </div>
                {formData.payment.type === 'dp_money' && (
                  <div className="flex flex-row gap-3">
                    <label className="text-black">DP Value</label>
                    <div className="flex gap-2">
                      <p className="text-black">Rp.</p>
                      <input
                        type="number"
                        name="dp_money"
                        onChange={handleChangeMultiple}
                        className="bg-white text-black border border-black"
                        value={formData.payment.dp_money}
                      />
                    </div>
                  </div>
                )}
                {formData.payment.type === 'dp_percent' && (
                  <div className="flex flex-row gap-3">
                    <label className="text-black">DP Percent</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        name="dp_percent"
                        onChange={handleChangeMultiple}
                        className="bg-white text-black border border-black"
                        value={formData.payment.dp_percent}
                      />
                      <p className="text-black">%</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
