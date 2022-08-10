import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
const CustomInputWithIcon =({value,setValue,placeholder,secureTextEntry,icon})=>{
    return(
        <View style={styles.container}>
            <AntDesign name={icon} size={24} color="black" style={styles.icon}/>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
export default CustomInputWithIcon;

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height: 40,
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#e8e8e8',
        borderRadius: 5,
    },
    input:{
        width:'90%',
        height:'100%',   
        paddingHorizontal:5,
       
    },
    icon:{
        width:'10%',
        marginHorizontal:10,
    }
})