import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import PropTypes from 'prop-types';
import Styles from '../common/styles';
import {SafeAreaView } from 'react-navigation';

class SideMenu extends Component {
  render() {
    return (
      <View style={Styles.container}>
        
        <View style={Styles.headerContainer}>
          <View style={Styles.headerImageViewStyle}>
               <Image style={Styles.headerImageStyle} source={require('../../assets/customIcons/user.png')}/>                        
          </View>

          <View style={Styles.headerTextView}>
               <Text style={Styles.headerText}> Mr. Obaidul Qader </Text>
          </View>
            
        </View>
        
        <View style={Styles.navSectionStyle}>    
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

        <View style={Styles.footerContainer}>
            <Text style={Styles.footerText}>Developed By</Text>
            <Image
              style={Styles.footerImageStyle}
              source={require('../../assets/customIcons/durbinlogo.png')}
            />            
        </View>
      </View>
    );
  }
}

export const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={{
        container: {
          flex: 1,
        },
      }}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      {/* <DrawerItems> */}
      <SideMenu navigation={props.navigation} />
      {/* </DrawerItems> */}
    </SafeAreaView>
  </ScrollView>
);

// SideMenu.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };
