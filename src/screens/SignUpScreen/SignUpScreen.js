import React from "react";
import { View,Image,StyleSheet, useWindowDimensions,ScrollView,Text } from "react-native";
import Logo from '../../../assets/Logo_1.png'
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomButtonWithIcon from "../../components/CustomButton/CustomButtonWithIcon";
import CustomInputWithIcon from "../../components/CustomInput/CustomInputWithIcon";
import {useNavigation} from '@react-navigation/native'
const SignUpScreens =()=>{
    const [username,setUsername]= React.useState('');
    const [password,setPassword]= React.useState('');
    const [email,setEmail]= React.useState('');
    const [passwordrepeat,setPasswordrepeat]= React.useState('');
    const navigation= useNavigation();
    const onSignInPressed=()=>{
        console.warn("sign in");
        navigation.navigate("SignIn")
    }
    const onForgotPasswordPressed=()=>{
        console.warn("onForgotPasswordPressed");
        navigation.navigate("Forgotpassword");
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
    const onSignUpPressed=()=>{
        console.warn("onSignUpPressed")
    }
    const onRegister=()=>{
        console.warn("onRegister");
        navigation.navigate("ConfirmEmail")
    }
    const {height}= useWindowDimensions();
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <ScrollView style={styles.btn_container} showsVerticalScrollIndicator={false}>
            <CustomInputWithIcon placeholder="User name" value={username} setValue={setUsername} secureTextEntry={false} icon="user"/>
            <CustomInputWithIcon placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false} icon="mail"/>
            <CustomInputWithIcon placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} icon="lock"/>
            <CustomInputWithIcon placeholder="Password Repeat" value={passwordrepeat} setValue={setPasswordrepeat} secureTextEntry={true} icon="lock"/>
            <CustomButton onPress={onRegister} text="Register" type="first"/>
            <Text style={styles.text}>By registering, you confirm that you accept our<Text style={{color:'red'}}> Terms of Use </Text> and<Text style={{color:'red'}}> Privacy Policy</Text></Text>
            <CustomButton onPress={onForgotPasswordPressed} text="Forgot Password" type="second"/>
            <CustomButtonWithIcon onPress={onSignInFacebook} text="Sign In with Facebook" type="third" nameicon="facebook"/>
            <CustomButtonWithIcon onPress={onSignInGoogle} text="Sign In with Google" type="fourth" nameicon="google"/>
            <CustomButtonWithIcon onPress={onSignInApple} text="Sign In with Apple" type="fifth" nameicon="apple"/>
            <CustomButton onPress={onSignInPressed} text="Have an account? Sign In" type="second"/>
            </ScrollView>
        </View>
    )
}
export default SignUpScreens;
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