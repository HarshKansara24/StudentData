import { StyleSheet } from 'react-native';
import { Images, Colors, FontName, FontSize } from '../../../utils';
import ResponsivePixels from '../../../utils/ResponsivePixels';

export default styles = StyleSheet.create({

    MainHeaderView: {
        //flex: 1,
        backgroundColor: Colors.Defaultwhite
    },
    headerView: {
        marginBottom: -ResponsivePixels.size25
    },


    emailAddress: {
        marginTop: ResponsivePixels.size14,
        marginHorizontal: ResponsivePixels.size16,
    },
    Address: {
        marginTop: ResponsivePixels.size14,
        marginHorizontal: ResponsivePixels.size16,
        minHeight: 100,
        backgroundColor: Colors.Backgroundgrey,
        borderRadius: ResponsivePixels.size3,
        fontFamily: FontName.regular,
        color: Colors.DarkGreyColor,
        fontSize: FontSize.fontSize14,
        textAlignVertical: 'top',
        paddingLeft: ResponsivePixels.size16

    },
    UploadView: {
        backgroundColor: Colors.Defaultwhite,
    },
    UploadImageView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
        marginHorizontal: 16
    },
    textUpload: {
        color: Colors.defaultBlueColor,
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize14,
        marginLeft: 16
    },
    Proceedbtn: {
        marginHorizontal: ResponsivePixels.size20,
        marginVertical: ResponsivePixels.size20
    },

    headerline: {
        backgroundColor: Colors.Backgroundgrey,
        height: 1
    },
    listcontainView: {
        backgroundColor: Colors.Defaultwhite,
        //borderRadius:8,
    },
    MainView: {
        minHeight: 40,
        justifyContent:'center',
        alignContent:'center',
    },
    titleView: {
        flexDirection: 'row',
     
        marginHorizontal: ResponsivePixels.size25,
        borderBottomWidth: 1,
        borderBottomColor: Colors.Backgroundgrey,
        paddingVertical: ResponsivePixels.size15
    },

    textDescription: {
        marginLeft:10,
        alignSelf:'center',
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize17,
        color: Colors.Defaultblack,
        lineHeight: 26,
        //marginTop:4,
    },
    DateText: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize14,
        color: Colors.normalGreyColor,
        marginTop: 4,
    },
    viewstyle:{
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize14,
        marginTop: 4,
        marginHorizontal: ResponsivePixels.size16
    },
    SmartWalletView: {
        flex: 1
    }
});
