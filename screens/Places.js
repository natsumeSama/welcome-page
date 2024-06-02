import React, { useState,useEffect } from 'react';
import { Pressable, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Wilayacard from '../shared/Wilayacard'
import Wilayacard1 from '../shared/Wilayacard1'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { user } from '../fetch/Auth';

const data = [{
  image: require('../assets/welcome.webp'),
  title: 'Maqam Shahid',
},]


export default function Card() {
  const route = useRoute();
  const { email,userName } = route.params;
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#008ff0", "#c3f6cb", "#0080f0"]}className="flex justify-center h-full">
     <StatusBar style='dark'/>
      <View className='mb-6 items-center'>
     <View className=" flex ">
      <Pressable   style={({pressed}) =>{ 
        return{opacity : pressed ? 0.8 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Private",{email:email,userName:userName,wilaya: '16' })
       }}>
      <Wilayacard/>
      </Pressable>
     </View>
     <View className="mt-5 flex ">
     <Pressable   style={({pressed}) =>{ 
        return{opacity : pressed ? 0.8 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Private",{ email:email,userName:userName, wilaya: '06' })
       }}>
      <Wilayacard1 />
      </Pressable>
     </View>
     </View>
   
    </LinearGradient>
  );
}
