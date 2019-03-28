import React, { Component } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, Button } from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('/home/durbinlabs/AwesomeProject/src/image/12775-200.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });