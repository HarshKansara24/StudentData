import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { Item, Label, Input, Left, Right, Icon } from 'native-base';

import { Images, FontName, FontSize, Colors } from '../../utils';
import Clickable from './Clickable';
import { TextInputMask } from 'react-native-masked-text';

export default class FloatingEditTextAmount extends Component {
    state = {
        isFocused: true,
        underlineColor: Colors.secondaryColor,
        text: ''

    };

    handleFocus = () => this.setState({ isFocused: true, underlineColor: Colors.secondaryColor });
    handleBlur = () => this.setState({ isFocused: false, underlineColor: Colors.NormalGreyColor });

    render() {
        const {
            label, value, onChangeText, style, password, fontSize, inputType, textColor, editable,
            rightIcon, onClickCountry, onPress, country, hasCountry
        } = this.props
        let { isFocused, text } = this.state;

        // isFocused = isFocused || text.length > 0 || value.length > 0
        const labelStyle = {
            position: 'absolute',
            marginTop: hasCountry && !isFocused ? 4 : 0,
            left: hasCountry ? country && country.code && country.code.length > 3 ? 100 : 80 : 0,
            fontFamily: FontName.regular,
            top: !isFocused ? 0 : 0,
            fontSize: !isFocused ? 14 : 14,
            color: this.state.underlineColor,
        };
        return (
            <View style={{
                paddingTop: 16, borderBottomWidth: 1,
                alignItems: 'center',

                borderBottomColor: this.state.underlineColor, ...style
            }}>
                <Text style={labelStyle}>
                    {label}
                </Text>

                <TouchableOpacity activeOpacity={0} onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {hasCountry ?
                        <Clickable onPress={onClickCountry} style={styles.countryView}>
                            <Image source={Images.ic_CountryImg} style={styles.CountryImg}></Image>
                            <Text style={styles.Countrytext}>{`+${country.code}`}</Text>
                            <View style={styles.SperatorLine}></View>
                        </Clickable> : null}
                    {/* <TextInput
                        value={value}
                        editable={editable}
                        keyboardType={inputType}
                        onChangeText={(text) => {

                            this.setState({ text: text })
                            if (onChangeText)
                                onChangeText(text)
                        }}
                        secureTextEntry={password}
                        style={{ height: 45, flex: 1, fontSize: fontSize || 20, color: textColor || Colors.DarkBlueColor, borderBottomWidth: 0, }}
                        onFocus={this.handleFocus}
                        selectionColor={Colors.secondaryColor}
                        onBlur={this.handleBlur}
                    /> */}

                    <TextInputMask
                        value={value}
                        editable={editable}
                        onChangeText={(text) => {

                            onChangeText(text)
                        }}
                        options={{
                            unit: '$',
                            delimiter: ',',
                            separator: '.',

                        }}
                        type={'money'}
                        secureTextEntry={password}
                        style={{ height: 45, flex: 1, fontSize: fontSize || 20, color: textColor || Colors.DarkBlueColor, borderBottomWidth: 0, }}
                        onFocus={this.handleFocus}
                        selectionColor={Colors.secondaryColor}
                        onBlur={this.handleBlur}
                    />

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
        marginRight: 6,
    },
    CountryImg: {
        alignItems: 'center',
        alignSelf: 'center',
        //marginTop:10
    },
    Countrytext: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize19,
        marginLeft: 8,
        color: Colors.DarkGreyColor,
        alignSelf: 'center',
    },
    SperatorLine: {
        width: 2,
        height: 18,
        backgroundColor: Colors.lightGreyColor,
        alignSelf: 'center',
        marginLeft: 6,
    },
}

