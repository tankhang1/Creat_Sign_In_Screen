import React from "react";
import { View,Image,StyleSheet, useWindowDimensions,ScrollView,Text } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../ForgotPassWordScreen/CustomButton";
import { useNavigation } from "@react-navigation/native";
import SignInScreens from "../SignInScreen/SignInScreen";
const NewpasswordScreen =()=>{
    const [code,setCode]= React.useState('');
    const [password,setPassword]=React.useState('');
    const navigation= useNavigation();
    const onSubmit=()=>{
        console.warn("onSubmit");
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
            <Text style={styles.title}>Reset your password</Text>
            <ScrollView style={styles.btn_container} showsVerticalScrollIndicator={false}>
            <Text styles={styles.title}>User name *</Text>
            <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} secureTextEntry={false}/>
            <Text styles={styles.title}>Password *</Text>
            <CustomInput placeholder="Enter your confirmation code" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton onPress={onSubmit} text="Submit" type="first"/>
            <CustomButton text="Back to Sign In" onPress={onSignIn} type="second"/>
            </ScrollView>
        </View>
    )
}
export default NewpasswordScreen;
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