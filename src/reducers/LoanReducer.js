import {
    LOAN_ADDITION_DETAIL_FIELDS,
    LOAN_DOCUMENTS,
    SELECTED_LOAN_ID, SELECTED_PLAN, LOAN_REQUESTED_AMOUNT
} from './types';

const INIT_STATE = {
    selected_loan_id: null,
    selected_plan: undefined,
    loan_addition_detail_fields: undefined,
    loan_documents: null,
    loan_requested_amount: 0
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECTED_LOAN_ID:
            return { ...state, selected_loan_id: action.payload };
        case SELECTED_PLAN:
            return { ...state, selected_plan: action.payload };
        case LOAN_ADDITION_DETAIL_FIELDS:
            return { ...state, loan_addition_detail_fields: action.payload };
        case LOAN_DOCUMENTS:
            return { ...state, loan_documents: action.payload };
        case LOAN_REQUESTED_AMOUNT:
            return { ...state, loan_requested_amount: action.payload };
            
    }
    return state;
};
