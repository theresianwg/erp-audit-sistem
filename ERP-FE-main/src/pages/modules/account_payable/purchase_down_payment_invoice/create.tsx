import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../../api/store';
import { newDpInvoice } from '../../../api/account_payable/purchase_down_payment_invoice/purchaseDownPaymentInvoiceSlice';
import { fetchAllPurchaseOrder } from '../../../api/inventory/purchaseOrder/purchaseOrderSlice';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function CreatePurchaseDownPaymentInvoice() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';
  const purchaseOrders = useAppSelector(
    state => state.purchaseOrder.purchaseOrders,
  );

  const [form, setForm] = useState({
    invoice_number: '',
    invoice_date: '',
    due_date: '',
    total_amount: '', // dipastikan untuk mengubah ini menjadi state dinamis jika diperlukan
    total_taxes: '', // dipastikan untuk mengubah ini menjadi state dinamis jika diperlukan
    total_price_item: '', // dipastikan untuk mengubah ini menjadi state dinamis jika diperlukan
    discounts: '',
    received_date: '',
    purchase_order_id: '',
    currency_id: 'IDR', // bisa diubah dengan pilihan user
    payment_status: 'pending',
    description: '',
    dp_percent: '',
    dp_paid_amount: '',
    taxes_included: false,
    remaining_payments: '',
  });

  const [selectedPOData, setSelectedPOData] = useState({
    total_amount: '',
    total_taxes: '',
    total_price_item: '',
  });

  useEffect(() => {
    dispatch(fetchAllPurchaseOrder());
  }, [dispatch]);

  useEffect(() => {
    updateSelectedPOData(form.purchase_order_id);
  }, [form.purchase_order_id]);

  const updateSelectedPOData = (id: string) => {
    const selectedPO = purchaseOrders.find(po => po.id === id);
    if (selectedPO) {
      setSelectedPOData({
        total_price_item: selectedPO.total_price,
        total_taxes: selectedPO.total_tax,
        total_amount: selectedPO.total_price_tax,
      });
    }
  };

  const handleInputChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { total_amount, total_taxes, total_price_item, ...submitForm } = form;
    await dispatch(newDpInvoice(form));
    router.push('/modules/account_payable/purchase_down_payment_invoice');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Create New Purchase Down Payment Invoice</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <h1 className="mb-4 text-xl font-bold">
          Create New Purchase Down Payment Invoice
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Invoice Number</label>
            <input
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              type="text"
              name="invoice_number"
              value={form.invoice_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Purchase Order ID</label>
            <select
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              name="purchase_order_id"
              value={form.purchase_order_id}
              onChange={handleInputChange}
            >
              {/* Render list purchase order id */}
              {purchaseOrders.map((po: any) => (
                <option key={po.id} value={po.id}>
                  {po.id}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Total Amount</label>
            <input
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              type="text"
              name="total_amount"
              value={selectedPOData.total_amount}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Total Taxes</label>
            <input
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              type="text"
              name="total_taxes"
              value={selectedPOData.total_taxes}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Total Price Item</label>
            <input
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              type="text"
              name="total_price_item"
              value={selectedPOData.total_price_item}
              disabled
            />
          </div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Create Invoice
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
