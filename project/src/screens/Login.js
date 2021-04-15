import React from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {

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
                    />



                </View>

                <View>
                    <TouchableOpacity
                        style={styles.loginBtn}>
                        <Text
                            onPress={() => navigate('Main')}

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