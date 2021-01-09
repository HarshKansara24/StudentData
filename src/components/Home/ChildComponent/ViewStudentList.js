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
import { getCurrentDialCode, getItem } from '../../../data/PrefUtils';
import moment from 'moment';
import styles from '../styles/Home.style'
import RadioButtonRN from 'radio-buttons-react-native';
import Navigator from '../../../navigation/Navigator';
import { TextInput } from 'react-native-gesture-handler';
import CommonController from '../../../controllers/CommonController';
import { STUDENT_LIST_DATA } from '../../../data/PrefKeys';
//****************************************************************
//* Import Declaration END                                       *
//****************************************************************

//****************************************************************
//* Class Declaration Start                                      *
//****************************************************************
class ViewStudentList extends Component {
    //****************************************************************
    //* Variable Declaration Start                                   *
    //****************************************************************
    state = {
        student_list:[],
        error:false
    }
    componentDidMount = async () => {
        let student_list = await getItem(STUDENT_LIST_DATA)
        let error = student_list.length > 0 ?  false : true
        this.setState({error:error})
         student_list = !error ? JSON.parse(student_list) : []
          
            this.setState({student_list:student_list})
         
        
    }

    //****************************************************************
    //* Variable Declaration end                                    *
    //****************************************************************
    _renderBillPaymentItem = ({ item }) => {
        console.log(item)
        return (
            <Clickable onPress={()=>{this.props.navigation.navigate("ViewStudentdetail",{Student_detail:item})}} style={styles.MainView}>
                <View style={styles.titleView}>
                    <Image style={{height:40,width:40,borderRadius:40}} source={ {uri : item.profileImage}}></Image>
                    <Text style={styles.textDescription}>
                        {item.firstName + " " +item.FatherName + " " + item.lastName} 
                    </Text>

                </View>
            </Clickable>
        );
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
             
                            {this.state.error ?
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{
                                        color: Colors.Defaultblack,
                                        fontFamily: FontName.medium,
                                        fontSize: 16,
                                    }} >{strings.Nostudent}</Text>
                                </View>
                                :
                                <FlatList
                                    data={this.state.student_list}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item) => this._renderBillPaymentItem(item)}
                                    keyExtractor={(item, index) => "key" + index}
                                />}

               
                
                
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

export default connect(mapStateToProps, { ...actions, ...mapDispatchToProps })(ViewStudentList)
