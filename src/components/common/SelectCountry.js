import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MainContainer, ProgressDialog, ScrollContainer } from '../common';
import { connect } from 'react-redux'
import { Colors, FontName, FontSize, Images, Utils } from '../../utils';
import { strings } from '../../language/Language';
import * as actions from '../../actions/CommonActions'
import Axios from 'axios';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { countryListData } from './CountryList';
const KEYS_TO_FILTERS = ['callingCodes','name'];
class SelectCountry extends Component {


    constructor() {
        super();


        this.state = {
            // pickerData: null,
            countryList: [],
            countryListFiltered: [],
            loading: false,
            country: {},
            searchTerm:'',
        };
    }

    async componentDidMount() {

        strings.setLanguage('en');

        this.setState({ country: this.props.route.params.country })
        this.getCountryList();
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

    getCountryList = async () => {
        let CountryList = await countryListData
        
            this.setCountries(CountryList)




    }


    onSearchTextChanged = (searchText) => {
        if (Utils.isEmpty(searchText)) {
            this.setState({
                countryListFiltered: this.state.countryList
            })
        } else {
            let countryListFiltered = [];
            this.state.countryList.map((stateData) => {
                //   console.log(stateData.name);
                if (stateData.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                    || stateData.callingCodes[0]
                ) {
                    countryListFiltered.push(stateData);

                }

            });

            this.setState({
                countryListFiltered: countryListFiltered
            })
        }
    }

    // State list View
    _renderCountryListItem = ({ item }) => {

        let showTick = this.state.country.code.toLocaleLowerCase() == "+" + item.callingCodes[0].toLocaleLowerCase();
        // if (item.name == this.state.selectedState.name) {
        //     showTick = true;
        // }


        return (
            <View style={styles.Listview}>
                <TouchableOpacity style={styles.menuIcon} activeOpacity={0.5}

                    onPress={() => {

                        // this.props.setFieldValue("stateSelected", item)
                        // this.props.navigation.goBack();

                        this.setState({
                            country: { code: "+" + item.callingCodes[0], flag: item.flag, name: item.name }
                        }, () => {
                            // this.props.navigation.goBack();

                        })

                    }}
                >
                    {/* <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: item.flag }} style={styles.CheckmarkArrow} />
                    <Text style={styles.codeTextStyle}> {`+${item.callingCodes[0]}`} </Text>

                    </View> */}
                    <View style={styles.ItemView}>
                        <Text style={styles.codeTextStyle}> {`+${item.callingCodes[0]}`} </Text>

                        <Text style={{
                            ...styles.StateTextStyle,
                            color: showTick ? Colors.lightGreenColor : Colors.Defaultblack
                        }} numberOfLines={2}> {item.name} </Text>

                        {
                            (showTick) ?
                                <Image source={Images.ic_BlueCheckmarkIcon}
                                    style={styles.CheckmarkArrow} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <View style={styles.Underline}></View>
            </View>
        );
    }

    render() {

        const countryListFiltered = this.state.countryListFiltered.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <MainContainer header={{
                title: strings.toolbar_selectCountry,
                titleColor: Colors.Defaultblack,
                // titleStyle:{textAlign:'center',marginTop:12},
                left: { image: Images.ic_BankRoundArrowIcon , onPress: () => this.props.navigation.goBack() },
                right: [{
                    text: strings.done.toUpperCase(),
                    color:Colors.lightGreenColor,
                    onPress: () => {
                        // this.props.navigation.state.params.onDone(this.state.country)
                        this.props.route.params.onDone(this.state.country)
                        this.props.navigation.goBack()
                    }
                }]
            }}>
                <ScrollContainer>

                    <View style={{ flex: 1 }}>
                        <ProgressDialog loading={this.state.loading} />
                        <View style={styles.searchView}>
                            <TextInput placeholder={strings.SearchHere} placeholderTextColor={Colors.lightGreyColor}
                                style={styles.txtSearch}

                                onChangeText={(text) => {

                                    this.searchUpdated(text)

                                }}

                            ></TextInput>
                        </View>
                        <View style={styles.ContainView}>
                            <View style={styles.MenuItemListView}>
                                < FlatList
                                    data={countryListFiltered}
                                    extraData={this.state}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={(item) => this._renderCountryListItem(item)}
                                    keyExtractor={(item, index) => "key" + index}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollContainer>
            </MainContainer>
        )
    }

    setLoading(value) {

        this.setState({ loading: value })
    }


    setCountries(value) {

        // const data = value.filter((v) => !Utils.isEmpty(v.callingCodes[0]))
        this.setState({ countryList: value, countryListFiltered: value })

    }
}

const mapStateToProps = (state) => {

    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, actions)(SelectCountry)

const styles = StyleSheet.create({

    searchView: {
        backgroundColor: Colors.Backgroundgrey,
        height: 52,
        justifyContent: 'center',
    },
    txtSearch: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize19,
        color: Colors.Defaultblack,
        paddingLeft: 16,
        alignItems: 'center'
    },
    StateTextStyle: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize19,
        color: Colors.Defaultblack,
        flex: 1,
        marginLeft: 16
    },
    codeTextStyle: {
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize19,
        color: Colors.Defaultblack,
        marginLeft: 16
    },
    Underline: {
        backgroundColor: Colors.Backgroundgrey,
        height: 1
    },
    ItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    CheckmarkArrow: {
        margin: 8,
        height: 25,
        width: 25,
        alignItems: 'flex-end',
        tintColor: Colors.tabTitleGreenColor
    },
    menuIcon: {
        flexDirection: 'row',
        height: 68,
        alignItems: 'center'
    },
    ContainView: {
        flex: 1
    }
});
