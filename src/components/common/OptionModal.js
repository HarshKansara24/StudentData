import React from 'react'
import { Text, TouchableWithoutFeedback, TouchableOpacity ,Image, View, Modal, StatusBar, Platform } from 'react-native'
import FontName from "../../utils/FontName";
import FontSize from "../../utils/FontSize";
import Colors from "../../utils/Colors";


const OptionModal = ({ options, show, onPressOut }) => {

    return (
        <Modal
            visible={show}
            transparent={true}
            animationType={'fade'}>

            <TouchableWithoutFeedback activeOpacity={0}
                onPressOut={onPressOut}
                style={{
                    flex: 1,
                }}>

                <View style={styles.modalBackground}>

                    <View style={styles.optionWrapper}>
                        {

                            options.map((option, index) => {

                                return (
                                    <TouchableOpacity style={styles.forgotPin} activeOpacity={0.5} onPress={() => {
                                        option.onPressItem()
                                    }} >
                                        <Image
                                            source={option.image}
                                        />
                                        <Text style={styles.TextStyle}> {option.title} </Text>
                                    </TouchableOpacity>
                                );
                            })

                        }
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </Modal>
    );

}

const styles = {

    modalBackground: {
        flex: 1,
        marginTop:Platform.select({ios:35,android:0}),
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    textStyle: {
        color: 'black',
        paddingLeft: 16,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 16,
    },
    optionWrapper: {
        backgroundColor: 'white',
        marginRight: 16,
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
    },
    forgotPin: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        width: 250,
        height: 56,
    },
    TextStyle: {
        color: Colors.Defaultblack,
        marginLeft: 17,
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize17,
    },
}
export default OptionModal;


