//BaseURL------------------------------------------------
// export const BASE_URL = "http://13.233.242.111/digipay/v2/"
// export const BASE_URL = 'http://alliancecashlb-1205164623.us-east-1.elb.amazonaws.com/digipay/v1/';
export const BASE_URL = "https://api.digipay.guru/digipay/v2/";
// export const BASE_URL = "https://api.myalliancecash.com/digipay/v2/";
//BaseURL------------------------------------------------
export const API_COMPANY_CONFIG = 'base/company_config';
export const API_COMPANY_ADMIN = 'auth/company_admin';
export const API_LANGUAGE_CONFIG = 'base/language_config';
export const API_STATES_LIST = 'base/states';
export const API_CITIES_LIST = 'base/cities';
export const API_NOTIFICATIONS = 'notification/notifications';

//Login & Register
export const API_LOGIN_CUSTOMER = "auth/customer/login";
export const API_REGISTER_CUSTOMER = 'login_register/customer/register';
export const API_VERIFY_OTP_CUSTOMER = 'auth/verify_otp';
// export const API_RESEND_OTP_CUSTOMER = 'login_register/customer/resend_otp';
export const API_RESEND_OTP_CUSTOMER = 'auth/resend_otp';
// export const API_CREATE_PIN_CUSTOMER = 'login_register/customer/login_pin';
export const API_CREATE_PIN_CUSTOMER = 'auth/customer/login_pin';
export const API_CREATE_PIN_CUSTOMER_1 = 'auth/login_pin';
export const API_GET_CUSTOMER_DETAILS = 'customer/user_detail';
export const API_GET_PROFILE = 'login_register/customer/getprofile';
//export const API_EDIT_ADDRESS = 'login_register/customer/edit_address';
export const API_FORGOT_LOGIN_PIN = 'login_register/customer/forgotloginpin';
// export const API_VERIFY_LOGIN_PIN = 'login_register/customer/verify_login_pin';
export const API_VERIFY_LOGIN_PIN = 'auth/customer/verify_login_pin';
// export const API_VERIFY_TRANSACTION_PIN = 'login_register/customer/verify_transaction_pin';
export const API_VERIFY_TRANSACTION_PIN = 'auth/verify_transaction_pin';
export const API_KYC_STATUS = 'login_register/customer/kyc_status';
export const API_GOV_DOCUMENTS = 'customer/documents';
export const API_USER_DOCUMENTS = 'customer/user_documents';
// export const API_SAVE_BASIC_DETAILS = 'login_register/customer/profile';
export const API_SAVE_BASIC_DETAILS = 'customer/user_detail';
// export const API_SAVE_ADDRESS_DETAILS = 'login_register/customer/address';
export const API_SAVE_ADDRESS_DETAILS = 'customer/address';
// export const API_CREATEPIN_CUSTOMER = 'login_register/customer/login_pin'
export const API_CREATEPIN_CUSTOMER = 'auth/login_pin';
export const API_SETPIN_CUSTOMER = 'login_register/customer/createloginpin'
export const API_VERIFYPIN_CUSTOMER = 'login_register/customer/verifyloginpin'
// export const API_CHANGE_TRANS_PIN = 'login_register/customer/transaction_pin';
export const API_CHANGE_TRANS_PIN = 'auth/customer/transaction_pin';
export const API_CHANGE_TRANS_PIN_1 = 'auth/transaction_pin';
export const API_FORGET_PIN_CUSTOMER = 'auth/customer/login_pin';
export const API_CREATE_LOGINPIN_CUS = 'login_register/customer/loginpin ';
export const API_VERIFY_OTP_SIGNUP = 'login_register/customer/verifyotpforsingup';
export const API_BANK = 'customer/bank';
export const API_BANK_1 = 'customer/bank';
export const API_USER_EXTRA_FIELDS_FOR_REGISTRATION = 'customer/additional_detail';
export const API_USER_EXTRA_FIELDS = 'customer/additional_detail';
export const API_USER_SAVED_EXTRA_FIELDS = 'customer/saved_additional_detail';
export const API_POST_PAYMENT = "wallet_transaction/pay_fuel";
// Wallet / Transaction
export const API_SEARCH_USER_PHONE = 'auth/search_user';
export const API_WALLET_TRANSACTIONS = 'wallet_transaction/transactions';
export const API_WALLET_TRANSACTION_DETAILS = 'wallet_transaction/transaction_detail';
export const API_PAY_MERCHANT = 'wallet_transaction/pay_merchant';
export const API_SCAN_QR = 'customer/scan_qr';
export const API_GET_WALLET_BAlANCE = 'wallet_transaction/wallet_balance';
export const API_ADD_MONEY = 'wallet_transaction/add_money';
export const API_ADD_MONEY_1 = 'wallet_transaction/add_money';
export const API_WITHDRAW_MONEY = 'wallet_transaction/withdraw_money';
export const API_TRANSFER_MONEY = 'wallet_transaction/transfer_money';
export const API_REQUEST_MONEY = 'wallet_transaction/request_money';
export const API_PAY_REQUEST_MONEY = 'wallet_transaction/pay_request_money';
export const API_CASH_IN_AGENT = 'wallet_transaction/cash_in_agent';
export const API_CASH_OUT_AGENT = 'wallet_transaction/cash_out_agent';
export const API_TRANSFER_BANK_AGENT = "wallet_transaction/cash_transfer_bank_agent";
export const API_TRANSFER_WALLET_AGENT = "wallet_transaction/cash_transfer_agent";
export const API_VENDOR_LIST = "wallet_transaction/vendor_list"
export const API_VENDOR_EXTRA_FIELDS_LIST = "wallet_transaction/vendor_extra_feilds"
export const API_MOBILE_RECHARGE_PAYMENT = "wallet_transaction/recharge_mobile"
export const API_MOBILE_BILL_PAYMENT = "wallet_transaction/pay_bill_mobile"
export const API_ELECTRICITY_BILL_PAYMENT = "wallet_transaction/pay_bill_electricity"
export const API_EXCHANGE_RATE = "wallet_transaction/exchange_rate"
export const API_PRODUCT_CHARGES = "wallet_transaction/product_charges"
export const API_INTERNATIONAL_TRANSFER = "wallet_transaction/transfer_money_international"


//Fuel Retail
export const API_GET_VEHICLE_BRANDS = 'fuel_retail/vehicle_brand';
export const API_GET_FUEL_TYPE = 'fuel_retail/fuel_type';
export const API_GET_VEHICLE_TYPES = 'fuel_retail/vehicle_type';
export const API_POST_NEW_VEHICLE = 'fuel_retail/vehicle';
export const API_GET_MY_VEHICLES = 'fuel_retail/vehicle';
export const API_POST_PRESET_FUEL = "fuel_retail/preset_value";
export const API_FUEL_REQUEST = "fuel_retail/request_fuel";
export const API_POST_ATTACH_DEVICE = 'fuel_retail/attach_device';
//export const API_GET_FUEL_TYPE = 'login_register/customer/fuel_type';

//Rewards
export const API_REWARD_POINTS = 'reward_promotion/reward_points';
export const API_REDEEM_REWARD_POINTS = 'reward_promotion/redeem_reward_points';
export const API_REFERRAL_CODE = 'reward_promotion/refferal_code';
export const API_REFERRAL_CODE_CHECK = "reward_promotion/check_referral_code";
export const API_CMS_PAGES = 'base/cms';
export const API_FAC_MAKE_PAYMENT = 'wallet_transaction/fac_payment/make_payment';
export const API_FAC_PAYMENT_TOKEN = 'wallet_transaction/fac_payment/token';
export const API_GET_RECHARGE_VENDORS = "wallet_transaction/topup_billpayment/recharge_vendors";
export const API_BROWS_PLAS_BY_VENDOR = "wallet_transaction/topup_billpayment/recharge_plans";
export const API_PREPAIDMOBILE_RECHARGE = "wallet_transaction/topup_billpayment/send_transfer";
// export const API_MOBILE_RECHARGE_DETAILS = "wallet_transaction/flutterwave_billpayment/recharge_detail";
export const API_MOBILE_RECHARGE_DETAILS = "wallet_transaction/topup_billpayment/recharge_detail";
export const PAY_STACK_INITIATE_TRANSACTION = "wallet_transaction/pay_stack/initiate_transaction";
export const PAY_STACK_PAYMENT_STATUS = "wallet_transaction/pay_stack/payment_status";
export const PAY_STACK_ADD_MONEY = "wallet_transaction/pay_stack/add_money";

//Recharge
export const API_GET_AIRTIME_RECHARGE_VENDORS = 'wallet_transaction/flutterwave_billpayment/recharge_vendors';
export const API_VALIDATE_RECHARGE_SERVICE = 'wallet_transaction/flutterwave_billpayment/validate_service';
export const API_RECHARGE_AIRTIME = 'wallet_transaction/flutterwave_billpayment/send_transfer';
export const API_GET_MOBILEDATA_PLANS = 'wallet_transaction/flutterwave_billpayment/recharge_plans';

//Reposts
export const API_GET_EXPENSE_REPORTS_LIST = 'wallet_transaction/transactions_report';

//User info for QR Scans
export const CUSTOMER_USER_INFO = 'customer/user_info';
export const MERCHANT_USER_INFO = 'merchant/user_info';
export const MERCHANT_BUSINESS_INFO = 'merchant/business_info';
export const AGENT_USER_INFO = 'agent/user_info';
export const DEVICE_INFO = 'device/device_info';
export const MY_QR_CODE = "customer/my_qr_code";
export const API_ALLOW_PRODUCTS = 'profile_threshold/allow_products';
export const CHECK_THRESHOLD = "profile_threshold/check_threshold";

export const GET_SECURITY_QUESTIONS = "auth/security_question";
export const SAVE_SECURITY_QUESTION_ANSWER = "auth/security_question";
export const LOG_OUT = "auth/logout";


//Micro Lending Harsh Kansara
export const ML_LOAN_CATEGORY = "wallet_transaction/micro_lending/loan_category";
export const ML_LOAN_PLAN = "wallet_transaction/micro_lending/loan_category_plan";
export const ML_LOAN_ADDITIONAL_DETAILS = "wallet_transaction/micro_lending/additional_detail";
export const ML_LOAN_DOCUMENTS_GET = "wallet_transaction/micro_lending/documents";
export const ML_LOAN_APPLY_APPLICATION = "wallet_transaction/micro_lending/loan_request";

//Monie Metter
export const MM_ACTIVE_LOAN = "wallet_transaction/micro_lending/active_loans";
export const MM_LOAN_INSTALLMENT = "wallet_transaction/micro_lending/loan_installment";
export const MM_INSTALLMENT_PAYMENT = "wallet_transaction/micro_lending/make_installment_payment";