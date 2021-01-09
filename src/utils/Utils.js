import {Platform} from 'react-native'
import {Toast} from 'native-base';
import moment from 'moment'


export const isValidEmail = (email) => {

    let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email) === true && email.length <= 40;
}

export const isValidMobile = (mobile) => {

    let length = mobile.length;

    return /^\d+$/.test(mobile) && length >= 7 && length <= 15;
}

export const formatDate = (date, format = 'DD-MM-YYYY', milis = true) => {

    const newDate = !milis ? date * 1000 : date
    return moment(newDate).format(format)
}


export const isValidPassword = (password) => {

    let length = password.length;

    return length >= 6 && length <= 20;
}

export const isEmpty = (value) => {
    return !value || value.toString().trim().length <= 0;
}

export const validtext = (value) => {

    let reg = value.search(" ")
    console.log("regreg", reg)
    return reg === 0 ? true : false;

}

export const isNull = (object) => {
    return object == null ? true : false;
}

export const showToast = (message, duration = 4000, type = 'success') => {
    let styledata = isIos() ? {top: 15} : {}
    Toast.show({
        text: message.toString(),
        duration: duration,
        position: isIos() ? 'top' : 'bottom',
        style: styledata,
        type: type
    })

}

export const showWarningToast = (message, duration = 4000) => {

    showToast(message, duration, 'warning');

}

export const showDangerToast = (message, duration = 4000) => {

    showToast(message, duration, 'danger');

}

export const getDeviceType = () => {

    return isIos() ? 'I' : "A";
}

export const handleApiError = (error) => {

    showDangerToast(isEmpty(error) ? 'Something went wrong' : error.toString())
}

export const isIos = () => {
    return Platform.OS === 'ios'
}


