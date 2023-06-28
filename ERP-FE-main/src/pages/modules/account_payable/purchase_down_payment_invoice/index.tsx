import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../api/store';
import { fetchAllDpInvoices } from '../../../api/account_payable/purchase_down_payment_invoice/purchaseDownPaymentInvoiceSlice';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';
import { Pagination } from '../../../../components/pagination';

export default function PurchaseDownPaymentInvoiceIndex() {
  const dpInvoices = useAppSelector(state => state.dpInvoices.dpInvoices);
  const dispatch = useAppDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  useEffect(() => {
    dispatch(fetchAllDpInvoices());
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
    'currency_id',
    'payment_status',
    'description',
    'dp_percent',
    'dp_paid_amount',
    'taxes_included',
    'remaining_payments',
  ];

  const toTitleCase = (str: string) => {
    return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(dpInvoices.length / itemsPerPage);

  // Get current items
  const currentItems = dpInvoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Purchase Down Payment Invoices</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <h1 className="mb-4 text-xl font-bold">
          Purchase Down Payment Invoices
        </h1>
        <Link
          href="/modules/account_payable/purchase_down_payment_invoice/create"
          passHref
        >
          <button className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Create New Invoice
          </button>
        </Link>
        <div className="overflow-x-auto">
          {/* Render your invoices here */}
          <table className="w-full border-collapse table-auto">
            <thead className="bg-blue-100">
              <tr className="text-sm font-medium text-center">
                {/* Add additional classes for styling */}
                {getAttributes().map(attribute => (
                  <th
                    key={attribute}
                    className={`px-4 py-2 border ${
                      attribute === 'invoice_date' ||
                      attribute === 'due_date' ||
                      attribute === 'received_date'
                        ? 'w-1/3'
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
              {currentItems.map((dpInvoice: any) => (
                <tr key={dpInvoice.id} className="text-sm text-left">
                  {getAttributes().map(attribute => (
                    <td key={attribute} className="px-4 py-2 border">
                      {dpInvoice[attribute]}
                    </td>
                  ))}
                  <td className="px-4 py-2 border flex justify-end space-x-3">
                    <Link
                      href={`/modules/account_payable/purchase_down_payment_invoice/${dpInvoice.id}`}
                    >
                      <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                        Lihat
                      </button>
                    </Link>
                    <Link
                      href={`/modules/account_payable/purchase_down_payment_invoice/${dpInvoice.id}/edit`}
                    >
                      <button className="text-green-500 hover:text-green-700 focus:outline-none">
                        Edit
                      </button>
                    </Link>
                    <Link
                      href={`/modules/account_payable/purchase_down_payment_invoice/${dpInvoice.id}/delete`}
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
