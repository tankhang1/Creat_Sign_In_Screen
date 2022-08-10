import React from "react";
import { View,Image,StyleSheet, useWindowDimensions,ScrollView } from "react-native";
import Logo from '../../../assets/Logo_1.png'
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomButtonWithIcon from "../../components/CustomButton/CustomButtonWithIcon";
import {useNavigation} from '@react-navigation/native'
import Navigation from "../../Navigation";
const SignInScreens =()=>{
    const [username,setUsername]= React.useState('');
    const [password,setPassword]= React.useState('');
    const navigation = useNavigation();
    const onSignInPressed=()=>{
        console.warn("sign in");
        navigation.navigate('Home')
    }
    const onForgotPasswordPressed=()=>{
        console.warn("onForgotPasswordPressed");
        navigation.navigate("Forgotpassword");
    }
    const onSignUpPressed=()=>{
        console.warn("onSignUpPressed");
        navigation.navigate("SignUp")

    }
    const onSignInFacebook=()=>{
        console.warn("onSignInFacebook");
        
    }
    const onSignInGoogle=()=>{
        console.warn("onSignInGoogle");
        
    }
    const onSignInApple=()=>{
        console.warn("onSignInApple");
        
    }
    const {height}= useWindowDimensions();
    return(
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height*0.3}]} 
                resizeMode="contain"
            />
            <ScrollView style={styles.btn_container} showsVerticalScrollIndicator={false}>
            <CustomInput placeholder="User name" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton onPress={onSignInPressed} text="Sign In" type="first"/>
            <CustomButton onPress={onForgotPasswordPressed} text="Forgot Password" type="second"/>
            <CustomButtonWithIcon onPress={onSignInFacebook} text="Sign In with Facebook" type="third" nameicon="facebook"/>
            <CustomButtonWithIcon onPress={onSignInGoogle} text="Sign In with Google" type="fourth" nameicon="google"/>
            <CustomButtonWithIcon onPress={onSignInApple} text="Sign In with Apple" type="fifth" nameicon="apple"/>
            <CustomButton onPress={onSignUpPressed} text="Don't have an account? Create one" type="second"/>
            </ScrollView>
        </View>
    )
}
export default SignInScreens;
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
    }
})