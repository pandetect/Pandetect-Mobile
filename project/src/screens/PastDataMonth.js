import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    LineChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';

export default class PastDataMonth extends React.Component {

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
                            style={styles.userBtn}>
                            <Text
                                onPress={() => navigate('PastDataDay')}

                                style={styles.btnText}>Day</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBtn}>
                            <Text
                                onPress={() => navigate('PastDataWeek')}

                                style={styles.btnText}>Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.monthBtn}>
                            <Text
                                onPress={() => navigate('')}

                                style={styles.btnText}>Month</Text>
                        </TouchableOpacity>

                    </View>
                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "SemiBold",
                            paddingHorizontal: 30
                        }}>Monthly Compliance Rate</Text>
                    <LineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                "11", "12"],
                            datasets: [
                                {
                                    data: [
                                        78.89,
                                        84.56,
                                        70.44,
                                        86.12,
                                        60.76,
                                        65.32,
                                        70.12,
                                        76.39,
                                        80.23,
                                        69.99,
                                        77.13,
                                        89.11
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
                        }}>Social Distance Compliance Rate</Text>

                    <LineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                "11", "12"],
                            datasets: [
                                {
                                    data: [
                                        86.12,
                                        84.19,
                                        88.36,
                                        79.99,
                                        81.12,
                                        83.24,
                                        90.32,
                                        91.14,
                                        89.16,
                                        90.23,
                                        94.52,
                                        96.00
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
    monthBtn: {
        backgroundColor: "#85847D",
        padding: 10,
        //borderRadius: 10,
        width: "22%"
    }

});