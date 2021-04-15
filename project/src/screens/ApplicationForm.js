import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Textfield, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class ApplicationForm extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: "#FFF", height: "100%" }}>
            

            <View style={{
                    flexDirection: "row", 
                    marginTop: 35,
                    paddingVertical: 2,
                    
                }}>
                   
                   <Icon style={{ 
                    marginLeft: 10,
                    marginRight: "auto",
                    alignSelf:"center"
                }}
                    name="back" color="#961B92" size={24}
                        onPress={() => navigate('Login')} />
                    
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
                           marginLeft: "auto",
                           alignSelf:"center"
                       }} name="back" color="#fff" size={24}/>

                </View>







            <View>

                <Text
                    style={{
                        fontFamily: "SemiBold",
                        marginHorizontal: 40,
                        textAlign: 'center',
                        marginTop: 25,
                        opacity: 0.4
                    }}
                >
                    If you want to use our product in your place, you can apply us by providing these required information.
                    Please make sure to provide valid e-mail adress and phone number. We will contact you soon.
                </Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 30,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                    />



                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>

                    <TextInput
                        placeholder="Place Name"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                    />




                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>

                    <TextInput
                        placeholder="Place Location"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                    />


                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 2
                }}>

                    <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor="#961B92"
                        style={{ paddingHorizontal: 10 }}
                    />

                </View>

                <View style={{
                    alignItems: "flex-start",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 0
                }}>

                    <TextInput
                        multiline
                        numberOfLines={6}
                        placeholder="Additional Notes"
                        placeholderTextColor="#961B92"
                        style={{
                            paddingHorizontal: 10,
                            paddingTop: 10,
                            textAlignVertical: "top" }}
                    />

                </View>


                <View>
                    <TouchableOpacity
                        style={styles.submitBtn}>
                        <Text
                            onPress={() => navigate('Login')}

                            style={styles.submitBtnText}>Submit</Text>
                    </TouchableOpacity>
                </View>


                </View>
            </KeyboardAwareScrollView>
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
    submitBtnText: {
        color: "white",
        fontFamily: "SemiBold",
        textAlign: "center"
    },
    submitBtn: {
        marginVertical: 20,
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "35%"
    }
});