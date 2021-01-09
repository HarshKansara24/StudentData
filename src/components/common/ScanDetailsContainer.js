import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'
import RNKeyboardAvoidingView from './KeyboardAvoidingView';
import {CustomHeader} from '.';
import CustomHeaderScanDetails from "./CustomHeaderScanDetails";

export class ScanDetailsContainer extends Component {
    render() {
        return (

            <RNKeyboardAvoidingView>
                {this.props.header ? <CustomHeaderScanDetails {...this.props.header}/> : null}
                <View style={{flex: 1}}>
                    {this.props.children}
                </View>
            </RNKeyboardAvoidingView>

        )
    }
}

export default ScanDetailsContainer
