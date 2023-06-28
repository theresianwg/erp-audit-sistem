import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../api/store';
import { fetchAllInvoices } from '../../../api/account_payable/puchase_invoice/purchaseInvoiceSlice';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import { Pagination } from '../../../../components/pagination';
import { format } from 'date-fns';
import { fetchAllCurrencies } from '../../../api/cash_bank/currency/currencySlice';

export default function PurchaseInvoiceIndex() {
  const invoices = useAppSelector(state => state.invoices.invoices);
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  useEffect(() => {
    dispatch(fetchAllInvoices());
    dispatch(fetchAllCurrencies());
  }, [dispatch]);

  const getAttributes = () => [
    'id',
    'invoice_number',
    'invoice_date',
    'due_date',
    'total_amount',
    'total_taxes',
    'total_price_item',
    'discounts',
    'received_date',
    'purchase_order_id',
    'payment_status',
    'purchase_down_payment_invoice_id',
    'description',
    'taxes_included',
  ];

  const toTitleCase = (str: string) => {
    return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const currentItems = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const currencies = useAppSelector(state => state.currency.currencies);

  const getCurrencySymbol = (currencyId: string) => {
    const currency = currencies.find(currency => currency.id === currencyId);
    return currency ? currency.symbol : '';
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Purchase Invoices</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <h1 className="mb-4 text-xl font-bold">Purchase Invoices</h1>
        <Link href="/modules/account_payable/purchase_invoice/create" passHref>
          <button className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Create New Invoice
          </button>
        </Link>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead className="bg-blue-100">
              <tr className="text-sm font-medium text-center">
                {getAttributes().map(attribute => (
                  <th
                    key={attribute}
                    className={`px-4 py-2 border ${
                      attribute === 'invoice_date' ||
                      attribute === 'due_date' ||
                      attribute === 'received_date'
                        ? 'w-1/4'
                        : ''
                    }`}
                  >
                    {toTitleCase(attribute)}
                  </th>
                ))}
                <th className="px-4 py-2 border w-1/17">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((invoice: any) => (
                <tr key={invoice.id} className="text-sm text-left">
                  {getAttributes().map(attribute => (
                    <td
                      key={attribute}
                      className={`px-4 py-2 border ${
                        attribute === 'invoice_date' ||
                        attribute === 'due_date' ||
                        attribute === 'received_date'
                          ? 'whitespace-nowrap'
                          : ''
                      }`}
                    >
                      {attribute === 'invoice_date' ||
                      attribute === 'due_date' ||
                      attribute === 'received_date' ? (
                        format(new Date(invoice[attribute]), 'dd-MM-yyyy')
                      ) : attribute === 'total_amount' ||
                        attribute === 'total_taxes' ||
                        attribute === 'total_price_item' ? (
                        <>
                          <div className="flex items-center justify-end">
                            <span>
                              {Number(invoice[attribute]).toLocaleString(
                                'id-ID',
                              )}
                            </span>
                            <span className="ml-1">
                              {getCurrencySymbol(invoice.currency_id)}
                            </span>
                          </div>
                        </>
                      ) : attribute === 'taxes_included' ? (
                        <>{invoice[attribute] ? 'Yes' : 'No'}</>
                      ) : (
                        invoice[attribute]
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-2 border flex justify-end space-x-3">
                    <Link
                      href={`/modules/account_payable/purchase_invoice/${invoice.id}`}
                    >
                      <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                        Lihat
                      </button>
                    </Link>
                    <Link
                      href={`/modules/account_payable/purchase_invoice/${invoice.id}/edit`}
                    >
                      <button className="text-green-500 hover:text-green-700 focus:outline-none">
                        Edit
                      </button>
                    </Link>
                    <Link
                      href={`/modules/account_payable/purchase_invoice/${invoice.id}/delete`}
                    >
                      <button className="text-red-500 hover:text-red-700 focus:outline-none">
                        Hapus
                      </button>
                    </Link>
                  </td>
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
