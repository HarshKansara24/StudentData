import {
    COMMON_SET_DIAL_CODE,
    COMMON_SET_COUNTRYNAME,
   
    STUDENT_LIST
} from './types';

let INIT_STATE = {


    dial_code: '+91',
    countryName: 'India',
    studentList: []

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case COMMON_SET_DIAL_CODE:
            return { ...state, dialCode: action.payload }

        case COMMON_SET_COUNTRYNAME:
            return { ...state, countryName: action.payload }

        case STUDENT_LIST:
            return { ...state, studentList: action.payload }

    }
    return state;
};
