import React, { Component } from 'react';
import { View, Image, ScroolView, Text, StyleSheet, Dimensions, } from 'react-native'; 
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Profile from './src/components/profile.js';
import MyNotificationsScreen from './src/components/notification.js';
import DrawerContentComponents from './src/components/drawerContentComponets.js';
import Sidebar from './src/components/sidebar.js';
// import CustomDrawerComponent from './src/components/drawer.js';

const width = Math.round(Dimensions.get('window').width);

const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: Profile,
        Notification: MyNotificationsScreen
    },
    {
        contentComponent: DrawerContentComponents,
        drawerWidth: 500,
    },
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends Component {
    render(){
        return (
            <AppContainer />
        );
    }
};


