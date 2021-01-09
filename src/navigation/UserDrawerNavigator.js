


import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'
import Dashboard from './Dashboard';
import Sidemenu from './Sidemenu';
import NotificaitonList from '../notification/NotificaitonList';
import settings from '../settings/Settings';
import MyQrCode from '../qr_code/MyQrCode';
import Statements from "../transaction/Statements";
import RewardsList from '../rewards/RewardsList';
import ReferandEarn from '../rewards/ReferandEarn';

const UserDrawerNavigator = createAppContainer(createDrawerNavigator({

    dashboard: { screen: Dashboard },
    //MyQrCode: { screen: MyQrCode },
    transactionHistory: { screen: Statements },
    ReferandEarn: { screen: ReferandEarn }, 
    notification: { screen: NotificaitonList },
    rewards: { screen: RewardsList },
    settings: { screen: settings },
    MyQrCode: { screen: MyQrCode },

}, {
    contentComponent: Sidemenu,
    drawerWidth: Dimensions.get('window').width
}))

export default UserDrawerNavigator

