import React from 'react';
import { Pressable, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Wilayacard from '../shared/Wilayacard'
import Wilayacard1 from '../shared/Wilayacard1'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const data = [{
  image: require('../assets/welcome.webp'),
  title: 'Maqam Shahid',
},]


export default function Card() {
  
  const navigation = useNavigation(); 

  return (
    <LinearGradient colors={["#008ff0", "#c3f6cb", "#0080f0"]}className="flex justify-center h-full">
     <StatusBar style='dark'/>
      <View className='ml-5 mb-6'>
     <View className=" flex ">
      <Pressable   style={({pressed}) =>{ 
        return{opacity : pressed ? 0.8 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Private",{ wilaya: '16' })
       }}>
      <Wilayacard/>
      </Pressable>
     </View>
     <View className="mt-5 flex ">
     <Pressable   style={({pressed}) =>{ 
        return{opacity : pressed ? 0.8 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Private",{ wilaya: '06' })
       }}>
      <Wilayacard1 />
      </Pressable>
     </View>
     </View>
   
    </LinearGradient>
  );
}
