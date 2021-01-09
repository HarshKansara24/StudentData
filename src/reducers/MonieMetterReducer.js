import {
    MONIE_METTER_SELECTED_LOAN,
 
} from './types';

const INIT_STATE = {
    monie_metter_selected_loan:null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case MONIE_METTER_SELECTED_LOAN:
            return { ...state, monie_metter_selected_loan: action.payload };
            
    }
    return state;
};
