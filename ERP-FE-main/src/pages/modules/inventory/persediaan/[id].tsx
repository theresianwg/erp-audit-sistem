import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById } from '../../../api/inventory/item/itemSlice';
import ItemForm from './components/items_form';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function ItemEditPage() {
  const selector = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  const router = useRouter();
  const id = router.query.id;
  const search = {
    id: id,
  };

  const initialState = {
    name: '',
    id_category: '',
    id_coa: '',
    id_tax: '',
    price: '',
    unit: '',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!selector.item || selector.item.data.id != id) {
      console.log('masuk');
      dispatch(getItemById({ search }) as any);
    }
  }, [dispatch]);

  useEffect(() => {
    if (selector.item && selector.item.data && selector.item.data.id === id) {
      setFormData(prevFormData => ({
        ...prevFormData,
        name: selector.item.data.name,
        id_category: selector.item.data.id_category,
        id_coa: selector.item.data.id_coa,
        id_tax: selector.item.data.id_tax,
        price: selector.item.data.price,
        unit: selector.item.data.unit,
      }));
    }
  }, [selector.item, id, setFormData]);

  const handleChange = (e: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // dispatch(newItem(formData) as any);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/modules/inventory/persediaan');
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Persediaan</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        {selector.loading && (
          <div className="flex justify-center items-center">
            <p className="text-black">Loading...</p>
          </div>
        )}
        {selector.error && (
          <div className="flex justify-center items-center">
            <p className="text-black">Error Get Data</p>
          </div>
        )}
        {!selector.loading && !selector.error && selector.item && (
          <ItemForm
            title="Edit Item"
            item={formData}
            handleCancel={handleCancel}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
