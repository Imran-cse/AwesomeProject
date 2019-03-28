import React, { Component } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

export default class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('/home/durbinlabs/AwesomeProject/src/image/12775-200.png')}
                style={[styles.icon, {tintColor: tintColor}]}   
            />
        ),
    };

    render() {
        return (
            <ScrollView contentContainerStyle={{ height: 1100 }}>
                <View style={styles.mainView}>
                    <View style={styles.headerView}>
                        <LinearGradient style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
                            colors={['#9F9BF2', '#88B0CF', '#5FFB73']} >
                            <Text style={{ color: 'white', fontStyle: 'italic', paddingRight: 10, fontWeight: 'bold' }}>
                                Edit Profile
                            </Text>
                        </LinearGradient>
                    </View>
                    <Image source={require('/home/durbinlabs/AwesomeProject/src/image/cartoon.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.bodyView}>
                        <View style={styles.nameView}>
                            <Text style={{ fontSize: 25, color: 'blue' }}>Kishor Pasha</Text>
                            <Text style={{ fontSize: 17 }}>26, Male</Text>
                            <Text style={{ fontSize: 17 }}>17-12-1994</Text>
                        </View>
                        <Text style={{ fontSize: 17, padding: 10 }}>Personal Info:</Text>
                        <View style={{ flex: 3.5, padding: 10, }}>
                            <View style={{ flex: 1, backgroundColor: '#6dce6d', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text}>@ kipasha@gmail.com</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#a9b0f9', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text}>199445435342111</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#4b53a8', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text}>199445435342111</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: '#597733', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text}>01745688463</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 17, padding: 10 }}>Personal Info:</Text>
                        <View style={{ flex: 3, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: '#a9b0f9', borderRadius: 100, height: 150, width: 150 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>Height</Text>
                                    <Text style={styles.text}>5'8''</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#6dce6d', borderRadius: 100, height: 150, width: 150 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>Weight</Text>
                                    <Text style={styles.text}>70</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#597733', borderRadius: 100, height: 150, width: 150, }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text}>Blood Group</Text>
                                    <Text style={styles.text}>AB+</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },

    headerView: {
        flex: 2,
        // backgroundColor: '#94b794',
    },

    bodyView: {
        flex: 7.5,
    },

    nameView: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 15,
    },

    image: {
        position: 'absolute',
        top: 125,
        left: '50%',
        marginLeft: -80,
        borderRadius: 100,
        width: 170,
        height: 170
    },
    icon: {
        width: 24,
        height: 24,
      },
});