import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import { useNavigation ,useRoute} from '@react-navigation/native';

export default function WelcomeScreen() {
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handlePress = () => {
    // Simulate successful plan addition (replace with actual logic)
    setShowModal(true);
  };
  const route = useRoute();
  const { item } = route.params;
  const i = item;

  const modalContent = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
      <View style={{ margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}>
       <Text className='text-2xl font-bold '>Add to plan</Text>

       <View className=' bg-black/10 p-2 rounded-2xl w-full mt-3'>
       <TextInput placeholder="         DD/MM/YYYY           " placeholderTextColor={'gray'} />
       </View>

       <View className=' bg-black/10 p-2 rounded-2xl w-full mt-3'>
       <TextInput placeholder="                HH/MM               " placeholderTextColor={'gray'} />
       </View>

       <Pressable
          style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={() => {
            setShowModal(false);
            
          }}
        >
          <View className="flex-row justify-center h-9 rounded-full shadow-2xl shadow-black bg-slate-900 w-52 mt-5">
            <Text className="font-bold text-xl text-white mt-1">GO</Text>
            <Image source={require('../assets/avion.png')} className="w-7 h-7 mt-1 ml-2" />
          </View>
        </Pressable>




      </View>
    </View>
  );

  return (
    <View className="flex-1 mt-7 bg-slate-200">
      <StatusBar style='dark' />

      <Image source={{uri: i.image}} className="w-full h-64 rounded-2xl" />

      <ScrollView showsVerticalScrollIndicator={false} className="m-1  h-screen rounded-3xl">
        {/* ... other content ... */}
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
         
         <Text className='text-xl text-gray-600 dark:text-gray-200 italic'>{i.description}</Text>
      </View>
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
         <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Name :</Text>
         <Text className='text-xl text-gray-600 dark:text-gray-200 italic'> {i.name}</Text>
      </View>
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
         <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Address :</Text>
         <Text className='text-xl text-blue-500 dark:text-gray-200 italic'> {i.address}</Text>
      </View>
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
         <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Phonenumber :</Text>
         <Text className='text-xl text-blue-500 dark:text-gray-200 italic'> {i.phoneNumber}</Text>
      </View>
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
         <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Opening hours :</Text>
         <Text className='text-xl text-gray-600 dark:text-gray-200 italic'> {i.openingHours}</Text>
      </View>
      <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
      <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Cuisine types :</Text>
      <Text  className='text-xl text-gray-600 text-underline italic'> {i.cuisineType}</Text>
    </View>

    <View className='flex-row container mx-auto bg-slate-200 m-2 p-3 rounded-3xl shadow-2xl  shadow-black '>
      <Text className="text-xl font-bold text-gray-800 dark:text-white italic">Special Services :</Text>
      <Text  className='text-xl text-gray-600 text-underline italic'> {i.specialServices}</Text>
    </View>

        <Pressable
          style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={handlePress} // Call handlePress on button press
        >
          <View className="flex-row justify-center h-14 rounded-full shadow-2xl shadow-black bg-slate-900 w-72 ml-8 mb-4">
            <Text className="font-bold text-xl text-white mt-3">Add to plan</Text>
            <Image source={require('../assets/avion.png')} className="w-7 h-7 mt-3 ml-2" />
          </View>
        </Pressable>
      </ScrollView>

      <Modal // Render modal conditionally
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        {modalContent}
      </Modal>
    </View>
  );
}