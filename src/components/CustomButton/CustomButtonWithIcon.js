import React from "react";
import {View, Text,StyleSheet, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomButtonWithIcon =({onPress,text,type,nameicon})=>{
    let backcolor=styles.container_third;
    let textcolor= styles.text_third;
    if(type==="third")
        {
            backcolor=styles.container_third;
            textcolor=styles.text_third;
        }
        else
            if (type==="fourth")
            {
                backcolor=styles.container_fourth;
                textcolor=styles.text_fourth;
            }   
            else
                if(type==="fifth")
                {
                    backcolor=styles.container_fifth;
                    textcolor=styles.text_fifth;
                }
    return(
        <Pressable style={[styles.container,backcolor]} onPress={onPress}>
            <FontAwesome name={nameicon} style={[styles.icon , textcolor]} size={24}/>
            <Text style={[styles.text, textcolor]}>{text}</Text>
        </Pressable>
    )
}
export default CustomButtonWithIcon;
const styles= StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        alignItems:'center',
        borderRadius:5,
        marginVertical:10,
        flexDirection:'row',
    },
    icon:{
        width:'30%',
    }, 
    container_third:{
        backgroundColor:'#E7EAF4',
    },
    container_fourth:{
        backgroundColor:'#FAE9EA',
    },
    container_fifth:{
        backgroundColor:'#e3e3e3',
    },
    text_fifth:{
        color:'#363636',
    },
    text_fourth:{
        color:'#DD4D44',
    },
    text_third:{
        color:'#4765A9',
    },
    text:{
        fontWeight:'bold',
    }
})