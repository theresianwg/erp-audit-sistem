import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newItem } from '../../../api/inventory/item/itemSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import POForm from './components/po_form';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function NewItemPage() {
  const selector = useSelector((state: any) => state.productionOrders);

  const initialState = {
    pr_id: '',
    item_id: '',
    po_qty: '',
    po_start: '',
    po_end: '',
    po_status: '',
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    dispatch(newItem(formData) as any);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/manufacturing/production_order');
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Tambah Production Order</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <POForm
          title="Buat Item Baru"
          handleCancel={handleCancel}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
}
