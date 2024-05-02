
const MenuData = [
    {
      title: "Dashboard",
      path: "/",
      
    },
    {
      title: "Pay Now",
      path: "/pay",
      
    },
    {
      title: "Ledger",
      path: "/ledger",
      
    },
    {
      title: "Outstanding Report",
      path: "/outstandingReport",
      
    },
    {
      title: "Complaint",
      path: "/complaint",
      
    },
    {
      title: "Send Notifications",
      path: "/sendnotification",
      
    },
    {
      title: "Reports",
      path: "/reports",
      
    },
    {
      title: "Quick Reports",
      path: "/quickreports",
      
    },
    {
      title: "Vendor Management",
      path: "/",
      subItem: [
        {
          title: "Add Vendor Account",
          path: "/vendormanagement/addvendoraccount",
        },
        {
          title: "Update AMC/Workorder",
          path: "/vendormanagement/updateamcandworkorder",
        },
        {
          title: "Add Vendor Bill",
          path: "/vendormanagement/addvendorbill",
        },
        {
          title: "Vendor List",
          path: "/vendormanagement/vendorlist",
        },
      ],
    },
    {
      title: "Registers",
      path: "/",
      
      
      
      subItem: [
        {
          title: "'J' Form",
          path: "/registers/jform",
        },
        {
          title: "'I' Form",
          path: "/registers/iform",
        },
        {
          title: "Shares",
          path: "/registers/shares",
        },
        {
          title: "Nomination",
          path: "/registers/nomination",
        },
        {
          title: "Deposit",
          path: "/registers/deposit",
        },
        {
          title: "Insurance",
          path: "/registers/insurance",
        },
        {
          title: "Notice Board",
          path: "/registers/noticeboard",
        },
        {
          title: "Polling Booth",
          path: "/registers/pollingbooth",
        },
        {
          title: "Document Issue",
          path: "/registers/documentissue",
        },
        {
          title: "Documents Issued",
          path: "/registers/documentsissued",
        },
        {
          title: "Document Upload",
          path: "/registers/documentupload",
        },
        {
          title: "loan Register",
          path: "/registers/loanregister",
        },
        {
          title: "Tenant Register",
          path: "/registers/tenantregister",
        },
      ],
    },
    {
      title: "Member List",
      path: "/memeberlist",
      
    },
    {
      title: "Masters",
      path: "/",
      
      
      
      subItem: [
        { title: "General Account", path: "/masters/generalaccount" },
        { title: "Account Category", path: "/masters/accountcategory" },
        { title: "Personal Account", path: "/masters/personalaccount" },
      ],
    },
    {
      title: "Transaction",
      path: "/",
      
      
      
      subItem: [
        { title: "Bill Genration", path: "/transaction/billgeneration" },
        { title: "Member Receipt", path: "/memberreceipt" },
        { title: "Bank Receipt", path: "/transaction/bankreceipt" },
        { title: "Cash Receipt", path: "/transaction/cashreceipt" },
        {
          title: "Supplementary Receipt",
          path: "/transaction/supplementaryreceipt",
        },
        { title: "Bank Payment", path: "/transaction/bankpayment" },
        { title: "Cash Payment", path: "/transaction/cashpayment" },
        { title: "Bank Reconcillation", path: "/transaction/bankreconcillation" },
        { title: "Debit Note", path: "/transaction/debitnote" },
        { title: "Credit Note", path: "/transaction/creditnote" },
        { title: "Journal Voucher", path: "/transaction/journalvoucher" },
        { title: "Closing JV", path: "/transaction/closingjv" },
        { title: "Opening Balance", path: "/transaction/openingbalance" },
        { title: "Multiple Receipt", path: "/transaction/multiplereceipt" },
        { title: "Multiple Payment", path: "/transaction/multiplepayment" },
        { title: "Ledger Edit", path: "/transaction/ledgeredit" },
        {
          title: "Cheque Slip Generation",
          path: "/transaction/chequeslipgeneraton",
        },
      ],
    },
  ];
  export default MenuData