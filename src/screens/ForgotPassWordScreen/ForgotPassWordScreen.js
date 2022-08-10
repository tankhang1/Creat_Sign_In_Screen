import React from "react";
import { View,Image,StyleSheet, useWindowDimensions,ScrollView,Text } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";
const ForgotPassWordScreen =()=>{
    const [username,setUsername]= React.useState('');
    const navigation = useNavigation();
    const onSend=()=>{
        console.warn("onSend");
        navigation.navigate("ConfirmEmail")
    }
    const onSignIn=()=>{
        console.warn("on Sign In");
        navigation.goBack();
    }
    const OnResendCode=()=>{
        console.warn("on Resend Code");
    }
    const {height}= useWindowDimensions();
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <Text styles={styles.title}>User name *</Text>
            <ScrollView style={styles.btn_container} showsVerticalScrollIndicator={false}>
            <CustomInput placeholder="Enter your name" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomButton onPress={onSend} text="SEND" type="first"/>
            <CustomButton text="Back to Sign In" onPress={onSignIn} type="second"/>
            </ScrollView>
        </View>
    )
}
export default ForgotPassWordScreen;
const styles= StyleSheet.create({
    root:{
        width:'100%',
        padding:20,
    },
    logo:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
    },
    btn_container:{
        width:'100%',
    },
    title:{
        marginVertical:40,
        fontSize:24,
        fontWeight:'bold',
        color:'#051C68',
    }
})