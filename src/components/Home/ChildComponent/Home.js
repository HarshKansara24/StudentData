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
class Home extends Component {
    //****************************************************************
    //* Variable Declaration Start                                   *
    //**************************************
    state = {

        dial_code: getCurrentDialCode(),
        dob: constants.UNDEFINED,
        prof_pic: constants.UNDEFINED,
        firstName: '',
        FatherName: '',
        Address: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        country: { code: getCurrentDialCode(), flag: 'https://restcountries.eu/data/ind.svg' },
        profileImage: Images.ic_HeaderUserImg,
        gender: [
            {
                label: 'Male'
            },
            {
                label: 'Female'
            }
        ],
        genderValue: '',
    }

    //****************************************************************
    //* Variable Declaration end                                    *
    //****************************************************************



    openCountrySelection = () => {
        Navigator.navigate("SelectCountry", {
            country: { code: this.state.dial_code }, onDone: (country) => {
                console.log(JSON.stringify(country))
                this.setState({
                    dial_code: country.code,
                    country: { code: country.code }
                }, () => {

                })
            }
        })
    }
    onMobileNumberChanged = (mobileNumber) => {

        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < mobileNumber.length; i++) {
            if (numbers.indexOf(mobileNumber[i]) > -1) {
                newText = newText + mobileNumber[i];
            } else {
                // your call back function
                // Utils.showDangerToast(strings.enter_amount)
                // alert("please enter numbers only");
            }

        }
        this.setState({
            mobileNumber: newText,
            name: "",
        }, () => {
            if (this.state.mobileNumber.length >= constants.MIN_MOBILE_NUMBER) {
                this.setState({
                    isContactValid: true,
                });
                console.log("isContactValid : " + this.state.isContactValid)

            } else {
                this.setState({
                    isContactValid: false,
                });
                console.log("isContactValid : " + this.state.isContactValid)
            }
        })


    }
    savestudentdetail = async () => {

        if (Utils.isEmpty(this.state.profileImage.uri)) {
            Utils.showDangerToast(strings.enter_image)
        } else if (Utils.isEmpty(this.state.firstName)) {
            Utils.showDangerToast(strings.enter_fname)
        } else if (Utils.isEmpty(this.state.FatherName)) {
            Utils.showDangerToast(strings.enter_ffname)
        } else if (Utils.isEmpty(this.state.lastName)) {
            Utils.showDangerToast(strings.enter_lname)
        } else if (Utils.isEmpty(this.state.email)) {
            Utils.showDangerToast(strings.enter_email)
        } else if (!Utils.isValidEmail(this.state.email)) {
            Utils.showDangerToast(strings.enter_valid_email)
        } else if (Utils.isEmpty(this.state.dob)) {
            Utils.showDangerToast(strings.enter_dob)
        } else if (Utils.isEmpty(this.state.mobileNumber)) {
            Utils.showDangerToast(strings.enter_mobilenumber)
        }
        else if (!Utils.isValidMobile(this.state.mobileNumber)) {
            Utils.showDangerToast(strings.enter_valid_Mobile)
        }
        else if (Utils.isEmpty(this.state.genderValue)) {
            Utils.showDangerToast(strings.enter_gender)
        } else if (Utils.isEmpty(this.state.Address)) {
            Utils.showDangerToast(strings.enter_address)
        }
        else {
            let params = {
                dial_code: this.state.dial_code,
                dob: this.state.dob,

                firstName: this.state.firstName,
                FatherName: this.state.FatherName,
                Address: this.state.Address,
                lastName: this.state.lastName,
                email: this.state.email,
                mobileNumber: this.state.mobileNumber,
                profileImage: this.state.profileImage.uri,
                genderValue: this.state.genderValue,
            }
            CommonController.SaveStudent(params, async (onsuccess) => {
                if (onsuccess) {
                    Utils.showToast("Student save successfully")
                    this.setState({
                        dial_code: getCurrentDialCode(),
                        dob: constants.UNDEFINED,
                        firstName: '',
                        FatherName: '',
                        Address: '',
                        lastName: '',
                        email: '',
                        mobileNumber: '',
                        country: { code: getCurrentDialCode(), flag: 'https://restcountries.eu/data/ind.svg' },
                        profileImage: Images.ic_HeaderUserImg,
                        genderValue: '',
                    })
                    Navigator.resetNavigation("Home")
                }

            })

        }
    }
    render() {
        return (
            <MainContainer
                header={{
                    backgroundColor: Colors.splashbgEndColor,
                    left: {
                        image: Images.ic_MenuWhiteIcon,
                        onPress: () => this.props.navigation.openDrawer(),
                    },
                    title: strings.StudentRegistration,
                    hideUnderLine: true,
                    light: true,

                    titleStyle: { alignItems: 'center', justifyContent: "center", textAlign: 'center' }
                    // 
                }}>
                <ScrollContainer>
                    <View style={styles.UploadView}>
                        <View style={styles.UploadImageView}>
                            <Clickable onPress={() => PhotoPicker({
                                onFileSelect: (res) => {
                                    this.setState({ profileImage: res.source })
                                    this.setState({ imagechanged: true })
                                }
                            })}>
                                <Image defaultSource={Images.ic_HeaderUserImg}
                                    onError={() => {

                                        this.setState({
                                            profileImage: Images.ic_HeaderUserImg
                                        })
                                        this.setState({ imagechanged: false })
                                    }}
                                    source={this.state.profileImage}
                                    style={{
                                        resizeMode: 'cover',
                                        height: 50,
                                        width: 50,
                                        borderRadius: 24
                                    }} />
                            </Clickable>
                            <Clickable onPress={() => PhotoPicker({
                                onFileSelect: (res) => {
                                    this.setState({ profileImage: res.source })
                                }
                            })}>
                                <Text
                                    style={styles.textUpload}>{strings.Uploadphoto}</Text>
                            </Clickable>
                        </View>
                    </View>
                    <View style={styles.txtView}>

                        <EditText
                            style={styles.emailAddress}
                            hint={strings.txtFirstName}
                            value={this.state.firstName}
                            onChangeText={(text) => {
                                this.setState({ firstName: text })
                            }}
                        />
                        <EditText
                            style={styles.emailAddress}
                            hint={strings.txtFatherName}
                            value={this.state.FatherName}
                            onChangeText={(text) => {
                                this.setState({ FatherName: text })
                            }}
                        />


                        <EditText
                            style={styles.emailAddress}
                            hint={strings.txtLastName}
                            value={this.state.lastName}
                            onChangeText={(text) => {
                                this.setState({ lastName: text })
                            }}
                        />

                        <EditText
                            style={styles.emailAddress}
                            autoCapitalize='none'
                            value={this.state.email}
                            textTransformdata="lowercase"
                            onChangeText={(text) => {
                                this.setState({ email: text })

                            }}
                            inputType='email-address'
                            hint={strings.txtEmailAddress}
                        />
                        {/* <EditText
                                         style={styles.emailAddress}
                                         inputType="numeric"
                                         hint={strings.txtDateofBirth}

                                         />  */}
                        <FloatingDatePicker
                            style={styles.emailAddress}
                            textColor={Colors.PureBlack}
                            placeHolderText={strings.txtDateofBirth}
                            format="DD-MM-YYYY"
                            defaultDate={this.state.dob ? new Date(parseInt(this.state.dob * 1000)) : undefined}

                            maximumDate={new Date()}
                            onDateChange={(text) => {

                                console.log(text)
                                if (text === undefined) {
                                    this.setState({ dob: parseInt(new Date().getTime() / 1000) })
                                } else {
                                    this.setState({ dob: parseInt(text.getTime() / 1000) })
                                }

                            }}
                        />
                        <EditText style={styles.emailAddress}
                            inputType="numeric"
                            hint={strings.txtMobileNumber}
                            value={this.state.mobileNumber}
                            hasCountry
                            country={this.state.country}
                            onClickCountry={this.openCountrySelection}
                            onChangeText={(text) => {
                                this.onMobileNumberChanged(text);
                            }}
                        />

                        <RadioButtonRN
                            boxStyle={{ width: '45%', marginHorizontal: ResponsivePixels.size10, height: ResponsivePixels.size40 }}
                            textStyle={{ marginLeft: ResponsivePixels.size10 }}
                            style={{ ...styles.emailAddress, flexDirection: 'row', }}
                            data={this.state.gender}
                            selectedBtn={(e) => {
                                this.setState({ genderValue: e.label })
                            }}
                        />
                        <TextInput
                            style={styles.Address}
                            textInputStyle={{ marginLeft: 4 }}
                            placeholder={strings.Address}
                            value={this.state.Address}
                            multiline
                            onChangeText={(text) => {
                                this.setState({ Address: text })
                            }}
                        />



                    </View>
                </ScrollContainer>
                <Button onPress={() => {
                    this.savestudentdetail()
                }} style={styles.Proceedbtn}
                    title={strings.btnsavestudent} />
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

export default connect(mapStateToProps, { ...actions, ...mapDispatchToProps })(Home)
