import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../../api/store';
import { newInvoice } from '../../../api/account_payable/puchase_invoice/purchaseInvoiceSlice';
import { fetchAllPurchaseOrder } from '../../../api/inventory/purchaseOrder/purchaseOrderSlice';
import {
  fetchAllCurrencies,
  searchCurrencies,
} from '../../../api/cash_bank/currency/currencySlice';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

export default function CreatePurchaseInvoice() {
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

  const currencies = useAppSelector(state => state.currency.currencies);

  const [form, setForm] = useState<{
    invoice_number: string;
    invoice_date: Date | null;
    due_date: Date | null;
    received_date: Date | null;
    total_amount: string;
    total_taxes: string;
    total_price_item: string;
    discounts: string;
    purchase_order_id: string;
    purchase_down_payment_invoice_id: string | null;
    currency_id: string;
    payment_status: string;
    description: string;
    taxes_included: boolean;
  }>({
    invoice_number: '',
    invoice_date: new Date(),
    due_date: new Date(),
    received_date: new Date(),
    total_amount: '',
    total_taxes: '',
    total_price_item: '',
    discounts: '0',
    purchase_order_id: '',
    purchase_down_payment_invoice_id: null,
    currency_id: 'IDR',
    payment_status: 'pending',
    description: '',
    taxes_included: true,
  });

  const [selectedPOData, setSelectedPOData] = useState({
    total_amount: '',
    total_taxes: '',
    total_price_item: '',
  });

  useEffect(() => {
    dispatch(fetchAllPurchaseOrder());
  }, [dispatch]);

  const updateSelectedPOData = useCallback(
    (id: string) => {
      const selectedPO = purchaseOrders.find(po => po.id === id);
      if (selectedPO) {
        setSelectedPOData({
          total_price_item: selectedPO.total_price,
          total_taxes: selectedPO.total_tax,
          total_amount: selectedPO.total_price_tax,
        });
      }
    },
    [purchaseOrders],
  );

  useEffect(() => {
    updateSelectedPOData(form.purchase_order_id);
  }, [form.purchase_order_id, updateSelectedPOData]);

  useEffect(() => {
    dispatch(searchCurrencies('IDR'));
  }, [dispatch]);

  const handleInputChange = (e: any) => {
    let value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (e.target.name === 'discounts' && !value) {
      value = '0';
    }

    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const [displayedDate, setDisplayedDate] = useState(
    format(new Date(), 'dd-MM-yyyy'),
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formattedForm = {
      ...form,
      invoice_date: form.invoice_date
        ? format(form.invoice_date, 'yyyy-MM-dd')
        : null,
      due_date: form.due_date ? format(form.due_date, 'yyyy-MM-dd') : null,
      received_date: form.received_date
        ? format(form.received_date, 'yyyy-MM-dd')
        : null,
    };
    await dispatch(newInvoice(formattedForm));
    router.push('/modules/account_payable/purchase_invoice');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Create New Purchase Invoice</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <h1 className="mb-4 text-xl font-bold">Create New Purchase Invoice</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label className="block mb-2">Invoice Number</label>
              <input
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                type="text"
                name="invoice_number"
                value={form.invoice_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Invoice Date</label>
              <DatePicker
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                selected={form.invoice_date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setForm({
                      ...form,
                      invoice_date: date,
                    });
                    setDisplayedDate(format(date, 'dd-MM-yyyy'));
                  }
                }}
                dateFormat="dd-MM-yyyy"
              />
            </div>
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
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label className="block mb-2">Received Date</label>
              <DatePicker
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                selected={form.received_date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setForm({
                      ...form,
                      received_date: date,
                    });
                    setDisplayedDate(format(date, 'dd-MM-yyyy'));
                  }
                }}
                dateFormat="dd-MM-yyyy"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Due Date</label>
              <DatePicker
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                selected={form.due_date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setForm({
                      ...form,
                      due_date: date,
                    });
                    setDisplayedDate(format(date, 'dd-MM-yyyy'));
                  }
                }}
                dateFormat="dd-MM-yyyy"
              />
            </div>
          </div>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label className="block mb-2">
                Purchase Down Payment Invoice ID
              </label>
              <input
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                type="text"
                name="purchase_down_payment_invoice_id"
                value={form.purchase_down_payment_invoice_id || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Discounts (%)</label>
              <input
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                type="number"
                name="discounts"
                value={form.discounts}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label className="block mb-2">Currency</label>
              <select
                className="w-full px-3 py-2 border rounded bg-white shadow-inner"
                name="currency_id"
                value={form.currency_id}
                onChange={handleInputChange}
              >
                {/* Render list of currencies */}
                {currencies.map((currency: any) => (
                  <option key={currency.id} value={currency.id}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Taxes Included</label>
              <input
                className="px-3 py-2 border rounded bg-white shadow-inner"
                type="checkbox"
                name="taxes_included"
                checked={form.taxes_included}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              className="w-full px-3 py-2 border rounded bg-white shadow-inner"
              name="description"
              value={form.description}
              onChange={handleInputChange}
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
