import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreens from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmYourEmail from './src/screens/ConfirmYourEmail/ConfirmYourEmail';
import ForgotPassWordScreen from './src/screens/ForgotPassWordScreen/ForgotPassWordScreen';
import NewpasswordScreen from './src/screens/NewpasswordScreen/NewpasswordScreen';
import Navigation from './src/Navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
