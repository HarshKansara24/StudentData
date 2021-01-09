import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './Navigator';


//Spalsh
import Splash from '../components/Splash/ChildComponent/Splash';

import DrawerMain from '../components/SideMenu/ChildComponent/DrawerMain';
import SelectCountry from '../components/common/SelectCountry';
import ViewStudentdetail from '../components/Home/ChildComponent/ViewStudentdetail';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator headerMode="none" initialRouteName="Splash">
                <Stack.Screen component={Splash} name="Splash" />

                {/* //Home */}
                <Stack.Screen component={DrawerMain} name="Home" />
                <Stack.Screen component={SelectCountry} name="SelectCountry" />
                
                <Stack.Screen component={ViewStudentdetail} name="ViewStudentdetail" />
                {/* //Help */}
            

            </Stack.Navigator>
        </NavigationContainer>
    );
};
