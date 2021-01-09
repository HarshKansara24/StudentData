import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Colors, FontName, FontSize, Images} from '../../utils';
import ResponsivePixels from '../../utils/ResponsivePixels';
import {Clickable} from './index';

export default class CustomDialogWithFlatList extends Component {

    render() {

        console.log("CustomDialogWithFlatList props : ", this.props)

        return (
            <View style={styles.mainContainer}>

                <View
                    style={{
                        borderBottomColor: Colors.Backgroundgrey,
                        borderBottomWidth: 1,
                    }}
                />

                {
                    this.props.data.length > 0 ?
                        <View>
                            <FlatList
                                nestedScrollEnabled={true}
                                bounces={false}
                                data={this.convertArray(this.props.data)}
                                showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
                                renderItem={(item) => this._renderAddressListItem(item)}
                                keyExtractor={(item, index) => 'key' + index}
                                style={styles.flatListItems}
                            />
                        </View>
                        :
                        <Text style={styles.txtNoVehicleAdded}>
                            {'No data found'}
                        </Text>
                }

            </View>
        );
    }

    _renderAddressListItem = ({item, index}) => {

        console.log("Item question : " + JSON.stringify(item))

        return (
            <View>

                <Clickable onPress={() => {
                    this.props.onSelect(item);
                }}>

                    <View style={styles.listItemVehicle}>
                        <Text style={styles.txtVehicleItem}>{item.name}</Text>
                        <Image style={[styles.imgBlueTick, {
                            alignSelf: 'center',
                            display: item.selected ? 'flex' : 'none',
                        }]} source={Images.ic_BlueCheckmarkIcon}/>
                    </View>

                </Clickable>

                <View
                    style={{
                        borderBottomColor: Colors.Backgroundgrey,
                        borderBottomWidth: 1,
                    }}
                />

            </View>
        );
    };

    convertArray = (array) => {
        array.map(item => (
            {
                ...item, selected: false,
            }
        ));
        return array;
    };

    updateSelectedItemTick = (index) => {
        (this.convertArray(this.props.data))[index].selected = true;
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        borderWidth: 3,
        borderColor: 'transparent',
        minHeight: ResponsivePixels.size50,
        maxHeight: ResponsivePixels.size150,
    },
    addNewVehicleContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.splashbgEndColor
    },
    txtAddVehicle: {
        color: Colors.DarkDetailTextColorwithOpacity,
        fontFamily: FontName.medium,
        fontSize: FontSize.fontSize18,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtVehicleItem: {
        paddingVertical: 7,
        color: Colors.DarkDetailTextColorwithOpacity,
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize14,
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
    },
    flatListItems: {
        minHeight: 50,
        maxHeight: 150,
    },
    imgAddVehicle: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    listItemVehicle: {
        flexDirection: 'row',
        marginHorizontal: ResponsivePixels.size10,
        paddingVertical: ResponsivePixels.size7
    },
    imgBlueTick: {
        margin: 10,
        height: 20,
        width: 20,
    },
    txtNoVehicleAdded: {
        color: Colors.DarkDetailTextColorwithOpacity,
        fontFamily: FontName.regular,
        fontSize: FontSize.fontSize16,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 30,
    },
});
