const MenuData = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Admin",
    path: "/api/v1/admin",
    subItem: [
      { title: "Upload", path: "/api/v1/admin/upload" },
      { title: "Add Society", path: "/api/v1/admin/addsociety" },
      { title: "Account Seting", path: "/api/v1/admin/accountsetting" },
      { title: "Repair Interest", path: "/api/v1/admin" },
      { title: "Code Utilities", path: "/api/v1/admin/codeutilities" },
      { title: "Add Roles", path: "/api/v1/admin/addroles" },
      { title: "Menu Access", path: "/api/v1/admin/menuaccess" },
      { title: "Add Users", path: "/api/v1/admin/addusers" },
      { title: "Voucher List", path: "/api/v1/voucherlist" },
      { title: "Certificate", path: "/api/v1/admin/certificates" },
      { title: "Lock Society", path: "/api/v1/admin/locksociety" },
    ],
  },
  {
    title: "Transaction",
    path: "/api/v1/transaction",

    subItem: [
      { title: "Bill Generation", path: "/api/v1/transaction/billgeneration" },
      { title: "Member Receipt", path: "/api/v1/transaction/memberreceipt" },
      { title: "Bank Receipt", path: "/api/v1/transaction/bankreceipt" },
      { title: "Cash Receipt", path: "/api/v1/transaction/cashreceipt" },
      {
        title: "Supplementary Receipt",
        path: "/api/v1/transaction/supplementaryreceipt",
      },
      { title: "Bank Payment", path: "/api/v1/transaction/bankpayment" },
      { title: "Cash Payment", path: "/api/v1/transaction/cashpayment" },
      {
        title: "Bank Reconcillation",
        path: "/api/v1/transaction/bankreconcillation",
      },
      { title: "Debit Note", path: "/api/v1/transaction/debitnote" },
      { title: "Credit Note", path: "/api/v1/transaction/creditnote" },
      { title: "Journal Voucher", path: "/api/v1/transaction/journalvoucher" },
      { title: "Closing JV", path: "/api/v1/transaction/closingjv" },
      { title: "Opening Balance", path: "/api/v1/transaction/openingbalance" },
      {
        title: "Multiple Receipt",
        path: "/api/v1/transaction/multiplereceipt",
      },
      {
        title: "Multiple Payment",
        path: "/api/v1/transaction/multiplepayment",
      },
      { title: "Ledger Edit", path: "/api/v1/transaction/ledgeredit" },
      {
        title: "Cheque Slip Generation",
        path: "/api/v1/transaction/chequeslipgeneraton",
      },
    ],
  },

  {
    title: "Ledger",
    path: "/api/v1/ledger",
  },
  {
    title: "Pay Now",
    path: "/api/v1/pay",
  },
  {
    title: "Outstanding Report",
    path: "/api/v1/outstandingReport",
  },
  {
    title: "Complaint",
    path: "/api/v1/complaint",
  },
  {
    title: "Send Notifications",
    path: "/api/v1/sendnotification",
  },
  {
    title: "Reports",
    path: "/api/v1/reports",
  },
  {
    title: "Quick Reports",
    path: "/api/v1/quickreports",
  },
  {
    title: "Vendor Management",
    path: "/api/v1/vendormanagement",
    subItem: [
      {
        title: "Add Vendor Account",
        path: "/api/v1/vendormanagement/addvendoraccount",
      },
      {
        title: "Update AMC/Workorder",
        path: "/api/v1/vendormanagement/updateamcandworkorder",
      },
      {
        title: "Add Vendor Bill",
        path: "/api/v1/vendormanagement/addvendorbill",
      },
      {
        title: "Vendor List",
        path: "/api/v1/vendormanagement/vendorlist",
      },
    ],
  },
  {
    title: "Registers",
    path: "/api/v1/registers",

    subItem: [
      {
        title: "'J' Form",
        path: "/api/v1/registers/jform",
      },
      {
        title: "'I' Form",
        path: "/api/v1/registers/iform",
      },
      {
        title: "Shares",
        path: "/api/v1/registers/shares",
      },
      {
        title: "Nomination",
        path: "/api/v1/registers/nomination",
      },
      {
        title: "Deposit",
        path: "/api/v1/registers/deposit",
      },
      {
        title: "Insurance",
        path: "/api/v1/registers/insurance",
      },
      {
        title: "Notice Board",
        path: "/api/v1/registers/noticeboard",
      },
      {
        title: "Polling Booth",
        path: "/api/v1/registers/pollingbooth",
      },
      {
        title: "Document Issue",
        path: "/api/v1/registers/documentissue",
      },
      {
        title: "Documents Issued",
        path: "/api/v1/registers/documentsissued",
      },
      {
        title: "Document Upload",
        path: "/api/v1/registers/documentupload",
      },
      {
        title: "loan Register",
        path: "/api/v1/registers/loanregister",
      },
      {
        title: "Tenant Register",
        path: "/api/v1/registers/tenantregister",
      },
    ],
  },
  {
    title: "Member List",
    path: "/api/v1/memberlist",
  },
  {
    title: "Masters",
    path: "/api/v1/masters",

    subItem: [
      { title: "General Account", path: "/api/v1/masters/generalaccount" },
      { title: "Account Category", path: "/api/v1/masters/accountcategory" },
      { title: "Personal Account", path: "/api/v1/masters/personalaccount" },
    ],
  },

  {
    title: "Setting",
    path: "/api/v1/setting",
    subItem: [
      { title: "Bill Setting", path: "/api/v1/setting/billsetting" },
      {
        title: "Bill Amount Setting",
        path: "/api/v1/setting/billamountsetting",
      },
      { title: "Payment Setting", path: "/api/v1/setting/paymentsetting" },
      { title: "Email Setting", path: "/api/v1/setting/emailsetting" },
      { title: "Template Setting", path: "/api/v1/setting/templatesetting" },
      { title: "Report Setting", path: "/api/v1/setting/reportsetting" },
      { title: "Widget Setting", path: "/api/v1/setting/widgetsetting" },
    ],
  },
  {
    title: "Print",
    path: "/api/v1/print",
    subItem: [
      {
        title: "Print Bill with Receipt",
        path: "/api/v1/print/printbillwithreceipt",
      },
      { title: "Print Bank Receipt", path: "/api/v1/print/printbankreceipt" },
      { title: "Print Cash Receipt", path: "/api/v1/print/printcashreceipt" },
      { title: "Print Bank Payment", path: "/api/v1/print/printbankpayment" },
      { title: "Print Cash Payment", path: "/api/v1/print/printcashpayment" },
      { title: "Print Debit Note", path: "/api/v1/print/printdebitnote" },
      { title: "Print Credit Note", path: "/api/v1/print/printcreditnote" },
      {
        title: "Print Journal Voucher",
        path: "/api/v1/print/printjournalvoucher",
      },
      { title: "Print Enroachment", path: "/api/v1/print/printenroachment" },
      { title: "Print Bill (Only)", path: "/api/v1/print/printbillonly" },
      {
        title: "Print Bill (Month Breakup)",
        path: "/api/v1/print/printbillmonthbreakup",
      },
    ],
  },
];
export default MenuData;
