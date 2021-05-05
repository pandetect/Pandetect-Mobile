import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Navbar, Alert } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Main extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAwareScrollView style={{ backgroundColor: "#FFF", height: "100%" }}>
            <View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: "center",
                    marginHorizontal: 40,
                    marginTop: 55,
                    paddingVertical: 2
                }}>
                    <Icon name="back" color="#961B92" size={24}
                        onPress={() => navigate('Main')} />
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
                                 )}
                        />
                </View>

                <Text
                    style={{
                        fontFamily: "SemiBold",
                        marginHorizontal: 40,
                        textAlign: 'center',
                        marginTop: 30,
                        opacity: 0.4
                    }}
                >
                    You can report compliance conflicts or make suggestions.
                </Text>

                <View style={{
                    alignItems: "flex-start",
                    marginHorizontal: 40,
                    borderWidth: 2,
                    marginTop: 25,
                    paddingHorizontal: 10,
                    borderColor: "#961B92",
                    borderRadius: 23,
                    paddingVertical: 0
                }}>

                    <TextInput
                        placeholder="Subject"
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
                        numberOfLines={20}
                        placeholder="Type Here"
                        placeholderTextColor="#961B92"
                        style={{
                            paddingHorizontal: 10,
                            paddingTop: 10,
                            textAlignVertical: "top"
                        }}
                    />

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.submitBtn}>
                        <Text
                            onPress={() => navigate('Main')}

                            style={styles.topBtnText}>Submit</Text>
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
    submitBtn: {
        marginVertical: 20,
        alignSelf: "center",
        backgroundColor: "#961B92",
        borderRadius: 10,
        padding: 10,
        width: "25%"
    }

});