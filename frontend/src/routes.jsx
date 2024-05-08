import Dashboard from "./pages/Dashboard/Dashboard";
import BillGeneration from "./pages/Bill Generation/Bill-Generation";
import Ledger from "./pages/Ledger/Ledger.jsx";
import Receipt from "./pages/Receipt/receipt.jsx";
import DebitNote from "./pages/DebitNote/DebitNote";
import ClosingJV from "./pages/ClosingJV/ClosingJV";
import OpeningBalance from "./pages/OpeningBalance/OpeningBalance";
import MultipleReceiptAndPayment from "./pages/MultipleReceiptAndPayment/MultipleReceiptAndPayment";
import LedgerEdit from "./pages/LedgerEdit/LedgerEdit";
import ChequeSlipGeneration from "./pages/ChequeSlipGeneration/ChequeSlipGeneration";

const vendorManagement = [
  {
    path: "/vendormanagement/addvendoraccount",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/vendormanagement/updateamcandworkorder",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/vendormanagement/addvendorbill",
    component: Dashboard,
    exact: true,
  },
  { path: "/vendormanagement/vendorlist", component: Dashboard, exact: true },
];

const registers = [
  { path: "/registers/jform", component: Dashboard, exact: true },
  { path: "/registers/iform", component: Dashboard, exact: true },
  { path: "/registers/shares", component: Dashboard, exact: true },
  { path: "/registers/nomination", component: Dashboard, exact: true },
  { path: "/registers/deposit", component: Dashboard, exact: true },
  { path: "/registers/insurance", component: Dashboard, exact: true },
  { path: "/registers/noticeboard", component: Dashboard, exact: true },
  { path: "/registers/pollingbooth", component: Dashboard, exact: true },
  { path: "/registers/documentissue", component: Dashboard, exact: true },
  { path: "/registers/documentsissued", component: Dashboard, exact: true },
  { path: "/registers/documentupload", component: Dashboard, exact: true },
  { path: "/registers/loanregister", component: Dashboard, exact: true },
  { path: "/registers/tenantregister", component: Dashboard, exact: true },
];

const masters = [
  { path: "/masters/generalaccount", component: Dashboard, exact: true },
  { path: "/masters/accountcategory", component: Dashboard, exact: true },
  { path: "/masters/personalaccount", component: Dashboard, exact: true },
];

const transactions = [
  {
    path: "/transaction/billgeneration",
    component: BillGeneration,
    exact: true,
  },
  {
    path: "/transaction/memberreceipt",
    component: Receipt,
    exact: true,
    props: {
      page: "Member Receipt",
      accountSelectionName: "SELECT BANK/CASH ACCOUNT",
    },
  },
  {
    path: "/transaction/bankreceipt",
    component: Receipt,
    exact: true,
    props: {
      page: "Bank Receipt",
      accountSelectionName: "SELECT BANK ACCOUNT",
    },
  },
  {
    path: "/transaction/cashreceipt",
    component: Receipt,
    exact: true,
    props: {
      page: "Cash Receipt",
      accountSelectionName: "SELECT CASH ACCOUNT",
    },
  },
  {
    path: "/transaction/supplementaryreceipt",
    component: Receipt,
    exact: true,
    props: {
      page: "Supplementary Receipt",
      accountSelectionName: "SELECT BANK/CASH ACCOUNT",
    },
  },
  {
    path: "/transaction/bankpayment",
    component: Receipt,
    exact: true,
    props: {
      page: "Bank Payment",
      accountSelectionName: "SELECT BANK ACCOUNT",
    },
  },
  {
    path: "/transaction/cashpayment",
    component: Receipt,
    exact: true,
    props: {
      page: "Cash Payment",
      accountSelectionName: "SELECT CASH ACCOUNT",
    },
  },
  {
    path: "/transaction/bankreconcillation",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/transaction/debitnote",
    component: DebitNote,
    exact: true,
    props: { page: "Debit Note" },
  },
  {
    path: "/transaction/creditnote",
    component: DebitNote,
    exact: true,
    props: { page: "Credit Note" },
  },
  {
    path: "/transaction/journalvoucher",
    component: DebitNote,
    exact: true,
    props: { page: "Journal Voucher" },
  },
  {
    path: "/transaction/closingjv",
    component: ClosingJV,
    exact: true,
    props: { page: "Journal Voucher (Closing)" },
  },
  {
    path: "/transaction/openingbalance",
    component: OpeningBalance,
    exact: true,
    props: { page: "Opening Balance" },
  },
  {
    path: "/transaction/multiplereceipt",
    component: MultipleReceiptAndPayment,
    exact: true,
    props: { page: "Multiple Receipt" },
  },
  {
    path: "/transaction/multiplepayment",
    component: MultipleReceiptAndPayment,
    exact: true,
    props: { page: "Multiple Payment" },
  },
  { path: "/transaction/ledgeredit", component: LedgerEdit, exact: true },
  {
    path: "/transaction/chequeslipgeneraton",
    component: ChequeSlipGeneration,
    exact: true,
    props: { page: "Cheque Slip Generaton" },
  },
];

const setting = [
  { path: "/setting/billsetting", component: Dashboard, exact: true },
  { path: "/setting/billamountsetting", component: Dashboard, exact: true },
  { path: "/setting/paymentsetting", component: Dashboard, exact: true },
  { path: "/setting/emailsetting", component: Dashboard, exact: true },
  { path: "/setting/templatesetting", component: Dashboard, exact: true },
  { path: "/setting/reportsetting", component: Dashboard, exact: true },
  { path: "/setting/widgetsetting", component: Dashboard, exact: true },
];

const print = [
  { path: "/print/printbillwithreceipt", component: Dashboard, exact: true },
  { path: "/print/printbankreceipt", component: Dashboard, exact: true },
  { path: "/print/printcashreceipt", component: Dashboard, exact: true },
  { path: "/print/printbankpayment", component: Dashboard, exact: true },
  { path: "/print/printcashpayment", component: Dashboard, exact: true },
  { path: "/print/printdebitnote", component: Dashboard, exact: true },
  { path: "/print/printcreditnote", component: Dashboard, exact: true },
  { path: "/print/printjournalvoucher", component: Dashboard, exact: true },
  { path: "/print/printenroachment", component: Dashboard, exact: true },
  { path: "/print/printbillonly", component: Dashboard, exact: true },
  { path: "/print/printbillmonthbreakup", component: Dashboard, exact: true },
];

const routes = [
  { path: "/", component: Dashboard, exact: true },
  // { path: "/bill-generation", component: BillGeneration, exact: true },
  { path: "/pay", component: Dashboard, exact: true },
  { path: "/ledger", component: Ledger, exact: true },
  { path: "/outstandingreport", component: Dashboard, exact: true },
  { path: "/complaint", component: Dashboard, exact: true },
  { path: "/ledger", component: Dashboard, exact: true },
  { path: "/sendnotification", component: Dashboard, exact: true },
  { path: "/reports", component: Dashboard, exact: true },
  { path: "/quickreports", component: Dashboard, exact: true },

  ...vendorManagement,

  { path: "/quickreports", component: Dashboard, exact: true },

  ...registers,

  { path: "/memberlist", component: Dashboard, exact: true },

  ...masters,
  ...transactions,
  ...setting,
  ...print,
];
export default routes;
