import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { Button as ElementButton } from 'react-native-elements'
import { Images, FontName, FontSize, Colors } from '../../utils';


class Clickable extends Component {

    state = {
        disabled: false
    }

    _onPress = () => {

        this.setState({ disabled: true })
        if(this.props.onPress)
            this.props.onPress()
        setTimeout(() => {
            this.setState({ disabled: false })
        }, 1000)
    }

    render() {
        const { children, onPress, borderLess, rippleColor, style, activeOpacity } = this.props
        return (

            // <ElementButton
            //     iconComponent={}
            //     title={title} textStyle={textStyles} raised={raised} onPress={onPress} outline={outline} containerViewStyle={{ marginLeft: 0, marginRight: 0, flex: flex }} backgroundColor={bgColor} buttonStyle={{ ...bgStyles, ...style, flex: 0 }} />

            Platform.select({
                ios: <TouchableOpacity activeOpacity={activeOpacity||0.5} style={style}  onPress={this._onPress} disabled={this.state.disabled}>
                    {children}
                </TouchableOpacity>,
                android: <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor || 'white', borderLess)}
                                                  onPress={this._onPress}
                                                  disabled={this.state.disabled}
                >
                    <View style={style}>
                        {children}
                    </View>
                </TouchableNativeFeedback>
            })

        );
    }
}

export default Clickable

