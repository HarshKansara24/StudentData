import {
   STUDENT_LIST
} from "../reducers/types";
import {store} from "../App";
import AsyncStorage from "@react-native-community/async-storage";
import { setItem } from "../data/PrefUtils";
import { STUDENT_LIST_DATA } from "../data/PrefKeys";

export const setstudentList = (value) => {
    setItem(STUDENT_LIST_DATA, value)
    store.dispatch({
        type: STUDENT_LIST,
        payload: value,
    });
};

