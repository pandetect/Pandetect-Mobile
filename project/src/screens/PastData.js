import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {
    LineChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';
let arr = [];

export default class PastData extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true,
          error: null,
          numberOfPeople: '',
          numberOfUnmasked: '',
          numberOfMasked: '',
          numberOfDistanceViolation: '',
          numberOfUncertain: '',
          maskY: []
        };
      }



      componentDidMount() {
          /*
        fetch('https://pandetect-backend2.herokuapp.com/statistics/mobilegraph', {
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      businessUuid: window.placeID,
                                      startDate: this.state.startDate,
                                      endDate: this.state.endDate
                                    })
        })
        .then((response) => response.json())
        .then((json) => {
            //console.log('****');
            //console.log(json);
            console.log(json.avgNumberOfPeople);
            
        })
        .catch((error) => {
        console.error(error);
        });
        */

        let endDate_ = new Date(Date.now()); 
        let startDate_ = new Date(endDate_ - 1000 * 60 * 60 * 24);
       // startDate_.setHours(endDate_.getHours()-1);
       // console.log(endDate_);
       // console.log(startDate_);

        fetch('https://pandetect-backend2.herokuapp.com/statistics/mobilegraph', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              businessUuid: window.placeID,
              startDate: startDate_,
              endDate: endDate_
            })
            })
            .then((response) => response.json())
            .then((json) => {
            //console.log(json);
            console.log("here****1");
            console.log(json);
            //console.log(json.avgNumberOfMasked);
            this.setState({maskY: json.map(value => value.avgNumberOfMasked)});
            console.log(this.state.maskY);
            //arr = this.state.maskY;
            //console.log(arr);
            console.log("here****2");
            })
            .catch((error) => {
            console.error(error);
            });

            console.log(window.placeID);
            console.log("here****3");

    }



    render() {
        const { navigate } = this.props.navigation;

        /*

        //this.setState({endDate: Date.now(), startDate: Date.now() - 1000 * 60 * 60});
    
        let endDate_ = new Date(Date.now()); 
        let startDate_ = new Date(endDate_ - 1000 * 60 * 60 * 48);
       // startDate_.setHours(endDate_.getHours()-1);
       // console.log(endDate_);
       // console.log(startDate_);

        fetch('https://pandetect-backend2.herokuapp.com/statistics/mobilegraph', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              businessUuid: window.placeID,
              startDate: startDate_,
              endDate: endDate_
            })
            })
            .then((response) => response.json())
            .then((json) => {
            //console.log('****');
            //console.log(json);
            console.log("here****1");
            //console.log(json);
            
            })
            .catch((error) => {
            console.error(error);
            });

            console.log(window.placeID);
            console.log("here****");
        */

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
                        style={styles.hourBtn}>
                        <Text
                            onPress={() => navigate('')}

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
                }}>Hourly Compliance Rate</Text>

                <LineChart
                    data={{
                            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                                "21", "22", "23", "00"],
                        datasets: [
                            {  
                               
                                data: [
                                    100.00,
                                    100.00,
                                    100.00,
                                    100.00,
                                    100.00,
                                    100.00,
                                    100.00,
                                    100.00,
                                    90.41,
                                    75.56,
                                    80.20,
                                    86.44,
                                    70.21,
                                    65.64,
                                    67.87,
                                    81.10,
                                    86.59,
                                    87.53,
                                    78.66,
                                    89.90,
                                    95.77,
                                    100.00,
                                    100.00,
                                    100.00
                                ]
                                
                                
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    //yAxisLabel="$"
                    //yAxisSuffix="k"
                    xAxisSuffix=":00"
                    yAxisSuffix="%"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        //backgroundColor: "#e26a00",
                        //backgroundGradientFrom: "#fb8c00",
                        //backgroundGradientTo: "#ffa726",
                        backgroundColor: "#C9ACC1",
                        backgroundGradientFrom: "#C9ACC1",
                        backgroundGradientTo: "#C9ACC1",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            //stroke: "#ffa726"
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
                                "21", "22", "23", "00"],
                            datasets: [
                                {
                                    data: [
                                        100.00,
                                        100.00,
                                        100.00,
                                        100.00,
                                        100.00,
                                        100.00,
                                        25.11,
                                        48.52,
                                        70.49,
                                        88.56,
                                        79.44,
                                        77.98,
                                        65.21,
                                        66.73,
                                        84.99,
                                        95.14,
                                        92.36,
                                        96.14,
                                        90.25,
                                        89.43,
                                        87.66,
                                        100.00,
                                        100.00,
                                        100.00
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        //yAxisLabel="$"
                        //yAxisSuffix="k"
                        xAxisSuffix=":00"
                        yAxisSuffix="%"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            //backgroundColor: "#e26a00",
                            //backgroundGradientFrom: "#fb8c00",
                            //backgroundGradientTo: "#ffa726",
                            backgroundColor: "#C9ACC1",
                            backgroundGradientFrom: "#C9ACC1",
                            backgroundGradientTo: "#C9ACC1",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            //color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                //stroke: "#ffa726"
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
                            marginBottom: 20,
                            paddingHorizontal: 30
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
    hourBtn: {
        backgroundColor: "#85847D",
        padding: 10,
        //borderRadius: 10,
        width: "22%"
    }
    
});