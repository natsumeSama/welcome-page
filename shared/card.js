import React, { useState } from 'react';
import { View,StyleSheet, Text, Image,ImageBackground, Pressable, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function Card() {
  const [liked, setLiked] = useState(false);
  const scaleValue = useState(new Animated.Value(1))[0];

  const handlePress = () => {
    setLiked(!liked);
    Animated.spring(scaleValue, {
      toValue: 1.2,
      friction: 7,
      useNativeDriver: true
    }).start(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 7,
        useNativeDriver: true
      }).start();
    });
  };

  return (
    <View className="flex w-72 h-96  ">
      <StatusBar style='dark' />
     
      <ImageBackground
        source={require('../assets/alger.jpg')}
        resizeMode="strech"
        style={styles.background}
        
      >
        <View className="justify-end flex-row m-2">
          <Pressable onPress={handlePress}>
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={50}
                color={liked ? 'red' : 'white'}
              />
            </Animated.View>
          </Pressable>
        </View>

        <View className=" w-64 h-24 blur-sm rounded-2xl ml-4 shadow-lg mt-52"   style={{
            backgroundColor: 'rgba(10, 10,10, 0.5)',
            backdropFilter: 'blur(20px)',
          }}>
            <View className="ml-5 my-2">
             <Text className="text-2xl text-slate-100 italic font-bold">Maqam Shahid</Text>
            </View>
            <View className="flex-row -mt-2">
             <Image source={require("../assets/local.png")}  className="w-10 h-10 "/>
             <Text className=" text-slate-300 italic mt-3">Algiers , Alger</Text>
             <Image source={require("../assets/star.png")}  className="w-7 h-7 mt-1 ml-14"/>
             <Text className=" text-slate-400 italic mt-2 ml-1">4.5</Text>
            </View>

        </View>
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
    overflow: 'hidden', // This is important to clip the image to the borderRadius
    // Other styles for the background container
  },
});