import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSalesOrders } from '../../../api/inventory/salesOrder/salesOrdersSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Head from 'next/head';
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/footer';
import ModuleSidebar from '../../../../components/module_sidebar';

export default function SalesOrderDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.salesOrders);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    if (!selector.salesOrder) {
      dispatch(fetchSalesOrders({ search }) as any);
    } else if (selector.salesOrder && selector.salesOrder.id != id) {
      dispatch(fetchSalesOrders({ search }) as any);
    }
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainContentClass = sidebarOpen ? 'ml-64' : '';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>ITS ERP - Sales Order Detail</title>
      </Head>
      <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
      <ModuleSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <div className={`flex-1 p-8 mt-20 ${mainContentClass}`}>
        <div className="flex flex-col p-5">
          {/* Back Button */}
          <Link
            href="/modules/sales/sales_order"
            className="bg-blue-200 text-black rounded px-3 py-1 w-fit"
          >
            Back
          </Link>
          {selector.loading && (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          )}
          {selector.error && (
            <tr>
              <td colSpan={3}>{selector.error}</td>
            </tr>
          )}
          {selector.salesOrder && (
            <div className="flex flex-col mt-4">
              <div className="flex">
                <p className="text-black font-medium">SO Number :</p>
                <p className="text-black ml-2">{selector.salesOrder.id}</p>
              </div>
              <div className="flex">
                <p className="text-black font-medium">Customer :</p>
                <p className="text-black ml-2">
                  {selector.salesOrder.InCustomer.name}
                </p>
              </div>
              <div className="flex">
                <p className="text-black font-medium">Total Price :</p>
                <p className="text-black ml-2">
                  {selector.salesOrder.total_price}
                </p>
              </div>
              <div className="flex">
                <p className="text-black font-medium">Total Tax :</p>
                <p className="text-black ml-2">
                  {selector.salesOrder.total_tax}
                </p>
              </div>
              <div className="flex">
                <p className="text-black font-medium">Total Price with Tax:</p>
                <p className="text-black ml-2">
                  {selector.salesOrder.total_price_tax}
                </p>
              </div>
              <table className="mt-4">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="text-black border border-black px-3 py-1">
                      Id
                    </th>
                    <th className="text-black border border-black px-3 py-1">
                      Item
                    </th>
                    <th className="text-black border border-black px-3 py-1">
                      Quantity
                    </th>
                    <th className="text-black border border-black px-3 py-1">
                      Harga
                    </th>
                    <th className="text-black border border-black px-3 py-1">
                      Pajak
                    </th>
                    <th className="text-black border border-black px-3 py-1">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selector.salesOrder.InSalesOrderDetails.map((item: any) => {
                    return (
                      <tr key={item.id}>
                        <td className="text-black border border-black px-3 py-1">
                          {item.InItem.id}
                        </td>
                        <td className="text-black border border-black px-3 py-1">
                          {item.InItem.name}
                        </td>
                        <td className="text-black border border-black px-3 py-1">
                          {item.quantity}
                        </td>
                        <td className="text-black border border-black px-3 py-1">
                          {item.price}
                        </td>
                        <td className="text-black border border-black px-3 py-1">
                          {item.tax}
                        </td>
                        <td className="text-black border border-black px-3 py-1">
                          {item.total}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
