import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomer } from '@/pages/api/inventory/customer/customerSlice';
import { useRouter } from 'next/router';

export default function CustomerDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.customer);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchCustomer({ search }) as any);
  }, [dispatch]);

  return (
    <div className="flex bg-white min-h-screen">
      <SideNav index_parent_page={2} index_child_page={0} />
      <div className="flex flex-col w-full gap-3">
        <TopPageRef index_parent_page={2} index_child_page={0} />
        {/* Implement Your Page In Here */}

        <div className="flex flex-col p-5">
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
          <h4 className="text-black mb-4">Id Purchase Request : {id}</h4>
          <table>
            <thead>
              <tr>
                <th className="text-black">Nama Barang</th>
                <th className="text-black">Kuantitas</th>
                <th className="text-black">Sudah Dibeli?</th>
                <th className="text-black">Budget Cukup?</th>
              </tr>
            </thead>
            <tbody>
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
              {selector.purchaseRequest &&
                selector.purchaseRequest.InPurchaseRequestDetails.map(
                  (child: any) => (
                    <tr key={child.id}>
                      <td className="text-black">{child.InItem.name}</td>
                      <td className="text-black">
                        {child.quantity + ' ' + child.InItem.buy_unit}
                      </td>
                      <td className="text-black">
                        {child.ordered ? 'Sudah' : 'Belum'}
                      </td>
                      <td className="text-black">
                        {child.budgetStatus ? 'Cukup' : 'Tidak Cukup'}
                      </td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
