import {StyleSheet} from 'react-native'
import { Images, Colors, FontName, FontSize } from '../../../utils';
import ResponsivePixels from '../../../utils/ResponsivePixels';


export default styles = StyleSheet.create({

    listImage: {
        height: 60,
        width: 60,
        marginLeft: 16,
        borderRadius: 30
    },
    titleView: {
        flexDirection: 'column',
        marginLeft: 8,
        flex: 1,
        justifyContent: 'center',
    },

    btnClose:{
        height:ResponsivePixels.size40,
        width:ResponsivePixels.size40,
        padding:ResponsivePixels.size10,
        marginLeft:ResponsivePixels.size10,
    },
    imgClose: {
        height:ResponsivePixels.size20,
        width:ResponsivePixels.size20,
    },
    HeaderView:{
        backgroundColor: Colors.lightGreenColor,
    },
    topView: {
        flexDirection: 'row',
        backgroundColor: Colors.lightGreenColor,
        alignItems: 'center'
    },
    userView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ResponsivePixels.size15,
        marginBottom: ResponsivePixels.size20
    },
    textUsername: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize21,
        color: Colors.Defaultwhite,
    },
    Username: {
        fontFamily: FontName.light,
        fontSize: FontSize.fontSize15,
        color: Colors.splashbgStartColor,
        marginTop: ResponsivePixels.size10
    },
    MenuMainView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    MenuItemListView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:ResponsivePixels.size16,
        height: ResponsivePixels.size64,
    },
    TextStyle: {
        color: Colors.DarkGreyColor,
        marginLeft: ResponsivePixels.size20,
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize18,
        alignItems: 'center',
        textAlign: 'left'
    },
    ImageIconStyle: {
        alignItems: 'center',
        height:25,
        width:30,
        resizeMode:'contain'
    },
    menuMainview: {

    },

    //New Tag
    newtagView:{
        backgroundColor:'#FF3360',
        marginLeft:2,
        alignSelf:'center',
        //height:21,
        alignItems:'center'
    },
    TextNew:{
        color: Colors.Defaultwhite,
        paddingHorizontal:6,
        paddingTop:2,
        paddingBottom:3,
        fontFamily: FontName.medium,
        fontSize: FontSize.fontSize12,
    }
});
