import { getItem, getToken} from '../data/PrefUtils';
import {IS_LOGGED_IN} from '../data/PrefKeys';
import {messaging} from 'react-native-firebase';
import * as Utils from "./Utils";

export default class SessionUtils {
    static async isUserLoggedIn() {
        const isLoggedIn = await getItem(IS_LOGGED_IN, '0');
        const token = await getToken();

        console.log("isLoggedIn : " + isLoggedIn);
        console.log("token : " + token);
        console.log("isUserLoggedIn : " + isLoggedIn !== '0' || (!Utils.isEmpty(token)))
        return isLoggedIn !== '0' || (!Utils.isEmpty(token));
    }

    static subscribeToAdminNotifications = async (company_name) => {
        if (company_name !== null) {
            let companyName = company_name.replace(' ', '_');
            let channelName = companyName + '_app_customer';
            console.log('Subscribing to topic ' + channelName);
            await messaging()
                .subscribeToTopic(channelName.toLowerCase())
                .then(() => console.log('Subscribed to topic!'));
        }
    };

    static unSubscribeToAdminNotifications = async (company_name) => {
        //Code is working proper but notifications are managed from Firebase.js for login status
        if (company_name !== null) {
            let companyName = company_name.replace(' ', '_');
            let channelName = companyName + '_app_customer';
            console.log('Unsubscribing to topic ' + channelName);
            await messaging()
                .unsubscribeFromTopic(channelName.toLowerCase())
                .then(() => console.log('Unsubscribed fom the topic!'));
        }
    };
}
