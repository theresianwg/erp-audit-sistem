import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../api/store';
import { fetchAllCurrencies } from '../../../api/cash_bank/currency/currencySlice';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import { Pagination } from '../../../../components/pagination';

export default function CurrencyIndex() {
  const currencies = useAppSelector(state => state.currency.currencies);
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  useEffect(() => {
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  const getAttributes = () => ['id', 'name', 'symbol', 'code'];

  const toTitleCase = (str: string) => {
    return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = currencies
    ? Math.ceil(currencies.length / itemsPerPage)
    : 0;

  const currentItems = currencies
    ? currencies.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Currencies</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <h1 className="mb-4 text-xl font-bold">Currencies</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-blue-100">
              <tr className="text-sm font-medium text-center">
                <th className="px-4 py-2 border">No</th>
                {getAttributes().map(attribute => (
                  <th key={attribute} className={`px-4 py-2 border`}>
                    {toTitleCase(attribute)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((currency: any, index: number) => (
                <tr key={currency.id} className="text-sm">
                  <td className="px-4 py-2 border text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  {getAttributes().map(attribute => (
                    <td
                      key={attribute}
                      className="px-4 py-2 border text-center"
                    >
                      {currency[attribute]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
}
