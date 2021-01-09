import AsyncStorage from '@react-native-community/async-storage';
import {API_TOKEN, USER, IS_LOGGED_IN, TRANSACTION_PIN, UNSUCCESSFUL} from './PrefKeys';
import {store} from '../App';
import {setCountryName, setUserToRedux} from '../actions/CommonActions';

export const setItem = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    if (key === USER) {
        setUserToRedux(JSON.parse(value));
    }
};

export const getItem = async (key) => {
    const value = await AsyncStorage.getItem(key);

    return value;
};

export const setToken = async (value) => {
    await AsyncStorage.setItem(API_TOKEN, value);
};

export const getToken = async () => {
    let token = await AsyncStorage.getItem(API_TOKEN);
    if (token == null) {
        token = '';
    }
    return token;
};

export const setUser = async (value) => {
    await AsyncStorage.setItem(USER, value);
    setUserToRedux(JSON.parse(value));
};

export const getUser = async () => {
    let user = await AsyncStorage.getItem(USER);
    if (user == null) {
        user = '';
    }
    return user;
};

export const removeItem = async (value) => {
    await AsyncStorage.removeItem(value);
};


export const getCurrentDialCode = () => {
    let dialCode = "+234";
 
        dialCode = store.getState().common.dial_code;
 
    return dialCode;
}
export const setCouuntryname = (value) => {
    return store.dispatch(setCountryName(value));
}
export const clearSession = async () => {
    await AsyncStorage.setItem(USER, '')
    await AsyncStorage.setItem(IS_LOGGED_IN, UNSUCCESSFUL)
    await AsyncStorage.setItem(TRANSACTION_PIN, '');
 
}

export const getCurrencySymbol = () => {

    return store.getState().common.customerCurrencySymbol
}

export const getQRCode = async () => {
    let user = await AsyncStorage.getItem(USER);

    user = JSON.parse(user);

    let qrCode = '';
    if (user != null && user.qr_code != null && user.qr_code.qr_code_string != null) {
        console.log("user :- " + user)
        qrCode = user.qr_code.qr_code_string;
    }
    return qrCode;
}
