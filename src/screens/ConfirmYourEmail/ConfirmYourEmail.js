import React from "react";
import { View,Image,StyleSheet, useWindowDimensions,ScrollView,Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useNavigation } from "@react-navigation/native";
const ConfirmYourEmail =()=>{
    const [code,setCode]= React.useState('');
    const navigation=useNavigation();
    const onConfirm=()=>{
        console.warn("onConfirm");
    }
    const onSignIn=()=>{
        console.warn("on Sign In");
        navigation.navigate("SignIn");
    }
    const OnResendCode=()=>{
        console.warn("on Resend Code");
    }
    const {height}= useWindowDimensions();
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>
            <ScrollView style={styles.btn_container} showsVerticalScrollIndicator={false}>
            <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} secureTextEntry={false}/>
            <CustomButton onPress={onConfirm} text="Confirm" type="first"/>
            <CustomButton onPress={OnResendCode} text="Resend Code Again" type="second"/>
            <CustomButton text="Back to Sign In" onPress={onSignIn} type="second"/>
            </ScrollView>
        </View>
    )
}
export default ConfirmYourEmail;
const styles= StyleSheet.create({
    root:{
        width:'100%',
        alignItems:'center',
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
        margin:10,
    }
})