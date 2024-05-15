import React from "react";
import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Flatbutton1(){
    const navigation = useNavigation(); 

    return(
        <Pressable onPress={()=>{
            navigation.navigate("Login")
        }} className="rounded-full bg-sky-500 border-4 border-white w-36 h-14 items-center justify-center active:bg-sky-400 mx-2.5">
            <Text className="text-xl text-center text-white font-bold">
               Log In
            </Text>
        </Pressable>
    )
}