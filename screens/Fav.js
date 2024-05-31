import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function WelcomeScreen() {
  


  return (
    <View className="flex-1 bg-white ">
     <StatusBar style='dark'/>
      <View>
        <View  className="mt-8 flex-row justify-center h-16  w-fit rounded bg-red-500  ">
        <Text className="font-bold text-white text-2xl mt-3">Your Collections</Text>
        </View>
        <View className=" ">
        <Image source={require('../assets/favicon.png')} className="mt-44 ml-7" />
        <Text className="mb-2 font-semibold text-center text-lg">No Favorites yet</Text>
        <Text className="px-5 text-slate-500 text-center">Keep track of the listing you'r interested in by clicking the Heart Icon</Text>
        </View>
      </View>
    </View>
  );
}
