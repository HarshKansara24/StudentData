import PushNotification from 'react-native-push-notification';
import NotificationHandler from './NotificationHandler';
// import PushNotificationIOS from "@react-native-community/push-notification-ios";


export default class NotifService {
    constructor(onRegister, onNotification) {
        this.lastId = 0;

        NotificationHandler.attachRegister(onRegister);
        NotificationHandler.attachNotification(onNotification);

        // Clear badge number at start
        PushNotification.getApplicationIconBadgeNumber(function (number) {
            if (number > 0) {
                PushNotification.setApplicationIconBadgeNumber(0);
            }
        });

        PushNotification.getChannels(function(channels) {
            console.log("Channels : " + channels);
        });
    }

    checkPermission(cbk) {
        return PushNotification.checkPermissions(cbk);
    }

    requestPermissions() {
        return PushNotification.requestPermissions();
    }

    cancelNotif() {
        PushNotification.cancelLocalNotifications({id: '' + this.lastId});
    }

    cancelAll() {
        PushNotification.cancelAllLocalNotifications();
    }

    abandonPermissions() {
        PushNotification.abandonPermissions();
    }

    getScheduledLocalNotifications(callback) {
        PushNotification.getScheduledLocalNotifications(callback);
    }

    createOrUpdateChannel() {
        PushNotification.createChannel(
            {
                channelId: "102", // (required)
                channelName: `scheduled_notification_alarm`, // (required)
                channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`, // (optional) default: undefined.
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: 4, // (optional) default: 4. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }
}
