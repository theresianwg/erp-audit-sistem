import SideNav from '../../components/side_nav';
import TopPageRef from '../../components/top_page_ref';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReceiveItems } from '@/pages/api/inventory/receiveItem/receiveItemSlice';
import Link from 'next/link';

export default function ReceiveItemPage() {
  const selector = useSelector((state: any) => state.receiveItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReceiveItems() as any);
  }, [dispatch]);

  return (
    <div className="flex bg-white min-h-screen">
      <SideNav index_parent_page={1} index_child_page={3} />
      <div className="flex flex-col w-full gap-3">
        <TopPageRef index_parent_page={1} index_child_page={3} />
        {/* Implement Your Page In Here */}

        <div className="flex flex-col p-5">
          <table>
            <thead>
              <tr>
                <th className="text-black">Id</th>
                <th className="text-black">Id. Action</th>
                <th className="text-black">Action</th>
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
              {selector.receiveItems.length > 0 &&
                selector.receiveItems.map((receiveItem: any) => (
                  <tr key={receiveItem.id}>
                    <td className="text-black">{receiveItem.id}</td>
                    <td className="text-black">{receiveItem.id_action}</td>
                    <td>
                      <button className="text-black">
                        <Link
                          href={{
                            pathname:
                              '/modules/inventory/penerimaan_barang/' +
                              receiveItem.id,
                          }}
                        >
                          Detail
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
