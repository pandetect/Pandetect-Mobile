import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import MapView, { Marker, Callout } from 'react-native-maps';
import { NavigationActions } from 'react-navigation';
window.name = {};
window.placeID = {};
//let points = [];
//let pointsName = [];
//let index = -1;

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
            data: [],
            isLoading: true,
            markers: []
        };
    }


    updateSearch = (search) => {
        this.setState({search});
        //index = this.state.markers.indexOf(e => e.title == search);
        //console.log(index);
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

/*
        this.setState({ markers: [
            {
            name: 'Migros, Sincan, Ankara',
            coordinates: {
                latitude: 39.883394722609125 + 0.05,
                longitude: 32.56132484173652 + 0.05
            },
          },
          {
            name: 'Starbucks, Beytepe, Ankara',
            coordinates: {
                latitude: 39.883394722609125, 
                longitude: 32.76132484173652
            },  
          }
        ] });
*/

        fetch('https://pandetect-backend2.herokuapp.com/places')
        .then((response) => response.json())
        .then((json) => {
        console.log(json);
        this.setState({markers: json});
        })
        .catch((error) => {
        console.error(error);
        });
        
    }



    render() {
        const { data, isLoading } = this.state;
        const { navigate } = this.props.navigation;
        
/*
        for (let i = 0; i < 3; i++) {
            points[i] = {
                latitude: this.state.latitude + (i + 1) * 0.05,
                longitude: this.state.longitude + (i + 1) * 0.05
                //latitude: 37.33233 + (i) *0.005,
                //longitude: -122.03121  + (i) *0.005
            }
        }

        points[2] = {
            latitude: 39.883394722609125, 
            longitude: 32.76132484173652
            //latitude: 37.33233 + (i) *0.005,
            //longitude: -122.03121  + (i) *0.005
        }
        let name = 'Place'
        for (let i = 0; i < 3; i++) {
            pointsName[i] = 
            name.toLowerCase() + ' ' + (i+1).toString();
        }


        this.setState({ markers: [
            {
            title: 'hello',
            coordinates: {
              latitude: 3.148561,
              longitude: 101.652778
            },
          },
          {
            title: 'hello2',
            coordinates: {
              latitude: 3.149771,
              longitude: 108.655449
            },  
          }
        ] });
*/

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
                                    { text: "OK", onPress: () => 
                                    this.props.navigation.reset([NavigationActions.navigate({routeName:'Login'})])
                                    //navigate('Login')
                                 }
                                ]
                            )} />
                </View>
                               
                <View
                    style={styles.topBtnContainer}>

                  
                    {window.isBusiness ? 
                    <TouchableOpacity
                        style={styles.topUserBtn}>
                        <Icon name="linechart" color="#961B92" size={24}
                            onPress={() => {
                                                window.name = 'Beytepe Device';
                                                navigate('CurrentData');
                                            }} />
                        <Text
                            onPress={() => {
                                this.props.navigation.reset([NavigationActions.navigate({routeName:'Login'})])
                                //navigate('CurrentData')
                                }
                            }

                            style={styles.topBtnText}>Statistics</Text>
                    </TouchableOpacity>
                     : null}
                    
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
                
                
                

                <Icon onPress={() => {//if(index != -1){
                        //this.setState({latitudePlace: points[index].latitude, longitudePlace: points[index].longitude});
                        let bool = this.state.markers.some(e => e.name == this.state.search);
                        console.log('***');
                        console.log(bool);
                        //console.log(this.state.markers[{title: this.state.search}]);
                        var dict = this.state.markers;
                        for (var key in dict) {
                          if(dict[key].name == this.state.search){
                              console.log(dict[key])
                              this.setState({latitudePlace: Number(dict[key].latitude), longitudePlace: Number(dict[key].longitude)});
                              break;
                            }
                        }
                    //}
                    }}

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


                        {this.state.markers.map(marker => (
                            <Marker
                            key={marker.name}
                            coordinate={{latitude: Number(marker.latitude), longitude: Number(marker.longitude)}}
                            image={require('../images/marker.png')}
                            title={marker.name}
                            onCalloutPress={() => { window.name = marker.name; window.placeID = marker.uuid; 
                                //navigate('CurrentData'); 
                                this.props.navigation.reset([NavigationActions.navigate({routeName:'CurrentData'})])
                            }}
                            />
                        ))}


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