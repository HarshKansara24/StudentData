import React, {Component} from 'react'
import {Image, StatusBar, View} from 'react-native'
import {Body, Header, Icon, Left, Right, Text, Title} from 'native-base'
import Clickable from './Clickable';
import {Colors, FontName, FontSize, Images} from '../../utils';
import MarqueeText from 'react-native-marquee';
import ResponsivePixels from "../../utils/ResponsivePixels";

class CustomHeaderScanDetails extends Component {

    componentDidMount() {

        // StatusBar.setBarStyle('light-content')
    }

    render() {

        return (
            // <Header androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props} style={{ backgroundColor: this.props.backgroundColor || Colors.darkBlue, justifyContent: 'center' }} >
            !this.props.titleLeft ? <Header translucent transparent
                                            androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props}
                                            style={{
                                                backgroundColor: this.props.backgroundColor || Colors.white,
                                                justifyContent: 'center',
                                                borderBottomWidth: this.props.hideUnderLine ? 0 : 1,
                                                borderBottomColor: Colors.Backgroundgrey
                                            }}>
                    <Left>{this._renderOption(this.props.left)}</Left>

                    {/* <Body style={{ width:100%}}> */}

                    {this._renderTitle()}

                    {/* </Body> */}
                    <Right>
                        {this._renderRight()}
                    </Right>
                    <StatusBar
                        translucent={true} barStyle={this.props.light ? 'light-content' : 'dark-content'}/>

                </Header>
                :
                <Header translucent transparent
                        androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props}
                        style={{
                            backgroundColor: this.props.backgroundColor || Colors.white,
                            justifyContent: 'center',
                            borderBottomWidth: 0
                        }}>
                    <Left>{this._renderOption(this.props.left)}</Left>

                    <Body style={{flex: 5, alignContent: 'flex-start'}}>

                        {this._renderTitle()}

                    </Body>
                    <Right>
                        {this._renderRight()}
                    </Right>
                    <StatusBar
                        translucent={true} barStyle={this.props.light ? 'light-content' : 'dark-content'}/>

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


        let {title, image, bank, titleColor, subTitle, titleLeft} = this.props;
        console.log(bank && title)
//             if(title){
//                 <View style={{ alignSelf: titleLeft ? 'flex-start' : 'center' }}>
//                 <MarqueeText
//    style={{
//       ...styles.titleStyle,
//       textAlign: 'left',
//       color: titleColor || Colors.DarkGreyColor
//   }}
//     duration={3000}
//     marqueeOnStart
//     loop
//     marqueeDelay={1000}
//     marqueeResetDelay={0}
//   >
// {title}
//   </MarqueeText>
//               {/* <Title style={{
//                   ...styles.titleStyle,
//                   textAlign: 'left',
//                   color: titleColor || Colors.DarkGreyColor
//               }}>{title}</Title> */}
//               {subTitle ? <Title style={{
//                   color: titleColor || Colors.DarkGreyColor, ...styles.titleStyle,
//                   fontSize: FontSize.fontSize14,
//                   textAlign: 'left'
//               }}>{subTitle}</Title> : null}
//           </View>

//             }else
        if (title) {
            return (
                <View style={{alignSelf: titleLeft ? 'flex-start' : 'center',marginLeft:20}}>
                    <View style={{flexDirection: "row"}}>

                        {bank ?
                            <Image source={Images.ic_BankImge}
                                   style={{}}
                            /> : null}
                        <View style={{flexDirection: "column"}}>
                            <MarqueeText
                                style={{
                                    ...styles.titleStyle,
                                    textAlign: 'left',
                                    // left:-50,
                                    color: titleColor || Colors.DarkGreyColor,
                                    fontSize: FontSize.fontSize19,
                                }}
                                duration={3000}
                                marqueeOnStart
                                loop={true}
                                marqueeDelay={1000}
                                marqueeResetDelay={0}
                            >
                                {title}
                            </MarqueeText>
                            {subTitle ? <Text style={{
                                color: titleColor || Colors.DarkGreyColor, ...styles.titleStyle,
                                fontSize: FontSize.fontSize14,
                                marginStart: 0
                            }}>{subTitle}</Text> : null}
                        </View>
                    </View>
                    {/* <Title style={{
                        ...styles.titleStyle,
                        textAlign: 'left',
                        color: titleColor || Colors.DarkGreyColor
                    }}>{title}</Title> */}

                </View>
            )
        } else if (image) {
            return (<Image source={image}
                           style={{alignSelf: 'center', resizeMode: 'contain', tintColor: this.props.titleColor}}
            />)
        }

    }

    _renderOption(options) {


        if (options) {
            let {icon, image, text, onError, onPress, color, imageStyle, defaultImage} = options;

            if (icon) {
                return (<Clickable borderLess onPress={onPress} style={styles.iconStyle}>
                    <Icon name={icon}
                          style={{
                              color: color || Colors.Defaultblack,
                          }}/>
                </Clickable>)
            } else if (image) {
                return (<Clickable borderLess onPress={onPress}>
                    <Image source={image}
                           onError={onError}
                           defaultSource={defaultImage || Images.ic_HeaderUserImg}
                           style={{
                               width: ResponsivePixels.size30,
                               marginHorizontal: ResponsivePixels.size10,
                               height: ResponsivePixels.size30, ...imageStyle
                           }}/></Clickable>)
            } else if (text) {
                return (<Clickable borderLess style={styles.textContainerStyle} onPress={onPress}>
                    <Text style={{...styles.textStyle, color: color || Colors.primaryColor}}>{text}</Text>
                </Clickable>)
            }
        }
    }

    _renderRight() {


        if (this.props.right)
            return this.props.right.map(right => {
                return (this._renderOption(right))
            })

    }

}

const styles = {

    textStyle: {
        marginHorizontal: 4,
        fontSize: FontSize.fontSize17,
        color: Colors.DarkGreyColor,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FontName.medium
    },

    titleStyle: {
        fontSize: FontSize.fontSize17,
        fontWeight: "400",
        fontFamily: FontName.regular
    },
    textContainerStyle: {},

    iconStyle: {
        marginHorizontal: 4,
        padding: 4,

    }
}

export default CustomHeaderScanDetails
