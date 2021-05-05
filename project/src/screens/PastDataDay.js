import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    LineChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';

export default class PastDataDay extends React.Component {

    render() {
        const { navigate } = this.props.navigation;


        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <ScrollView>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: "center",
                        marginHorizontal: 40,
                        marginTop: 35,
                        paddingVertical: 2
                    }}>
                        <Icon name="back" color="#961B92" size={24}
                            onPress={() => navigate('CurrentData')} />
                        <Text
                            onPress={() => navigate('Main')}
                            style={{
                                fontSize: 25,
                                fontFamily: "SemiBold",
                                alignSelf: "center"
                            }}
                        >PANDETECT</Text>
                        <Icon name="logout" color="#961B92" size={24}
                            onPress={() =>
                                Alert.alert(
                                    "Signing Out",
                                    "Are you sure you want to sign out?",
                                    [
                                        {
                                            text: "Cancel",
                                            style: "cancel"
                                        },
                                        { text: "OK", onPress: () => navigate('Login') }
                                    ]
                                )} />
                    </View>



                    <Text
                        style={{
                            marginTop: 20,
                            color: "#961B92",
                            fontFamily: "SemiBold",
                            paddingVertical: 10,
                            paddingHorizontal: 30
                        }}>{window.name}</Text>


                    <View
                        style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.userBtn}>
                            <Text
                                onPress={() => navigate('PastData')}

                                style={styles.btnText}>Hour</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.dayBtn}>
                            <Text
                                onPress={() => navigate('')}

                                style={styles.btnText}>Day</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBtn}>
                            <Text
                                onPress={() => navigate('PastDataWeek')}

                                style={styles.btnText}>Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBtn}>
                            <Text
                                onPress={() => navigate('PastDataMonth')}

                                style={styles.btnText}>Month</Text>
                        </TouchableOpacity>

                    </View>
                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "SemiBold",
                            paddingHorizontal: 30
                        }}>Daily Compliance Rate</Text>

                    
                    <LineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
                            datasets: [
                                {
                                    data: [
                                        78.44,
                                        79.60,
                                        80.20,
                                        81.12,
                                        80.96,
                                        83.25,
                                        84.34,
                                        85.96,
                                        78.12,
                                        79.15,
                                        79.88,
                                        80.12,
                                        89.33,
                                        86.35,
                                        79.66,
                                        73.55,
                                        74.99,
                                        74.16,
                                        80.00,
                                        82.13,
                                        88.99,
                                        89.90,
                                        90.00,
                                        86.65,
                                        87.16,
                                        89.00,
                                        82.13,
                                        88.99,
                                        83.90,
                                        90.00
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        xAxisSuffix=":00"
                        yAxisSuffix="%"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#C9ACC1",
                            backgroundGradientFrom: "#C9ACC1",
                            backgroundGradientTo: "#C9ACC1",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#91186E"//noktanin etrafindaki cizgi
                            }
                        }}
                        bezier
                        style={{
                            marginTop: 30,
                            marginVertical: 15,
                            borderRadius: 16
                        }}
                    />


                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "SemiBold",
                            paddingHorizontal: 30
                        }}>Social Distance Compliance Rate</Text>

                    <LineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
                            datasets: [
                                {
                                    data: [
                                        87.16,
                                        89.00,
                                        82.13,
                                        79.15,
                                        79.88,
                                        80.12,
                                        80.00,
                                        82.13,
                                        88.99,
                                        89.90,
                                        90.00,
                                        86.65,
                                        78.44,
                                        79.60,
                                        80.20,
                                        81.12,
                                        79.66,
                                        73.55,
                                        74.99,
                                        80.96,
                                        83.25,
                                        84.34,
                                        85.96,
                                        82.13,
                                        88.99,
                                        89.90,
                                        90.00,
                                        86.65,
                                        84.23,
                                        88.68
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        xAxisSuffix=":00"
                        yAxisSuffix="%"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#C9ACC1",
                            backgroundGradientFrom: "#C9ACC1",
                            backgroundGradientTo: "#C9ACC1",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#91186E"//noktanin etrafindaki cizgi
                            }
                        }}
                        bezier
                        style={{
                            marginTop: 30,
                            marginVertical: 15,
                            borderRadius: 16
                        }}
                    />


                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "SemiBold",
                            paddingHorizontal: 30,
                            marginBottom: 20
                        }}>Mask Usage Compliance Rate</Text>



                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBtnContainer: {
        marginHorizontal: 30,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "84%",
        alignItems: "center"
    },
    topUserBtn: {
        backgroundColor: "#85847D",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    },
    topBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 12
    },
    userBtn: {
        backgroundColor: "#961B92",
        padding: 10,
        //borderRadius: 10,
        width: "22%"
    },
    btnContainer: {
        marginHorizontal: 30,
        paddingVertical: 40,
        //justifyContent: "space-between",
        justifyContent: "center",
        flexDirection: "row",
        width: "84%",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 12
    },
    dayBtn: {
        backgroundColor: "#85847D",
        padding: 10,
        //borderRadius: 10,
        width: "22%"
    }

});