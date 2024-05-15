import React from "react";
import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Flatbutton1(){
    const navigation = useNavigation(); 

    return(
        <Pressable onPress={()=>{
            navigation.navigate("Signup")
        }} className="rounded-full bg-white border-sky-500 border-4 w-36 h-14 items-center justify-center active:bg-cyan-400 mx-2.5">
            <Text className="text-xl text-center text-cyan-500 font-bold">
               Sign up
            </Text>
        </Pressable>
    )
}
