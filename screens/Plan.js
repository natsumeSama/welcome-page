import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';


const {width,height}=Dimensions.get('screen');

const data=[
  'https://i.imgur.com/JgczpVi.jpeg',
  'https://i.imgur.com/X3BVOLo.jpeg',
  'https://i.imgur.com/25zhGbg.jpeg',
  'https://i.imgur.com/Vwzfz0A.jpeg'
];

const imageW= width * 0.7;
const imageH = height * 1.54 ;  
export default function WelcomeScreen() {
  const navigation = useNavigation(); 


  return (
    <View className="flex-1  ">
     <StatusBar style='dark'/>

     <Text>plan</Text>
   
    </View>
  );
}
