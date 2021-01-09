// import React, { Component } from 'react'
// import { View, Image, TouchableOpacity, StatusBar, StatusBarIOS } from 'react-native'
// import { Header, Left, Right, Body, Icon, Text, Button, Title } from 'native-base'
// import Clickable from './Clickable';
// import { Images, FontName, FontSize, Colors } from '../../utils';
// import * as Animatable from 'react-native-animatable';
// import ResponsivePixels from '../../utils/ResponsivePixels';


// class MonieTreeHeader extends Component {

//     componentDidMount() {

//         // StatusBar.setBarStyle('light-content')
//     }

//     render() {
//         return (
//             <View onLayout={this.props.onLayout} transparent androidStatusBarColor={this.props.androidStatusBarColor || this.props.backgroundColor || 'transparent'} style={{ backgroundColor: this.props.backgroundColor || Colors.Defaultblack,  borderBottomWidth: this.props.hideUnderLine ? 0 : 0, borderBottomColor: Colors.Backgroundgrey, ...this.props.style, flexDirection:'row',marginHorizontal:ResponsivePixels.size26 }}>
//                 <Clickable style={{justifyContent: 'flex-end'}}>
//                     <Image source={Images.ic_BankRoundArrowIcon}></Image>
//                 </Clickable>
//                 <View style={{ flex: 1 }}>
//                     {/* {this._renderTitle()} */}
//                 </View>
//                 <Image style={{justifyContent: 'flex-start'}} source={Images.ic_AwesomeLargeLogo}></Image>
//                 <StatusBar
//                     translucent={true} barStyle={!this.props.light ? 'dark-content' : 'light-content'} />
//             </View>
//         )
//     }

//     // <Left>{this._renderOption(this.props.left)}</Left>

//     //     <Body >
//     //     {this._renderTitle()}
//     // </Body>
//     // <Right>
//     //                 {this._renderRight()}
//     //             </Right>


//     _renderTitle() {

//         let { title, image, titleColor } = this.props;

//         if (title) {
//             return (<Title style={{ color: titleColor || Colors.primaryColor, alignSelf: 'center', ...styles.titleStyle }}>{title}</Title>)
//         } else if (image) {
//             return (<Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain', tintColor: this.props.titleColor }}
//             />)
//         }
//     }

//     _renderOption(options) {

//         if (options) {
//             let { icon, image, text, onPress, color, imageStyle } = options;

//             if (icon) {
//                 return (<Clickable borderLess onPress={onPress} style={styles.iconStyle}><Image source={Images.ic_BankRoundArrowIcon} style={{ color: color || Colors.Defaultblack }} /></Clickable>)
//             } else if (image) {
//                 return (<Clickable borderLess onPress={onPress}><Image source={image}
//                     style={{ marginHorizontal: 6, resizeMode: 'contain', ...imageStyle }} /></Clickable>)
//             } else if (text) {
//                 return (<Clickable borderLess style={styles.textContainerStyle} onPress={onPress}>
//                     <Text style={{ ...styles.textStyle, color: color || Colors.Defaultwhite }}>{text}</Text>
//                 </Clickable>)
//             }
//         }
//     }

//     _renderRight() {

//         if (this.props.right)
//             return this.props.right.map(right => { return (this._renderOption(right)) })
//     }
// }

// const styles = {

//     textStyle: {
//         marginHorizontal: 4,
//         fontSize: FontSize.fontSize16,
//         color: Colors.BlackWithOpacityColor,
//         alignSelf: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontFamily: FontName.bold
//     },
//     titleStyle: {
//         fontSize: FontSize.fontSize20,
//         fontWeight: "600",
//         fontFamily: FontName.NunitoSemiBold,
//     },
//     textContainerStyle: {

//     },
//     iconStyle: {
//         marginHorizontal: 4,
//         padding: 4,
//     }
// }

// export default MonieTreeHeader


import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StatusBar, StatusBarIOS } from 'react-native'
import { Header, Left, Right, Body, Icon, Text, Button, Title } from 'native-base'
import Clickable from './Clickable';
import { Images, FontName, FontSize, Colors } from '../../utils';
import * as Animatable from 'react-native-animatable';
import ResponsivePixels from '../../utils/ResponsivePixels';


class MonieTreeHeader extends Component {

    componentDidMount() {

        // StatusBar.setBarStyle('light-content')
    }

    render() {

        return (
            // <Header androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props} style={{ backgroundColor: this.props.backgroundColor || Colors.darkBlue, justifyContent: 'center' }} >
            <Header onLayout={this.props.onLayout} transparent
                    androidStatusBarColor={this.props.androidStatusBarColor || this.props.backgroundColor || 'transparent'}
                    style={{ backgroundColor: this.props.backgroundColor || Colors.Defaultwhite, marginHorizontal: ResponsivePixels.size20,
                        height: ResponsivePixels.size120,
                        alignItems: 'center',
                        justifyContent:'center', borderBottomWidth: this.props.hideUnderLine ? 0 : 0, flexDirection: 'row',
                        borderBottomColor: Colors.Backgroundgrey, ...this.props.style }}>
                <Left style={{ flex: 1,}}>{this._renderOption(this.props.left)}</Left>
                <Body style={{ flex: 2 }}>
                    {this._renderTitle()}
                </Body>
                <Right style={{ flex: 1, maxHeight: 100}}>
                    {this._renderRight()}
                </Right>
                <StatusBar
                    translucent={true} barStyle={!this.props.light ? 'dark-content' : 'light-content'} />
            </Header>
        )
    }

    // <Left>{this._renderOption(this.props.left)}</Left>

    //     <Body >
    //     {this._renderTitle()}
    // </Body>
    // <Right>
    //                 {this._renderRight()}
    //             </Right>


    _renderTitle() {

        let { title, image, titleColor } = this.props;

        if (title) {
            return (<Title style={{ color: titleColor || Colors.Defaultwhite, alignSelf: 'center', ...styles.titleStyle }}>{title}</Title>)
        } else if (image) {
            return (<Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain', tintColor: this.props.titleColor }}
            />)
        }
    }

    _renderOption(options) {

        if (options) {
            let { icon, image, text, onPress, color, imageStyle } = options;

            if (icon) {
                return (<Clickable borderLess onPress={onPress} style={styles.iconStyle}><Icon name={icon} style={{ color: color || Colors.Defaultblack }} /></Clickable>)
            } else if (image) {
                return (<Clickable borderLess onPress={onPress}><Image source={image}
                    style={{ marginHorizontal: 6, resizeMode: 'contain', ...imageStyle }} /></Clickable>)
            } else if (text) {
                return (<Clickable borderLess style={styles.textContainerStyle} onPress={onPress}>
                    <Text style={{ ...styles.textStyle, color: color || Colors.Defaultwhite }}>{text}</Text>
                </Clickable>)
            }
        }
    }

    _renderRight() {

        if (this.props.right)
            return this.props.right.map(right => { return (this._renderOption(right)) })
    }
}

const styles = {

    textStyle: {
        marginHorizontal: 4,
        fontSize: FontSize.fontSize16,
        color: Colors.BlackWithOpacityColor,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FontName.bold
    },
    titleStyle: {
        fontSize: FontSize.fontSize21,
        fontWeight: "500",
        fontFamily: FontName.regular,
    },
    textContainerStyle: {

    },
    iconStyle: {
        marginHorizontal: 4,
        padding: 4,
    }
}

export default MonieTreeHeader
