import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { suppplan } from '../fetch/Auth';

export default function Plancard({id, email, name, date, time }) {
  const navigation = useNavigation(); 
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handlePress = () => {
    // Simulate successful plan addition (replace with actual logic)
    setShowModal(true);
  };

  const modalContent = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
      <View style={{ margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 6, height: 6 }, shadowOpacity: 0.6, shadowRadius: 4, elevation: 5 }}>
        <View>
          <Text className='p-1 text-lg font-bold'>Are you sure you want to delete this plan?</Text>
        </View>
        <View className='flex-row mt-1'>
          <Pressable onPress={() => {
            suppplan(email,id);
            setShowModal(false);
          }}>
            <View className='flex-row bg-green-600 mx-5 rounded-lg'>
              <Text className='text-lg p-2 font-semibold text-white'>Yes</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setShowModal(false)}>
            <View className='flex-row bg-red-600 mx-5 rounded-lg'>
              <Text className='text-lg p-2 font-semibold text-white'>No</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <View className='flex-1 mt-2 w-80 rounded-2xl bg-white shadow-xl'>
        <View className='flex-row justify-end'>
          <Pressable onPress={handlePress}>
            <Image source={require("../assets/sup.jpg")} className='h-9 w-9 m-1'/>
          </Pressable>
        </View>
        <View className='flex-row justify-center p-1 -mt-10'>
          <Text className='text-base font-bold italic'>{date}</Text>
        </View>

        <Pressable>
          <View className='flex-row p-1 bg-slate-300 m-1 rounded-lg'>
            <Text className='text-normal py-2 px-1 font-semibold italic'>{time}:</Text>
            <Text className='text-normal px-1 py-2 font-medium italic text-blue-700'>{name}</Text>
          </View>
        </Pressable>
      </View>

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
