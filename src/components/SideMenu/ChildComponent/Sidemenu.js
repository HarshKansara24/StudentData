import React, { Component } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { MainContainer, Clickable } from '../../common';
import { connect } from 'react-redux'
import styles from '../styles/Sidemenu.style'
import { Images, Colors } from '../../../utils';



class Sidemenu extends Component {

    state = {
        routes: [{ title: "Add student", image: (Images.add_user), route: 'Home' },
        { title: "View student", image: (Images.add_user), route: 'ViewStudentList' },
        ]
    }

    //  Sidemenu list View
    _rendermenuListItem = ({ item }) => {
        let canShowSideMenuOption = true;


        return (
            <View style={[styles.menuMainview, {
                display: canShowSideMenuOption ? "flex" : "none"
            }]}>
                <Clickable style={styles.menuIcon} onPress={() => {

                    this.props.navigation.navigate(item.route);
                    this.props.navigation.closeDrawer();

                }}>
                    <Image
                        source={item.image}
                        style={styles.ImageIconStyle}
                    />
                    <Text style={styles.TextStyle}>{item.title}</Text>
                </Clickable>
            </View>
        );
    }

    render() {


        return (
            <MainContainer header={{ light: true, hideUnderLine: true, backgroundColor: Colors.lightGreenColor,
                right:[ {image: Images.Ic_CloseWhiteIcon, onPress: () => this.props.navigation.closeDrawer()}] }}>
                <View style={styles.HeaderView}>

                    <Clickable onPress={() => this.props.navigation.push('EditProfile')}>
                        <View style={styles.topView}>
                            <View style={styles.userView}>

                                <View style={styles.titleView}>
                                    <Text style={styles.textUsername}>
                                        Harsh
                                    </Text>
                                    <Text style={styles.Username}>
                                        9428797543
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Clickable>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.MenuMainView}>
                        <View style={styles.MenuItemListView}>
                            <FlatList
                                horizontal={false}
                                data={this.state.routes}
                                showsVerticalScrollIndicator={false}
                                renderItem={(item) => this._rendermenuListItem(item)}
                                keyExtractor={(item, index) => "key" + index}
                            />
                        </View>
                    </View>
                </View>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu)
