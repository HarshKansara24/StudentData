import firebase, { messaging } from 'react-native-firebase'
import { isIos } from './Utils'
import { LAST_MESSAGE_ID } from '../data/PrefKeys';
messageListener = null
export const setupPushNotification = async () => {

    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        // user has permissions

        manageNotifications()

    } else {
        // user doesn't have permission

        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            manageNotifications()

        } catch (error) {
            // User has rejected permissions
        }
    }

}

manageNotifications = async () => {

    this.removeNotificationDisplayedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log("notification opened", notificationOpen)
        if (notificationOpen)
            firebase.notifications().removeDeliveredNotification("124")

    });
    this.removefListener = firebase.notifications().onNotification((notification) => {
        console.log('onNotification ', notification);
        sendNotification(notification);
    });

    firebase.notifications().getInitialNotification().then((notification) => {
        // Process your message as required
        console.log('getInitialNotification ', notification);
        if (notification && ! isIos()) {
            sendNotification(notification);
        }
    });

    firebase.messaging().onMessage((message) => {
        // Process your message as required
        console.log("onMessage", message)
        if (message) {
            sendNotification(message);
        }
    });

}

export const sendNotification = async(notification) => {

    const { data } = notification

    const channel = new firebase.notifications.Android.Channel(
        "101",
        "MonieTree Notification",
        firebase.notifications.Android.Importance.High
    ).setDescription('MonieTree Notifications');

    firebase.notifications().android.createChannel(channel);

    const localNotif = new firebase.notifications.Notification()
        .setNotificationId(Math.random().toString(36).substring(7))
        .setTitle(notification.data.title)
        .setBody(JSON.parse(notification.data.body).message)
        .setData(notification)


    if (!isIos()) {
        localNotif.android.setChannelId("101");
        localNotif.android.setSmallIcon("@mipmap/ic_launcher_round")
        localNotif.android.setChannelId('101')
        localNotif.android.setAutoCancel(true)
        localNotif.android.setBigText(JSON.parse(notification.data.body).message)
        localNotif.android.setPriority(firebase.notifications.Android.Priority.Max)
        localNotif.android.setSmallIcon('@drawable/ic_launcher_round')
        localNotif.android.setLargeIcon('@drawable/launch_screen');
    }

    await firebase.notifications().displayNotification(localNotif);

}

export const bgMessaging = manageNotifications()
export const fcmToken = async () => await firebase.messaging().getToken();
