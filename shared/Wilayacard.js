import React, { useState } from 'react';
import { View,StyleSheet, Text, Image,ImageBackground, Pressable, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Card() {
 
  return (
    <View className="flex  w-80 h-72  ">
      <StatusBar style='dark' />
     
      <ImageBackground
        source={require('../assets/alger-blur.jpg')}
        resizeMode="strech"
        style={styles.background}
        className='flex-1 justify-center'
      >
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 25, // Apply your desired borderRadius
    overflow: 'hidden',
     // This is important to clip the image to the borderRadius
    // Other styles for the background container
  },
});