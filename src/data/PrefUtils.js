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


export const getCurrentDialCode = () => {
    let dialCode = "+91";
 
        dialCode = store.getState().common.dial_code;
 
    return dialCode;
}
export const setCouuntryname = (value) => {
    return store.dispatch(setCountryName(value));
}
