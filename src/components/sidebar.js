import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.headerView}>

                </View>
                <View style={styles.bodyView}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '85%',
        backgroundColor: 'blue',
    },

    headerView: {
        flex: 2,
        backgroundColor: 'yellow'
    },

    bodyView: {
        flex: 7,
        backgroundColor: '#749f'
    },

    footer: {
        flex: 1,
        backgroundColor: 'green'
    }
});