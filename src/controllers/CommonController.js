import { Utils } from "../utils"
import { setstudentList } from "../actions/CommonActions"
import { store } from "../App"
import { getItem } from "../data/PrefUtils"
import { STUDENT_LIST_DATA } from "../data/PrefKeys"


export default class CommonController {

    static SaveStudent = async (params, onsuccess) => {
        let student_lst = await getItem(STUDENT_LIST_DATA)
        console.log(student_lst,"student_lst")
        student_lst = student_lst !== null ?  student_lst.length > 0  ? JSON.parse(student_lst) :   student_lst  : []
        student_lst.push(params)
        setstudentList(JSON.stringify(student_lst))
        console.log(student_lst, "dfjsdbfhsdbfsdhfbsdjf")
        onsuccess(true)
    }

}
