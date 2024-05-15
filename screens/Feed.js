import React from 'react';
import { StyleSheet,FlatList, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../shared/card';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const data = [
  {
    id: '1',
    image: require('../assets/alger.jpg'),
    title: 'Maqam Shahid',
    location: 'Algiers, Alger',
    rating: 4.5,
    liked: false,
  },
  {
    id: '2',
    image: require('../assets/alger.jpg'),
    title: 'Card 2 Title',
    location: 'Location 2',
    rating: 4.7,
    liked: false,
  },
  {
    id: '3',
    image: require('../assets/alger.jpg'),
    title: 'Card 3 Title',
    location: 'Location 3',
    rating: 4.2,
    liked: false,
  },
];

export default function Feed() {
  const navigation = useNavigation(); 


  return (
    
    <LinearGradient colors={["#00ACC1", "#00AC00", "#FFFFFF"]} className="flex-1 rounded-xl">
     <StatusBar style='dark'/>

    <View >
     <View className="w-fit mt-12 flex-row justify-between">
       <View className=" ml-3">
         <Text className="text-white text-3xl font-bold italic">Hi, Username</Text>
         <Text className="text-slate-200 text-base ml-3">Explore Algeria Now </Text>
       </View>
       <View className="mt-10 mr-3">
       
       <Pressable className="" style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Profile")
       }}>
       
        <Image source={require("../assets/pfp.png")} className=" rounded-full w-16 h-16 ml-24 -mt-10"/>
       </Pressable>
      

       </View>
     </View>

      
      <View className=" bg-slate-100   w-fit h-14 rounded-3xl mx-3 mt-4 flex-row">
         <TextInput placeholder='Search Here' className=" ml-2 w-72"/>
         <View className="border h-10 mt-1"></View>
         <Pressable  style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}
        
       >
          <Image source={require("../assets/chercher.png")} className="h-10 w-10 m-1 ml-2"/>
         </Pressable>
      </View>
      </View>

       <View 
          className=' flex-auto   mt-5 h-full w-full bg-teal-100'
       >
        <View className="">
        <FlatList
  horizontal={true}
  data={data}
  renderItem={({ item }) => 
  <View className="mt-20 mx-5">
    <Pressable style={({pressed}) =>{ 
        return{opacity : pressed ? 0.8 : 1}
       }}
       onPress={()=>{
        navigation.navigate("Detail")
       }}>
          <Card {...item}   className="shadow-2xl shadow-black " />

          </Pressable>
        </View>
  }
  keyExtractor={item => item.id}
/>
</View>

</View>
       



    </LinearGradient>
  );
}


