import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { Item, Label, Input, Left, Right, Icon } from 'native-base';
import { Images, FontName, FontSize, Colors } from '../../utils';
import Clickable from './Clickable';



export default class FloatingEditText extends Component {

    state = {
        isFocused: false,
        underlineColor: Colors.lightGreyColor,
        text: ''
    };

    handleFocus = () => this.setState({ isFocused: true, underlineColor: Colors.lightGreyColor });
    handleBlur = () => this.setState({ isFocused: false, underlineColor: Colors.lightGreyColor });

    render() {
        const {
            label, value, onChangeText, style, password, fontSize, inputType, textColor, editable,
            rightIcon, onClickCountry, onPress, country, hasCountry, multiline, minHeight
        } = this.props
        let { isFocused, text } = this.state;

        isFocused = isFocused || text.length > 0 || value && value.length > 0
        const labelStyle = {
            position: 'absolute',
            marginTop: hasCountry && !isFocused ? 4 : 0,
            left: hasCountry ? country && country.code && country.code.length > 3 ? 80 : 80 : 0,
            fontFamily: FontName.RobotoMedium,
            top: !isFocused ? 20 : 0,
            fontSize: !isFocused ? 13 : 13,
            color: Colors.lightGreyColor,
        };
        return (
            <View style={{
                paddingTop: 16, borderBottomWidth: this.state.isFocused ? 1 : 1,
                alignItems: 'center',
                borderBottomColor: this.state.underlineColor, ...style,
            }}>
                <Text style={labelStyle}>
                    {label}
                </Text>

                <TouchableOpacity disabled={!editable} activeOpacity={0} onPress={onPress} style={{
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    {hasCountry ?
                        <Clickable onPress={onClickCountry} style={styles.countryView}>
                            <Image source={Images.ic_CountryImg} style={styles.CountryImg}></Image>
                            <Text style={styles.Countrytext}>+91</Text>
                            <View style={styles.SperatorLine}></View>
                        </Clickable> : null}
                    {editable == undefined || editable == true ?
                        <TextInput
                            value={value}
                            multiline={multiline}
                            editable={editable}
                            keyboardType={inputType}
                            onChangeText={(text) => {
                                this.setState({ text: text })
                                if (onChangeText)
                                    onChangeText(text)
                            }}
                            secureTextEntry={password}
                            style={{
                                paddingLeft: 0, paddingVertical: 8, flex: 1,
                                fontFamily: FontName.NotoSansTCRegular, fontSize: fontSize || 16, color: textColor ||
                                    Colors.lightGreyColor, borderBottomWidth: 0,
                                height: minHeight
                            }}
                            onFocus={this.handleFocus}
                            selectionColor={Colors.lightGreyColor}
                            onBlur={this.handleBlur}
                        />
                        :
                        <Text onPress={onPress} style={{
                            alignSelf: "center",
                            flex: 1,
                            textAlignVertical: "center",
                            fontFamily: FontName.NotoSansTCRegular, alignSelf: "center",
                            fontSize: fontSize || 16,
                            color: textColor || Colors.Defaultblack, borderBottomWidth: 0
                        }}>
                            {value ? value.toString() : value}
                        </Text>}
                    {rightIcon ? <Image source={rightIcon} style={{ width: 30, height: 30 }} resizeMode={'contain'} /> : null}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {

    coontainerStyle: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor: 'white',
        height: 50
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: 'red',
    },
    countryView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        marginRight: 10
    },
    CountryImg: {
        alignItems: 'center',
        // alignSelf: 'center',
        //marginTop:10
    },
    Countrytext: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize19,
        marginLeft: 8,
        marginRight: 6,
        color: Colors.Defaultblack,
        //  alignSelf: 'center',
    },
    SperatorLine: {
        width: 2,
        height: 24,
        backgroundColor: Colors.lightGreyColor,
    },
}