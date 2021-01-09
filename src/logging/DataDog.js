import { Platform } from "react-native"
import Socket from "./SocketNativeModule"

export default {

    v(message, params) {
        if (Platform.OS === "android")
            Socket.dataDogLog(message, params, 2)//Log.VERBOSE
    },
    d(message, params) {
        if (Platform.OS === "android")
            Socket.dataDogLog(message, params, 3)//Log.DEBUG
    },

    i(message, params) {
        if (Platform.OS === "android")
            Socket.dataDogLog(message, params, 4)//Log.INFO
    },
    w(message, params) {
        if (Platform.OS === "android")
            Socket.dataDogLog(message, params, 5)//Log.WARN
    },
    e(message, params) {
        if (Platform.OS === "android")
            Socket.dataDogLog(message, params, 6)//Log.ERROR
    },
    setDataDogLogger() {
        if (Platform.OS === "android")
            Socket.setDataDogLogger()
    },
    setDefaultAttribute(key, params) {
        if (Platform.OS === "android")
            Socket.setDefaultAttribute(key, params)

    }


}
