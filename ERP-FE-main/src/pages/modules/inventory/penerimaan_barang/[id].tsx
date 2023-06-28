import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReceiveItem } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import { useRouter } from 'next/router';

export default function ReceiveItemDetailPage() {
  const router = useRouter();
  const id = router.query.id;

  const selector = useSelector((state: any) => state.receiveItem);

  const dispatch = useDispatch();

  const search = {
    id: id,
  };

  useEffect(() => {
    dispatch(fetchReceiveItem({ search }) as any);
  }, [dispatch]);

  return (
    <div className="flex bg-white min-h-screen">
      <SideNav index_parent_page={1} index_child_page={3} />
      <div className="flex flex-col w-full gap-3">
        <TopPageRef index_parent_page={1} index_child_page={3} />
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
          {
            selector.receiveItem && (
              <div className='flex flex-col gap-3'>
                <h4 className="text-black mb-4">Id Receive : {id}</h4>
                <h4 className="text-black mb-4">Id Action : {selector.receiveItem.id_action}</h4>
              </div>              
            )
          }
          
          <table>
            <thead>
              <tr>
                <th className="text-black">Nama Barang</th>
                <th className="text-black">Kuantitas Diterima</th>
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
              {selector.receiveItem &&
                selector.receiveItem.InReceiveItemChecks.map((child: any) => (
                    <tr key={child.id}>
                        <td className="text-black">{child.InItem.name}</td>
                        <td className="text-black">{child.approved_quantity}</td>
                    </tr>
                )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
