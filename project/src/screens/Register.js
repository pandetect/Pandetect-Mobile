import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
// import { ScrollView } from 'react-native-gesture-handler';

export default class Register extends React.Component {

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
                    />

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.signUpBtn}>
                        <Text
                            onPress={() => navigate('Login')}

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