import React, {useState} from 'react';

import { Button as NativeButton, Body, Text } from 'native-base';
import { Colors, FontName, FontSize } from '../../utils';
import ResponsivePixels from '../../utils/ResponsivePixels';



export default Button = (props) => {
    const { style, onPress, disabled, bordered, disableAllCaps } = props

    const [isButtonEnabled, setButtonDisabled] = useState(true);

    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.disablebtnColor : Colors.btnBgColor,
        height: ResponsivePixels.size48,
        borderColor: bordered ? Colors.btnBorderColor : undefined,
        borderRadius: bordered ?  ResponsivePixels.size24 : ResponsivePixels.size4,
    }
    const textStyle = {
        color: bordered ? Colors.btnBgColor : Colors.Defaultwhite,
        fontFamily: FontName.medium,
        fontSize: FontSize.fontSize17,
    }

    const _onPress = () => {

        setButtonDisabled(false);

        onPress && onPress();

        setTimeout(() => {
            setButtonDisabled(true);
        }, 1000);

    };

    return (
        <NativeButton bordered={bordered} disabled={disabled || !isButtonEnabled} onPress={_onPress} style={{ ...button, ...style, ...{ elevation: 0 } }}>
            <Body>
                <Text style={textStyle}>{disableAllCaps ? props.title : props.title}</Text>
            </Body>
        </NativeButton>
    );
}
