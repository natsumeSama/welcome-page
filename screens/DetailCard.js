import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';



export default function WelcomeScreen() {
  const [showModal, setShowModal] = React.useState(false);

  const handlePress = () => {
    setShowModal(true);
  };


  return (
    <View className="flex-1 mt-7">
     <StatusBar style='dark'/> 
   
     <Image source={require('../assets/alger.jpg')} className="w-full h-64 rounded-2xl"/>

     <ScrollView style={{height:2000}} className="m-2">
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>
    <Text>loredfvvvvrrrrrrrrrrrrrrgfvvvvvvvrgggggggggggggggggggggggggg</Text>

     </ScrollView>
     
     <Pressable style={({pressed}) =>{ 
          return{opacity : pressed ? 0.9 : 1}
        }}
        onPress={()=>{

        }}>
     <View className="border flex-row justify-center h-14 rounded-full shadow-2xl shadow-black  bg-gray-900 w-72 ml-8 mb-7">
       <Text className="font-bold text-xl text-white mt-2">Contact</Text>
       <Image source={require('../assets/avion.png')} className="w-7 h-7 mt-2 ml-2"/>
     </View>
     </Pressable>
      
    </View>
  );
}
