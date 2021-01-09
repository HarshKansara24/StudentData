import React from 'react'
import { View, Text, Keyboard } from 'react-native'
import { Tabs, Tab } from 'native-base'
import { Images, FontName, FontSize, Colors } from '../../utils';
import ResponsivePixels from '../../utils/ResponsivePixels';



const MyTabs = ({ tabs }) => {
    return (
        <Tabs onChangeTab={(page) => {
            Keyboard.dismiss()
        }} tabContainerStyle={{ elevation: 0, borderBottomColor: Colors.Backgroundgrey, borderBottomWidth: 0 }} tabBarUnderlineStyle={{ backgroundColor: Colors.tabUnderlineColor, height: ResponsivePixels.size6, borderRadius: ResponsivePixels.size3 }} tabBarBackgroundColor={Colors.Defaultwhite}>
            {
                tabs.map((tab) => (
                    <Tab heading={tab.name}
                        noShadow={true}
                        tabStyle={{ backgroundColor: Colors.Defaultwhite, }}
                        activeTabStyle={{ backgroundColor: Colors.Defaultwhite }}
                        textStyle={{ color: Colors.tabUnSelectedColor, fontFamily: FontName.medium, fontSize: FontSize.fontSize14 }}
                        activeTextStyle={{ color: Colors.DarkGreenColor, fontFamily: FontName.medium, fontSize: FontSize.fontSize14 }}>
                        {tab.component}
                    </Tab>
                ))
            }
        </Tabs>
    )
}

export default MyTabs