import React, { Component } from 'react';
import { View, Text, FlatList, Image, AppState } from 'react-native';
import * as constants from '../../../utils/AppConstants'
import { connect } from 'react-redux';
import * as actions from '../../../actions/CommonActions'
import ResponsivePixels from "../../../utils/ResponsivePixels";
import { MainContainer, EditText, Clickable, PhotoPicker, Button, ScrollContainer } from '../../common';
import FloatingDatePicker from '../../common/FloatingDatePicker'
import { Images, Utils } from '../../../utils';
import { strings } from '../../../language/Language';
import { getCurrentDialCode } from '../../../data/PrefUtils';
import moment from 'moment';
import styles from '../styles/Home.style'
import RadioButtonRN from 'radio-buttons-react-native';
import Navigator from '../../../navigation/Navigator';
import { TextInput } from 'react-native-gesture-handler';
import CommonController from '../../../controllers/CommonController';
//****************************************************************
//* Import Declaration END                                       *
//****************************************************************

//****************************************************************
//* Class Declaration Start                                      *
//****************************************************************
class ViewStudent extends Component {
    //****************************************************************
    //* Variable Declaration Start                                   *
    //****************************************************************

    //****************************************************************
    //* Variable Declaration end                                    *
    //****************************************************************


    render() {
        return (
            <MainContainer
                header={{
                    backgroundColor: Colors.splashbgEndColor,
                    left: {
                        image: Images.ic_BankRoundArrowIcon,
                        onPress: () => this.props.navigation.goBack(),
                    },
                    title: strings.StudentRegistration,
                    hideUnderLine: true,
                    light: true,

                    titleStyle: { alignItems: 'center', justifyContent: "center", textAlign: 'center' }
                    // 
                }}>
                <ScrollContainer>
                    <View style={{ ...styles.UploadView, borderWidth: 2, marginHorizontal: 5, marginTop: 4 }}>
                        <View style={styles.UploadImageView}>

                            <Image defaultSource={Images.ic_HeaderUserImg}
                                onError={() => {

                                    this.setState({
                                        profileImage: Images.ic_HeaderUserImg
                                    })
                                    this.setState({ imagechanged: false })
                                }}
                                source={{ uri: this.props.route.params.Student_detail.profileImage }}
                                style={{
                                    resizeMode: 'cover',
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25
                                }} />
                            <Text style={styles.viewstyle}>{this.props.route.params.Student_detail.firstName + " " + this.props.route.params.Student_detail.FatherName + " " + this.props.route.params.Student_detail.lastName}</Text>


                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16 ,paddingVertical:5}}>
                            <Text style={styles.DateText}>{strings.txtEmailAddress}:</Text>
                            <Text style={styles.viewstyle}>{this.props.route.params.Student_detail.email}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16 ,paddingVertical:5}}>
                            <Text style={styles.DateText}>Gender:</Text>
                            <Text style={styles.viewstyle}>{this.props.route.params.Student_detail.genderValue}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16 ,paddingVertical:5}}>
                            <Text style={styles.DateText}>{strings.txtDateofBirth}:</Text>
                            <Text style={styles.viewstyle}>{Utils.formatDate(this.props.route.params.Student_detail.dob * 1000)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16,paddingVertical:5 }}>
                            <Text style={styles.DateText}>{strings.txtMobileNumber}:</Text>
                            <Text style={styles.viewstyle}>{this.props.route.params.Student_detail.dial_code + ' ' + this.props.route.params.Student_detail.mobileNumber}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 16 ,paddingVertical:5}}>
                            <Text style={styles.DateText}>{strings.Address}:</Text>
                            <Text style={styles.viewstyle}>{this.props.route.params.Student_detail.Address}</Text>
                        </View>

                    </View>
                    <View style={styles.txtView}>




                    </View>
                </ScrollContainer>

            </MainContainer>
        )
    }

    //****************************************************************
    //*  View Coding End                                             *
    //****************************************************************
}

//****************************************************************
//* Class Declaration End                                        *
//****************************************************************

const mapStateToProps = (state) => {

    return {
        studentList: state.common.studentList
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { ...actions, ...mapDispatchToProps })(ViewStudent)
