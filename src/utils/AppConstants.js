export const APP_NAME = "MonieTree"

//DigiPay => Dev Server
// export const COMPANY_ID = "949533e920f24240bfd2dfce58f3fa61";
//MonieTree => Live Server
export const COMPANY_ID = "9346e1a8a84744dea0be2c1b5b358430";

export const MAX_MOBILE_NUMBER = 15;
export const MIN_MOBILE_NUMBER = 7;
export const SUCCESS = 1;
export const FAILED = 0;
export const YES = 'Y';
export const NO = 'N';
export const QR_CODE_TYPE_DEFAULT = 1;
export const QR_CODE_TYPE_CASH_IN_OUT = 2;
export const DIAL_CODE = "+234";
export const DEFAULT_COUNTRY = {
    code: DIAL_CODE,
    shortName: DEFAULT_SHORT_NAME,
}
export const DEFAULT_SHORT_NAME = "US";
export const LOGIN = 2;
export const REGISTER = 1;
export const FORGOT_PIN = 3;
export const PAY_TO_USER = 4;
export const PAY_TO_MERCHANT = 8;
export const PAY_TO_AGENT = 14;
export const ADD_MONEY = 5;
export const CHANGE_PIN = 6;
export const CREATE_PIN = 7;
export const REQEUST_FROM_USER = 8;
export const SEND_TO_BANK = 9;
export const SET_TRANSCATION__PIN = 10;
export const VERIFY_TRANSCATION__PIN = 11;
export const CHANGE_TRANSCATION__PIN = 13;
export const EDIT_PROFILE = 12;
export const MOBILE_RECHARGE = 14;
export const MOBILE_BILL = 15;
export const ELECTRICITY_BILL = 16;
export const FORGOT_TRANS_PIN = 18;
export const AIRTIME_RECHARGE = 19;
export const CABLETV_RECHARGE = 20;
export const TOLL_FEE_PAY = 21;
export const DATE_FORMAT = "DD-MM-YYYY";
export const SUCCESSFUL = '1';
export const UNSUCCESSFUL = '0';
export const CASH_OUT_WALLET = 'COB';
export const CASH_IN_WALLET = 'CIB';
export const CASH_IN_AGENT = 'CIA';
export const CASH_OUT_AGENT = 'COA';
export const CASH_TRANSFER_AGENT = 'CTA';
export const CASH_TRANSFER_BANK_AGENT = 'CTBA';
export const PERSON_TO_PERSON_TRANSFER = 'P2P';
export const PERSON_TO_MERCHANT_TRANSFER = 'P2M';
export const PERSON_TO_MERCHANT_DEVICE_TRANSFER = 'P2MD';
export const MERCHANT_REFUND = 'MR';
export const REDEEM_AND_REFER = "RCR";
export const COMMISSION = 'UTC';
export const ATC = 'ATC';
export const LOAN_INSTALLMENT_REPAYMENT = 'LRT';
export const LOAN_INSTALLMENT_PAID = 'LAP';
export const TRANSACTION_STATUS_PENDING = 1;
export const TRANSACTION_STATUS_APPROVED = 2;
export const TRANSACTION_STATUS_SUCCESS = 3;
export const TRANSACTION_STATUS_FAILED = 4;
export const QRCODE_CUSTOMER = 1;
export const QRCODE_MERCHANT = 2;
export const QRCODE_STAFF = 3;
export const QRCODE_AGENT = 4;
export const QRCODE_BRANCH = 5;
export const QRCODE_DEVICE = 6;
export const BANK_ACC_TYPE_SAVING = 1;
export const BANK_ACC_TYPE_CURRENT = 2;
export const ADD = 1;
export const EDIT = 2;
export const DELETE = 3;
export const TRUE = true;
export const FALSE = false;
export const UNDEFINED = undefined;
export const MOBILE_POSTPAID_BILL_SERVICE = "MPB"
export const MOBILE_PREPAID_BILL_SERVICE = "MPR"
export const ELECTRICITY_BILL_SERVICE = "EBP"
export const INTERNATIONAL_TRANSFER_SERVICE = "IR"
export const VENDOR_FIELDS_PARAMS = [
    "vendor_extra_field_id",
    "vendor_extra_field_key",
    "vendor_extra_field_title",
    "vendor_extra_field_value"
]
export const COMMON_HEADER = 1001
export const SCAN_DETAILS_HEADER = 1002
export const WITHDRAWN_REFUND = "UTR"


//Recharge Plan types
export const PLAN_PRICE_TYPE_FIXED = 1
export const PLAN_PRICE_TYPE_RANGE = 2

//Account types for Wallet transactions
export const ACCOUNT_TYPE_ADMIN = 1;
export const ACCOUNT_TYPE_USER = 2;
export const ACCOUNT_TYPE_MERCHANT = 3;
export const ACCOUNT_TYPE_STAFF = 4;
export const ACCOUNT_TYPE_AGENT = 5;
export const ACCOUNT_TYPE_PRODUCT = 6;
export const ACCOUNT_TYPE_BUSINESS = 7;

//Recharge
export const AIRTIME_RECHARGE_CUSTOME_KEY = "airtime"
export const MOBILEDATA_RECHARGE_CUSTOME_KEY = "mobile_data"
export const CABLETV_RECHARGE_CUSTOME_KEY = "cable_tv"
export const ELECTRICITY_RECHARGE_CUSTOME_KEY = "electricity"
export const TOLL_FEE_CUSTOME_KEY = "toll_free"
