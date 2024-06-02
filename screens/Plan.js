import React from 'react';
import {  View, FlatList,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Plancard from '../shared/Plancard';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';

const data = [
  {
    id: '1',
    image: require('../assets/alger.jpg'),
    title: 'Maqam Shahi',
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

export default function WelcomeScreen() {
  const navigation = useNavigation(); 


    const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handlePress = () => {
    // Simulate successful plan addition (replace with actual logic)
    setShowModal(true);
  };


  return (
    <View  className="flex-1 ">
     <StatusBar style='dark'/>
     <View  className="mt-8 flex-row justify-center h-16  w-fit rounded bg-yellow-500  ">
        <Text className="font-bold text-white text-2xl mt-3">Your Collections</Text>
        </View>
     <View className=' flex-1  m-1  mb-20 rounded-lg'>
     <FlatList
  data={data}
  renderItem={({ item }) => 
  <View  className="mx-auto ">
   
          <Plancard {...item}   className=" " />

        </View>
  }
  keyExtractor={item => item.id}
/>
     </View>
    </View>
  );
}