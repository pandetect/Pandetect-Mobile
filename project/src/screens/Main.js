import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import MapView, { Marker, Callout } from 'react-native-maps';

let points = [];
let pointsName = [];
let index = -1;

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            latitudePlace: 0,
            longitudePlace: 0,
            error: null,
            search: '',
        };
    }


    updateSearch = (search) => {
        this.setState({search});
        index = pointsName.indexOf(search.toLowerCase());
      };

    componentDidMount(position) {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudePlace: position.coords.latitude,
                longitudePlace: position.coords.longitude,
                error: null,
                search: ''
            });
        },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        );
    }



    render() {
        const { navigate } = this.props.navigation;
        

        for (let i = 0; i < 3; i++) {
            points[i] = {
                latitude: this.state.latitude + (i + 1) * 0.05,
                longitude: this.state.longitude + (i + 1) * 0.05
                //latitude: 37.33233 + (i) *0.005,
                //longitude: -122.03121  + (i) *0.005
            }
        }

        let name = 'Place'
        for (let i = 0; i < 3; i++) {
            pointsName[i] = 
            name.toLowerCase() + ' ' + (i+1).toString();
        }


        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <View style={{
                    flexDirection: "row", 
                    marginTop: 35,
                    paddingVertical: 2,
                    
                }}>
                   
                   <Icon style={{
                           marginLeft: 10,
                           alignSelf:"flex-end"
                       }} name="logout" color="#fff" size={24}/>
                    
                    <Text
                        style={{
                            fontSize: 25,
                            fontFamily: "SemiBold",
                            marginRight: "auto",
                            marginLeft: "auto",
                            alignSelf:"center"

                        }}
                    >PANDETECT</Text>
                    <Icon style={{
                           
                            
                           
                            marginRight: 10,
                            alignSelf:"center"

                        }}
                        name="logout" color="#961B92" size={24}
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
                               
                <View
                    style={styles.topBtnContainer}>
                    <TouchableOpacity
                        style={styles.topUserBtn}>
                        <Icon name="videocamera" color="#961B92" size={24}
                            onPress={() => navigate('')} />
                        <Text
                            onPress={() => navigate('')}

                            style={styles.topBtnText}>Stream</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.topUserBtn}>
                        <Icon name="form" color="#961B92" size={24}
                            onPress={() => navigate('Report')} />
                        <Text
                            onPress={() => navigate('Report')}

                            style={styles.topBtnText}>Report</Text>
                    </TouchableOpacity>

                </View>
                

            <View style={styles.topBtnContainer2}>

                <TextInput
                    style={{
                        marginTop: 0,
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 5,
                        paddingHorizontal: 5,
                        fontSize: 15,
                        flex: 1,
                        marginRight: "auto",
                        marginLeft: 10,
                        textAlign: "left",

                        flexDirection: "row",
                        borderWidth: 2,
                        marginTop: 0,
                        paddingHorizontal: 5,
                        borderColor: "#961B92",
                        }}

                        placeholder="Search..."
                        placeholderTextColor="#961B92"
                        onChangeText={this.updateSearch}
                        value={this.state.search}

                    >
                </TextInput>
                
                
                

                <Icon onPress={() => {if(index != -1){
                        this.setState({latitudePlace: points[index].latitude, longitudePlace: points[index].longitude});
                    }}}

                    style={{
                        marginTop: 0,
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 0,
                        marginHorizontal: 10,
                    }}
                    
                    name="search1" color="#961B92" size={28} />


                <Icon onPress={() => this.setState({latitudePlace: this.state.latitude, longitudePlace: this.state.longitude})}
                
                    style={{
                        marginTop: 0,
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 0,
                        marginHorizontal: 10,
                    }}
                    
                    name="reload1" color="#961B92" size={28} />

            </View>
                    


                <Text
                    style={{
                        marginTop: 0,
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        fontSize: 15
                    }}>Tap to Places for Information</Text>

                               
                <View style={styles.container}>
                <MapView
                        style={styles.map}
                        region={{
                            latitude: this.state.latitudePlace,
                            longitude: this.state.longitudePlace,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.121
                        }}
                    >

                        <Marker
                            coordinate={this.state}
                        />

                        <Marker
                            coordinate={points[0]}
                            image={require('../images/marker.png')}
                            title="Place Name"
                            onCalloutPress={() => navigate('CurrentData')}
                        >
                            <Callout><Text>Place Name 1</Text></Callout>
                        </Marker>

                        <Marker
                            coordinate={points[1]}
                            image={require('../images/marker.png')}
                            title="Place Name"
                            onCalloutPress={() => console.log(2)}
                        >
                            <Callout><Text>Place Name 2</Text></Callout>
                        </Marker>

                        <Marker
                            coordinate={points[2]}
                            image={require('../images/marker.png')}
                            title="Place Name"
                            onCalloutPress={() => console.log(3)}
                        >
                            <Callout><Text>Place Name 3</Text></Callout>
                        </Marker>
                    </MapView>   
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBtnContainer2: {
        marginHorizontal: 0,
        paddingVertical: 2,
        flexDirection: "row",
        width: "100%"
    },
    topBtnContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"
    },
    topUserBtn: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    topBtnText: {
        color: "#961B92",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 15,
        paddingHorizontal: 10
    },
    detailsBtn: {
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    },

    container: {
        bottom: 0
    },
    map: {
        height: '90%'
    }

});