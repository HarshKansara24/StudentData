import React from 'react'
import { View, Text, Keyboard } from 'react-native'
import { Tabs, Tab } from 'native-base'
import { Images, FontName, FontSize, Colors } from '../../utils';


const MyTabsRound = ({ tabs }) => {
    return (
        <Tabs onChangeTab={(page) => {
            Keyboard.dismiss()
        }} tabContainerStyle={{ elevation: 0, borderColor: Colors.Defaultwhite, marginVertical: 11, marginHorizontal: 18, backgroundColor: Colors.sidemenuBgColor, borderWidth: 2, borderRadius: 50 }} style={{ backgroundColor: Colors.sidemenuBgColor, }} tabBarUnderlineStyle={{ backgroundColor: 'transparent', height: 0, borderBottomWidth: 0 }} tabBarBackgroundColor={Colors.sidemenuBgColor}>
            {
                tabs.map((tab, index) => {

                    const borderTopLeft = index == 0 ? 50 : 0
                    const borderBottomLeft = index == 0 ? 50 : 0

                    const borderTopRight = index == tabs.length - 1 ? 50 : 0
                    const borderBottomRight = index == tabs.length - 1 ? 50 : 0
                    return (
                        <Tab heading={tab.name}
                            noShadow={true}

                            backgroundColor={Colors.sidemenuBgColor}
                            tabStyle={{
                                borderTopStartRadius: borderTopLeft,
                                borderBottomStartRadius: borderBottomLeft, borderTopEndRadius: borderTopRight,
                                borderBottomEndRadius: borderBottomRight, backgroundColor: Colors.sidemenuBgColor
                            }}
                            activeTabStyle={{
                                borderTopStartRadius: borderTopLeft,
                                borderBottomStartRadius: borderBottomLeft, borderTopEndRadius: borderTopRight,
                                borderBottomEndRadius: borderBottomRight, backgroundColor: Colors.Defaultwhite
                            }}
                            textStyle={{ color: Colors.Defaultwhite, fontFamily: FontName.regular, fontSize: FontSize.fontSize18 }}
                            activeTextStyle={{ color: Colors.sidemenuBgColor, fontFamily: FontName.regular, fontSize: FontSize.fontSize18 }}>
                            {tab.component}
                        </Tab>
                    )
                })
            }
        </Tabs>
    )
}

export default MyTabsRound
