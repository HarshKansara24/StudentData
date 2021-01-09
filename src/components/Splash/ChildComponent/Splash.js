import React, { Component } from 'react'
import { Image, View, StatusBar, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../../actions/CommonActions'
import { Images, FontName, FontSize, Colors } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import ResponsivePixels from '../../../utils/ResponsivePixels';
import { Text } from 'native-base';


class Splash extends Component {

  
  async componentDidMount() {
  
    this.props.navigation.replace('Home')
  }

  componentWillUnmount() {

  }
  render() {
    return (
      <LinearGradient
        colors={['#E6EE59', '#2FB24B']}
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}>
        <StatusBar backgroundColor='transparent' translucent />
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: "center" }}>
          <Text style={{fontSize:ResponsivePixels.size30, color:Colors.Defaultwhite}} > Student Programm</Text>
        </View>
      </LinearGradient>
    )
  }
}

const mapStateToProps = () => {

  return {}
}


export default connect(mapStateToProps, actions)(Splash)