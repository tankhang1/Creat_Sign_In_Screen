import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreens from "../screens/SignInScreen/SignInScreen";
import SignUpScreens from "../screens/SignUpScreen/SignUpScreen";
import ConfirmYourEmail from "../screens/ConfirmYourEmail/ConfirmYourEmail";
import ForgotPassWordScreen from "../screens/ForgotPassWordScreen/ForgotPassWordScreen";
import NewpasswordScreen from "../screens/NewpasswordScreen/NewpasswordScreen";
import index from '../screens/HomeScreen/index'
const Stack = createNativeStackNavigator();
const Navigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="SignIn" component={SignInScreens}/>
                <Stack.Screen name="SignUp" component={SignUpScreens}/>
                <Stack.Screen name="ConfirmEmail" component={ConfirmYourEmail}/>
                <Stack.Screen name="Forgotpassword" component={ForgotPassWordScreen}/>
                <Stack.Screen name="Newpassword" component={NewpasswordScreen}/>
                <Stack.Screen name="Home" component={index}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;