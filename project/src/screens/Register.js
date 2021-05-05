import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true,
          error: null,
          username: '',
          email: '',
          password: '',
          passwordAgain: '',
        };
      }

    updateUsername = (username) => {
        this.setState({username});
    };

    updateEmail = (email) => {
        this.setState({email});
    };

    updatePassword = (password) => {
        this.setState({password});
    };

    updatePasswordAgain = (passwordAgain) => {
        this.setState({passwordAgain});
    };


    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>

                <Image source={require('../images/pandetect.jpg')}
                    style={{ width: "48%", height: "24%", alignSelf: "center", marginTop: 50 }}
                />
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                        marginTop: 5,
                    }}
                >PANDETECT</Text>

                <Text
                    style={{
                        fontFamily: "SemiBold",
                        marginHorizontal: 55,
                        textAlign: 'center',
                        marginTop: 5,
                        opacity: 0.4
                    }}
                >
                    Welcome!
                    </Text>

                
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 30,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="mail" color="#961B92" size={24} />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={this.updateUsername}
                    />

                </View>


                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="mail" color="#961B92" size={24} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={this.updateEmail}
                    />

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="lock" color="#961B92" size={24} />
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={this.updatePassword}
                    />

                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>
                    <Icon name="lock" color="#961B92" size={24} />
                    <TextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={this.updatePasswordAgain}
                    />

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.signUpBtn}>
                        <Text
                            onPress={() => {
                                fetch('https://pandetect-backend2.herokuapp.com/users/signup', {
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      username: this.state.username,
                                      password: this.state.password,
                                      email: this.state.email
                                    })
                                  })
                                  .then((response) => response.json()
                                  .then((json) => {                      
                                    if(json == 'User created successfuly'){
                                        Alert.alert(
                                            "Account Created",
                                            "Your account has been created.",
                                            [
                                                { text: "OK", onPress: () => { 
                                                    this.props.navigation.reset([NavigationActions.navigate({routeName:'Login'})]) 
                                                } }
                                            ]
                                        )
                                    }
                                    else
                                    {
                                        Alert.alert(
                                            "Problem Occured!",
                                            "Be sure to provide valid information.",
                                            [
                                                {
                                                    text: "OK"
                                                }
                                            ]
                                        )
                                    }
                                  }  
                                  ) );
                                // BURAYA IF EKLE ALREADY EXISTSE HATA VERSIN
                             
                            }}

                            style={styles.signUpBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Text
                    onPress={() => navigate('Login')}

                    style={{
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 15
                    }}>Already Have an Account?</Text>

                <Text
                    onPress={() => navigate('ApplicationForm')}

                    style={{
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 30
                    }}>Want to Become a Place Owner?</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    signUpBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 14
    },
    signUpBtn: {
        marginVertical: 20,
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "35%"
    }
});