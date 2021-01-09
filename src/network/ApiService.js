import axios from 'axios'
import NetInfo from '@react-native-community/netinfo'
import {
    BASE_URL,
    API_ADD_MONEY,
    API_WALLET_TRANSACTIONS,
    API_INTERNATIONAL_TRANSFER,
    API_PRODUCT_CHARGES,
    API_EXCHANGE_RATE,
    API_ELECTRICITY_BILL_PAYMENT,
    API_MOBILE_BILL_PAYMENT,
    API_MOBILE_RECHARGE_PAYMENT,
    API_VENDOR_EXTRA_FIELDS_LIST,
    API_VENDOR_LIST,
    API_TRANSFER_WALLET_AGENT,
    API_TRANSFER_BANK_AGENT,
    API_CASH_OUT_AGENT,
    API_CASH_IN_AGENT,
    API_PAY_REQUEST_MONEY,
    API_REQUEST_MONEY,
    API_TRANSFER_MONEY,
    API_WITHDRAW_MONEY,
    API_GET_WALLET_BAlANCE,
    API_SCAN_QR,
    API_PAY_MERCHANT,
    API_WALLET_TRANSACTION_DETAILS
} from './ApiConstants';
import {getToken, setItem, getItem, clearSession} from '../data/PrefUtils';
import {AlertDialog} from '../components/common';
import {store} from '../App'
import Navigator from '../navigation/Navigator';
import {IS_LOGGED_IN, LOGGER_KEY, CURRENT_LOCATION} from '../data/PrefKeys';
import {HOME_LOGOUT} from '../reducers/types';
import Axios from 'axios';
import {COMPANY_ID} from '../utils/AppConstants';
// import {LogglyTracker} from 'react-native-loggly-jslogger';
import {getDevice_detail, getLocation_info} from '../utils/Utils';
import Utils from '../utils/Utils';
import DataDog from "../logging/DataDog";
import CommonController from "../controllers/CommonController";

// const logger = new LogglyTracker();
export const METHOD = {

    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    PATCH: "patch"

}
export const getApiCall = async (endpoint, params = {}, onSuccess, onFailure) => {
    const token = await getToken()

    const currentDate = new Date().getTime()

    params.language = 'en'
    console.log('---------------------------------------------')
    console.log("EndPoint : " + BASE_URL + endpoint)
    console.log("Token : " + token);
    console.log("Headers : " + JSON.stringify(
        {
            Authorization: token,
            CompanyID: COMPANY_ID,
            RequestID: parseInt(new Date().getTime() / 1000),
        }));
    console.log("Request params : " + JSON.stringify(params));
    console.log("Is Loader Running ? " + store.getState().common.loading);
    console.log('---------------------------------------------')

    let dataDogAttr = {}
    dataDogAttr.url = BASE_URL + endpoint
    dataDogAttr.params = JSON.stringify(params)
    dataDogAttr.headers = JSON.stringify(
        {
            Authorization: token,
            CompanyID: COMPANY_ID,
            RequestID: parseInt(new Date().getTime() / 1000),
        }
    )

    const connectionInfo = await NetInfo.getConnectionInfo()

    if (connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
        onFailure('Please check your internet connection.')
    } else {
        Axios.get(endpoint, {
            baseURL: BASE_URL,
            params,
            timeout: 60000,
            headers: {
                Authorization: token,
                CompanyID: COMPANY_ID,
                RequestID: parseInt(new Date().getTime() / 1000),
            }
        }).then(async (response) => {

            dataDogAttr.duration = `${new Date().getTime() - currentDate}ms`
            dataDogAttr.status_code = response.status

            console.log('------------------ Response -------------------')
            console.log("EndPoint : " + BASE_URL + endpoint)
            console.log('Response : ' + JSON.stringify(response));
            console.log('---------------------------------------------')

            if (response) {
                if (response.status === 200) {
                    if (response.data.success) {
                        try {
                            // onSuccess(response.data.data ? response.data.data : response.data)
                            onSuccess(response)
                            dataDogAttr.response = JSON.stringify(response.data);
                            DataDog.i("Success", dataDogAttr)
                        } catch (err) {
                            console.log('------------------ Error -------------------')
                            console.log("EndPoint : " + BASE_URL + endpoint)
                            console.log('Error : ' + err + " for " + endpoint);
                            console.log('---------------------------------------------')
                            onFailure('Something went wrong')
                            dataDogAttr.errorMsg = err
                            DataDog.e("Error", dataDogAttr)
                        }

                    } else {
                        const error = response.data.error[0];
                        console.log('------------------ Error -------------------')
                        console.log("EndPoint : " + BASE_URL + endpoint)
                        console.log('Error : ' + error + " for " + endpoint);
                        console.log('---------------------------------------------')
                        onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')
                        dataDogAttr.errorMsg = error
                        DataDog.e("Error", dataDogAttr)
                    }
                } else if (response.status === 401) {

                    console.log('------------------ Error -------------------')
                    console.log("EndPoint : " + BASE_URL + endpoint)
                    console.log('Error : ' + response);
                    console.log('---------------------------------------------')

                    AlertDialog.show({
                        title: 'Session Expired',
                        message: 'Session is expired. Need to re-login',
                        positiveButton: {
                            title: 'Relogin',
                            onPress: async () => {
                                await clearSession()
                                AlertDialog.hide();
                                CommonController.logOutApi(onDone => {
                                    Navigator.resetNavigation('SignIn')
                                });
                            }
                        }
                    })
                    onFailure('Session expired')

                } else {

                    console.log('------------------ Error -------------------')
                    console.log("EndPoint : " + BASE_URL + endpoint)
                    console.log('Error : ' + error + " for " + endpoint);
                    console.log('---------------------------------------------')

                    onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')

                    dataDogAttr.errorMsg = error
                    DataDog.e("Error", dataDogAttr)

                }
            } else {
                onFailure('Something went wrong')
            }
        }).catch(async (error) => {

            console.log('------------------ Error -------------------')
            console.log("EndPoint : " + BASE_URL + endpoint)
            console.log('Error : ' + error + " for " + endpoint);
            console.log('---------------------------------------------')

            dataDogAttr.duration = `${new Date().getTime() - currentDate}ms`
            DataDog.e("Error", dataDogAttr)
            console.log('Error', error);
            // let data = await loggerdata()
            /*logger.push({'logglyKey': LOGGER_KEY});
            logger.push(
                {
                    'api_url': BASE_URL + endpoint,
                    'api_header': "{Authorization :" + token + '}',
                    'api_request_param': params,
                    'api_response': error.response,
                    'api_response_status': error,
                    ...data
                })*/
            /*console.log({
                'api_url': BASE_URL + endpoint,
                'api_header': "{Authorization :" + token + '}',
                'api_request_param': params,
                'api_response': error.response,
                'api_response_status': error.response.status,
                ...data
            })*/
            onFailure('Something went wrong')
        })
    }
}


export default async (endpoint, params = {}, onSuccess, onFailure, method = METHOD.POST) => {

    const currentDate = new Date().getTime()

    if (endpoint === API_ADD_MONEY ||
        endpoint === API_WALLET_TRANSACTIONS ||
        endpoint === API_WALLET_TRANSACTION_DETAILS ||
        endpoint === API_PAY_MERCHANT ||
        endpoint === API_SCAN_QR ||
        endpoint === API_GET_WALLET_BAlANCE ||
        endpoint === API_ADD_MONEY ||
        endpoint === API_WITHDRAW_MONEY ||
        endpoint === API_TRANSFER_MONEY ||
        endpoint === API_REQUEST_MONEY ||
        endpoint === API_PAY_REQUEST_MONEY ||
        endpoint === API_CASH_IN_AGENT ||
        endpoint === API_CASH_OUT_AGENT ||
        endpoint === API_TRANSFER_BANK_AGENT ||
        endpoint === API_TRANSFER_WALLET_AGENT ||
        endpoint === API_VENDOR_LIST ||
        endpoint === API_VENDOR_EXTRA_FIELDS_LIST ||
        endpoint === API_MOBILE_RECHARGE_PAYMENT ||
        endpoint === API_MOBILE_BILL_PAYMENT ||
        endpoint === API_ELECTRICITY_BILL_PAYMENT ||
        endpoint === API_EXCHANGE_RATE ||
        endpoint === API_PRODUCT_CHARGES ||
        endpoint === API_INTERNATIONAL_TRANSFER) {
        let device_detail = await getDevice_detail()
        console.log(device_detail, "device_detaildevice_detaildevice_detail")
        let d = await getLocation_info()
        let location_detail = await getItem(CURRENT_LOCATION)
        console.log(location_detail, "DEtailkDEtailkDEtailkDEtailkDEtailk")

        params = {
            ...params,
            device_detail: device_detail,
            location_detail: location_detail
        }


    }
    await params
    console.log("Api Params: ", params)
    const token = await getToken()

    let dataDogAttr = {}
    dataDogAttr.url = BASE_URL + endpoint
    dataDogAttr.params = JSON.stringify(params)
    dataDogAttr.headers = JSON.stringify(
        {
            Authorization: token,
            CompanyID: COMPANY_ID,
            RequestID: parseInt(new Date().getTime() / 1000),
        }
    )
    console.log("AMi log....")


    const connectionInfo = await NetInfo.getConnectionInfo()

    if (connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
        onFailure('Please check your internet connection.')
    } else {
        params.company_id = COMPANY_ID;
        if (params.amount != null) {
            params.amount = params.amount.toString().replace(",", "");
        }
        const config = {
            baseURL: BASE_URL,
            params,
            timeout: 60000,
            headers: {
                
                Authorization: token,
                CompanyID: COMPANY_ID,
                RequestID: parseInt(new Date().getTime() / 1000),
            },
        }


        let request = {}

        switch (method) {

            case METHOD.POST:
                request = axios.post(endpoint, params, config)
                break;
            case METHOD.GET:
                request = axios.get(endpoint, config)
                break;
            case METHOD.DELETE:
                request = axios.delete(endpoint, config)
                break;
            case METHOD.PUT:
                request = axios.put(endpoint, params, config)
                break;
            case METHOD.PATCH:
                request = axios.patch(endpoint, params, config)
                break;
        }

        console.log('============================================')
        console.log("EndPoint : " + BASE_URL + endpoint)
        console.log("Token : " + token);
        console.log("Headers : " + JSON.stringify(
            {
                Authorization: token,
                CompanyID: COMPANY_ID,
                RequestID: parseInt(new Date().getTime() / 1000),
            }));
        console.log("Request params : " + JSON.stringify(params));
        console.log("Is Loader Running ? " + store.getState().common.loading);
        console.log('============================================')

        request.then(async (response) => {
            dataDogAttr.duration = `${new Date().getTime() - currentDate}ms`
            dataDogAttr.status_code = response.status

            console.log('=============== Response ==================')
            console.log("EndPoint : " + BASE_URL + endpoint)
            console.log('Response : ' + JSON.stringify(response));
            console.log('============================================')
            // let data = await loggerdata()
            /*logger.push({'logglyKey': LOGGER_KEY});
            logger.push(
                {
                    'api_url': BASE_URL + endpoint,
                    'api_header': "{Authorization :" + token + '}',
                    'api_request_param': params,
                    'api_response': response.data,
                    'api_response_status': response.status,
                    ...data
                })
            console.log("logger",
                {
                    'api_url': BASE_URL + endpoint,
                    'api_header': "{Authorization :" + token + '}',
                    'api_request_param': params,
                    'api_response': response.data,
                    'api_response_status': response.status,
                    'method': method,
                    ...data
                }
            );*/

            if (response) {
                if (response.status === 200) {
                    if (response.data.success === 1) {
                        try {
                            onSuccess(response)
                            dataDogAttr.response = JSON.stringify(response.data);
                            DataDog.i("Success", dataDogAttr)
                        } catch (err) {
                            console.log('Error', err);
                            dataDogAttr.errorMsg = err;
                            DataDog.e("Error", dataDogAttr)
                            onFailure('Something went wrong')
                        }

                    } else {
                        console.log("AMi log 1")

                        const error = response.data.error[0];
                        dataDogAttr.errorMsg = error
                        DataDog.e("Error", dataDogAttr)
                        onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')
                    }
                } else if (response.status === 401) {


                    AlertDialog.show({
                        title: 'Session Expired',
                        message: 'Session is expired. Need to re-login',
                        positiveButton: {
                            title: 'Relogin',
                            onPress: async () => {
                                await clearSession()
                                AlertDialog.hide();
                                CommonController.logOutApi(onDone => {
                                    Navigator.resetNavigation('SignIn')
                                });
                            }
                        }
                    })
                    onFailure('Session expired')

                } else {
                    console.log("AMi log 2")

                    onFailure(error && typeof (error) === "string" ? error : 'Something went wrong')
                    console.log("100")
                    dataDogAttr.errorMsg = error
                    DataDog.e("Error", dataDogAttr)

                }
            } else {
                console.log("101")
                // let data = await loggerdata()
                /*logger.push({'logglyKey': LOGGER_KEY});
                logger.push(
                    {
                        'api_url': BASE_URL + endpoint,
                        'api_header': "{Authorization :" + token + '}',
                        'api_request_param': params,
                        'api_response': response.data,
                        'api_response_status': response.status,
                        ...data
                    })*/
                onFailure('Something went wrong')

                dataDogAttr.errorMsg = response.data
                DataDog.e("Error", dataDogAttr)
            }
        }).catch(async (error,xhr, ajaxOptions, thrownError) => {
            console.log("102")
            // let data = await loggerdata()
            console.log(error)
            /*logger.push({'logglyKey': LOGGER_KEY});
            logger.push(
                {
                    'api_url': BASE_URL + endpoint,
                    'api_header': "{Authorization :" + token + '}',
                    'api_request_param': params,
                    'api_response': error.response,
                    'api_response_status': error,
                    ...data
                })*/
            /*console.log({
                'api_url': BASE_URL + endpoint,
                'api_header': "{Authorization :" + token + '}',
                'api_request_param': params,
                'api_response': error.response,
                'api_response_status': error.response.status,
                ...data
            })*/

            console.log('Error', error,xhr, ajaxOptions, thrownError);
            
            dataDogAttr.errorMsg = JSON.stringify(error.response);
            DataDog.e("Error", dataDogAttr)

            if (error && error.response && error.response.status === 401) {


                AlertDialog.show({
                    title: 'Session Expired',
                    message: 'Session is expired. Need to re-login',
                    positiveButton: {
                        title: 'Relogin',
                        onPress: async () => {
                            await clearSession()
                            AlertDialog.hide();
                            CommonController.logOutApi(onDone => {
                                Navigator.resetNavigation('SignIn')
                            });
                        }
                    }
                })
                onFailure('Session expired')

            } else
                onFailure('Something went wrong')
        })
    }

}
