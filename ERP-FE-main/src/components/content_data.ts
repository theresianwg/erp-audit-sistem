export const contentData = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/modules',
  },
  {
    name: 'Inventory',
    icon: 'inventory',
    link: '/modules/inventory',
    contents: [
      {
        name: 'Persediaan',
        icon: 'persediaan',
        link: '/modules/inventory/persediaan',
      },
      {
        name: 'Satuan',
        icon: 'satuan',
        link: '/modules/inventory/satuan',
      },
      {
        name: 'Bill Of Materials',
        icon: 'bom',
        link: '/modules/inventory/bom',
      },
      {
        name: 'Penerimaan Barang',
        icon: 'penerimaan',
        link: '/modules/inventory/penerimaan',
      },
    ],
  },
  {
    name: 'Purchasing',
    icon: 'purchasing',
    link: '/modules/purchasing',
    contents: [
      {
        name: 'Purchase Request',
        icon: 'purchase_request',
        link: '/modules/purchasing/purchase_request',
      },
      {
        name: 'Purchase Order',
        icon: 'purchase_order',
        link: '/modules/purchasing/purchase_order',
      },
      {
        name: 'Supplier',
        icon: 'supplier',
        link: '/modules/purchasing/supplier',
      },
    ],
  },
  {
    name: 'Sales',
    icon: 'sales',
    link: '/modules/sales',
    contents: [
      {
        name: 'Sales Order',
        icon: 'sales_order',
        link: '/modules/sales/sales_order',
      },
      {
        name: 'Customer',
        icon: 'customer',
        link: '/modules/sales/customer',
      },
    ],
  },
  {
    name: 'Manufacturing',
    icon: 'manufacturing',
    link: '/modules/manufacturing',
    contents: [
      {
        name: 'Production Request',
        icon: 'production_request',
        link: '/modules/manufacturing/production_request',
      },
      {
        name: 'Production Order',
        icon: 'production_order',
        link: '/modules/manufacturing/production_order',
      },
      {
        name: 'Machine',
        icon: 'machine',
        link: '/modules/manufacturing/machine',
      },
    ],
  },
  {
    name: 'Account Payable',
    icon: 'account_payable',
    link: '/modules/account_payable',
    contents: [
      {
        name: 'Purchase Down Payment Invoice',
        icon: 'purchase_down_payment_invoice',
        link: '/modules/account_payable/purchase_down_payment_invoice',
      },
      {
        name: 'Purchase Invoice',
        icon: 'purchase_invoice',
        link: '/modules/account_payable/purchase_invoice',
      },
      {
        name: 'Purchase Return Invoice',
        icon: 'purchase_return_invoice',
        link: '/modules/account_payable/purchase_return_invoice',
      },
      {
        name: 'AP Adjustment Invoice',
        icon: 'ap_adjustment_invoice',
        link: '/modules/account_payable/ap_adjustment_invoice',
      },
    ],
  },
  {
    name: 'Cash Bank',
    icon: 'cash_bank',
    link: '/modules/cash_bank',
    contents: [
      {
        name: 'Currency',
        icon: 'currency',
        link: '/modules/cashbank/currency',
      },
      {
        name: 'Exchange Rate',
        icon: 'exchange_rate',
        link: '/modules/cashbank/exchange_rate',
      },
      {
        name: 'Cash Management',
        icon: 'cash_management',
        link: '/modules/cashbank/cash_management',
      },
      {
        name: 'Bank Management',
        icon: 'bank_management',
        link: '/modules/cashbank/bank_management',
      },
    ],
  },
  {
    name: 'Cash Bank',
    icon: 'cash_bank',
    link: '/modules/cash_bank',
    contents: [
      {
        name: 'Currency',
        icon: 'currency',
        link: '/modules/cashbank/currency',
      }
    ],
  },
  {
    name: "Finance and Accounting",
    icon: "finance_and_accounting",
    link: "/modules/finance_and_accounting",
    contents: [{
            name: "Account Management",
            icon: "account_management",
            link: "/modules/finance_and_accounting/account_management/",
            contents: [{
                name: "Budget Control",
                icon: "budget_control",
                link: "/modules/finance_and_accounting/account_management/budget_control",
            },
            {
                name: "Create Coa Group",
                icon: "create_coa_group",
                link: "/modules/finance_and_accounting/account_management/create_coa_group",
            },
            {
                name: "Create Coa",
                icon: "create_coa",
                link: "/modules/finance_and_accounting/account_management/create_coa",
            },
            {
                name: "Create Transaction Type",
                icon: "create_transaction_type",
                link: "/modules/finance_and_accounting/account_management/create_transaction_type",
            },
            {
                name: "List Of Coa Group",
                icon: "list_of_coa_group",
                link: "/modules/finance_and_accounting/account_management/coa_group",
            },
            {
                name: "List Of Coa",
                icon: "list_of_coa",
                link: "/modules/finance_and_accounting/account_management/coa",
            }]
        },{
            name: "Accounting Period Management",
            icon: "accounting_period_management",
            link: "/modules/finance_and_accounting/accounting_period_management",
            contents: [{
                name: "Create Accounting Period",
                icon: "create_accounting_period",
                link: "/modules/finance_and_accounting/accounting_period_management/create_accounting_period"
            },
            {
                name: "List Of Accounting Period",
                icon: "list_of_accounting_period",
                link: "/modules/finance_and_accounting/accounting_period_management/list_of_accounting_period"
            }]
        },{
            name: "Report Management",
            icon: "report_management",
            link: "/modules/finance_and_accounting/report_management",
            contents: [{
                name: "Create Close Book",
                icon: "create_close_book",
                link: "/modules/finance_and_accounting/report_management/create_close_book",
            },
            {
                name: "Generate Cost Production",
                icon: "generate_cost_production",
                link: "/modules/finance_and_accounting/report_management/generate_cost_production",
            },
            {
                name: "Generate Financial Report",
                icon: "generate_financial_report",
                link: "/modules/finance_and_accounting/report_management/generate_financial_report",
            },
            {
                name: "General Ledger",
                icon: "general_ledger",
                link: "/modules/finance_and_accounting/report_management/general_ledger",
            },
            {
                name: "Journal Entry",
                icon: "journal_entry",
                link: "/modules/finance_and_accounting/report_management/journal_entry",
            },
            {
                name: "Post Journal",
                icon: "post_journal",
                link: "/modules/finance_and_accounting/report_management/post_journal",
            }]
        }
    ]
  },
];

export default contentData;
