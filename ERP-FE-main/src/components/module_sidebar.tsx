import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { contentData } from './content_data';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  OfficeBuildingIcon,
  CogIcon,
  DocumentDownloadIcon,
  DocumentReportIcon,
  ChartBarIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const mapIcon = (icon: string) => {
  switch (icon) {
    case 'dashboard':
      return <HomeIcon className="h-5 w-5" />;
    case 'inventory':
      return <ShoppingCartIcon className="h-5 w-5" />;
    case 'manufacturing':
      return <CogIcon className="h-5 w-5" />;
    case 'account_payable':
      return <DocumentDownloadIcon className="h-5 w-5" />;
    case 'cash_bank':
      return <CurrencyDollarIcon className="h-5 w-5" />;
    case 'general_ledger':
      return <DocumentReportIcon className="h-5 w-5" />;
    case 'accounting_period_management':
      return <ChartBarIcon className="h-5 w-5" />;
    case 'journal_management':
      return <BookOpenIcon className="h-5 w-5" />;
    default:
      return <CogIcon className="h-5 w-5" />;
  }
};

const ModuleSidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModule = (index: number) => {
    if (activeModule === index) {
      setActiveModule(null);
    } else {
      setActiveModule(index);
    }
  };

  const router = useRouter();

  return (
    <aside
      className={`fixed top-16 left-0 h-full w-64 text-white transition-all duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ backgroundColor: '#0B0645' }}
    >
      <div className="p-6">
        <h2
          className="text-2xl font-semibold text-white"
          style={{ color: '#796EA3' }}
        >
          Main Navigation
        </h2>
        <ul>
          {contentData.map((item, index) => (
            <div key={index}>
              <li
                className={`flex justify-between items-center mt-5 cursor-pointer ${
                  router.pathname === item.link ? 'bg-purple-500' : ''
                } hover:bg-purple-500 transition duration-300 w-full`}
                onClick={() => toggleModule(index)}
              >
                <Link href={item.link}>
                  <div className={`text-white align-middle flex items-center`}>
                    {mapIcon(item.icon)}
                    <span className="ml-2">{item.name}</span>
                  </div>
                </Link>
                {item.contents &&
                  (activeModule === index ? (
                    <ChevronUpIcon className="h-5 w-5 align-middle" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 align-middle" />
                  ))}
              </li>
              {activeModule === index && item.contents && (
                <ul>
                  {item.contents.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`ml-4 hover:bg-purple-500 transition duration-300 ${
                        router.pathname === subItem.link ? 'bg-purple-500' : ''
                      }`}
                    >
                      <Link href={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ModuleSidebar;
