import { Container } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { CustomHeader } from '.';
import MonieTreeHeader from './MonieTreeHeader';


export class MainContainer extends Component {
    render() {
        return (
            
            <Container>
                {this.props.header?<CustomHeader {...this.props.header}/>:<MonieTreeHeader {...this.props.MonieTreeHeader}/>}
               <View style={{flex:1}}>
                
                
                {this.props.children}
                </View>
            </Container>
           
        )
    }
}

export default MainContainer
