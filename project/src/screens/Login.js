import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation';
window.name = {};
window.session = {};
window.isBusiness ={};

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true,
          error: null,
          email: '',
          password: '',
          token: ''
        };
      }

      updateEmail = (email) => {
        this.setState({email});
      };

      updatePassword = (password) => {
        this.setState({password});
      };

      updateToken = (token) => {
        this.setState({token});
      };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <Image source={require('../images/pandetect.jpg')}
                    style={{ width: "50%", height: "25%", alignSelf: "center", marginTop: 50 }}
                />

                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "SemiBold",
                        alignSelf: "center",
                        marginTop: 15,
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
                    marginTop: 50,
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

                <View>
                    <TouchableOpacity
                        style={styles.loginBtn}>
                        <Text
                            onPress={() => 
                                {
                                    
                                fetch('https://pandetect-backend2.herokuapp.com/users/login', {
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      username: this.state.email,
                                      password: this.state.password,
                                    })
                                  }).then((response) => response.json())
                                    .then((json)=>{
                                        console.log("json.token", json.token);
                                        if(json.token === undefined){
                                            Alert.alert(
                                                "Invalid Data Provided",
                                                "Either email or password is incorrect. Be sure to provide valid information.",
                                                [
                                                    {
                                                        text: "OK"
                                                    }
                                                ]
                                            )
                                        }
                                        else{
                                            window.session = json.token;
                                            if(this.state.email == 'ubombar'){
                                                window.isBusiness = true;
                                            }
                                            else{window.isBusiness = false;}
                                            //navigate('Main');
                                            this.props.navigation.reset([NavigationActions.navigate({routeName:'Main'})]) //***
                                        }
                                        //this.updateToken(json.token),
                                    }
                                    )
                                    .catch((error) => console.error(error))
                                    .finally(() => {
                                        this.setState({ isLoading: false });
                                    });
                                    //BURAYA IF EKLE UNDEFINED DEGILSE NAVIGATE ETSIN
                                                                
                                }
                            }

                            style={styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text
                    onPress={() => navigate('Register')}

                    style={{
                        marginTop: 20,
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 15
                    }}>Don't Have an Account?</Text>


                <Text
                    onPress={() => navigate('ApplicationForm')}

                    style={{
                        alignSelf: "center",
                        color: "#961B92",
                        fontFamily: "SemiBold",
                        paddingVertical: 15
                    }}>Want to Become a Place Owner?</Text>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 14
    },
    loginBtn: {
        marginVertical: 20,
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "35%"
    }
});



  //     fetch('https://pandetect-backend2.herokuapp.com/users/login', {
                                //     method: 'POST',
                                //     headers: {
                                //       Accept: 'application/json',
                                //       'Content-Type': 'application/json'
                                //     },
                                //     body: JSON.stringify({
                                //       username: this.state.username,
                                //       password: this.state.password,
                                //       email: this.state.email
                                //     })
                                //   }).then((response) => response.json())
                                //   .then((json) => {
                                //       this.setState({ data: json });
                                //       if(json.status == 200){
                                //           console.log('fine')
                                //       }
                                //       else
                                //       {
                                //         console.log('error')
                                //       }
                                //   })
                                //   .catch((error) => console.error(error))
                                //   .finally(() => {
                                //       this.setState({ isLoading: false });
                                //   });
                                //console.log("this state token: ", this.state.token);