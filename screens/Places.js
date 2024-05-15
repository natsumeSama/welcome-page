import React from 'react';
import { ImageBackground, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Card() {
  


  return (
    <View className="flex-1  ">
     <StatusBar style='dark'/>

     <View className='border w-72 h-96 rounded-3xl'>
       <ImageBackground
          source={require('../assets/alger.jpg')} 
       >

       </ImageBackground>
     </View>
    
   
    </View>
  );
}
