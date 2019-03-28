import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '/home/durbinlabs/AwesomeProject/src/styles/styles.js'

export default class DrawerContentComponents extends Component {
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    });


    render () {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                    <Image source={require('/home/durbinlabs/AwesomeProject/src/image/profile.png')}
                        style={styles.profileImage}
                    />
                    <Text style={{fontSize: 20, paddingLeft: 20}}>Obaidul Qadir{'\n'}(+880) 1638-908734</Text>
                </View>
                <View style={styles.bodyView}>
                    <ScrollView>
                    <TouchableOpacity
                onPress={() => {                  
                  this.props.navigation.navigate("Home");
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="home" size={18} />
                  <Text style={Styles.navTextStyle}>Home</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ProfileUpdate')}
              >
                <View style={[Styles.navItemStyle]}>
                  <Icon name="account" size={18} />
                  <Text style={Styles.navTextStyle}>My Profile</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AppointmentChoice')}
              >
                <View style={[Styles.navItemStyle]}>
                  <Icon name="calendar-clock" size={18}/>
                  <Text style={Styles.navTextStyle}>Appointment</Text>
                </View>
              </TouchableOpacity>              

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MyBeneficiaries')}
              >
                <View style={[Styles.navItemStyle]}>
                  <Icon name="account-multiple" size={18} />
                  <Text style={Styles.navTextStyle}>Beneficiaries</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Emergency')}
              >
                <View style={[Styles.navItemStyle]}>                  
                  <Icon name="phone-plus" size={18} />
                  <Text style={Styles.navTextStyle}>Emergency Lines</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('History')}
              >
                <View style={[Styles.navItemStyle]}>                  
                  <Icon name="history" size={18} />
                  <Text style={Styles.navTextStyle}>History</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Faq')}
              >
                <View style={[Styles.navItemStyle]}>                  
                  <Icon name="comment-question-outline" size={18} />
                  <Text style={Styles.navTextStyle}>FAQ</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Feedback')}
              >
                <View style={[Styles.navItemStyle]}>                  
                  <Icon name="comment-text-multiple-outline" size={18} />
                  <Text style={Styles.navTextStyle}>Feedback</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AboutUs')}
              >
                <View style={[Styles.navItemStyle]}>
                  <Icon name="information-outline" size={18}  />
                  <Text style={Styles.navTextStyle}>About Us</Text>
                </View>
              </TouchableOpacity>              

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Logout')}
              >
                <View style={[Styles.navItemStyle]}>                  
                  <Icon name="logout-variant" size={18} />
                  <Text style={Styles.navTextStyle}>Sign Out</Text>
                </View>
              </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                        <Text style={{fontSize: 15, paddingRight: 20}}>Developed By</Text>
                        <Image
                        resizeMode ={'contain'}
                        style={styles.logoImage}
                        source={require('/home/durbinlabs/AwesomeProject/src/image/durbinlogo.png')}
                        />
                        <Text style={{paddingRight: 20, fontSize: 10, opacity: .7}}>Version 0.1.0</Text>        
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },

    headerView: {
        flex: 2,
        backgroundColor: '#c7cdd6',
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    bodyView: {
        flex: 7,
        paddingLeft: 20,
    },

    footer: {
        flex: 1.3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    profileImage: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },

    text: {
        fontSize: 20,
    },

    logoImage: {
        flex: 1,
        width: '50%',
        marginRight: 20,
    }
});