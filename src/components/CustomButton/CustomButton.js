import React from "react";
import {View, Text,StyleSheet, Pressable} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
const CustomButton =({onPress,text,type})=>{
   let backcolor=styles.container_first;
   let textcolor= styles.text_first;
   if (type==="second")
    {
        backcolor= styles.container_second;
        textcolor=styles.text_second;
    }
    return(
        <Pressable style={[styles.container,backcolor]} onPress={onPress}>
            <Text style={[styles.text, textcolor]}>{text}</Text>
        </Pressable>
    )
}
export default CustomButton;

const styles=StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        alignItems:'center',
        borderRadius:5,
        marginVertical:10,
    },
    container_first:{
        backgroundColor:'#3B71F3',
    },
    container_second:{
        backgroundColor:'white',
    },
    text_second:{
        color:'black',
    },
    text_first:{
        color:'white',
    },
    text:{
        fontWeight:'bold',
    }
})