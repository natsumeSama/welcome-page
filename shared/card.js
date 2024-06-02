import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, Pressable, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { addfav,suppfav } from '../fetch/Auth';

export default function Card({ image, title, location, rating, fav, email, id }) {
  const [liked, setLiked] = useState(fav);
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
    if(!liked){
      addfav(email,id)
    }else{
      suppfav(email,id)
    }


  };

  return (
    <View className="flex w-80 h-96">
      <StatusBar style='dark' />
     
      <ImageBackground
        source={image}
        resizeMode="stretch"
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

        <View className=" flex w-64 h-24 blur-sm rounded-2xl ml-4 shadow-lg mt-52" style={{
          backgroundColor: 'rgba(10, 10, 10, 0.5)',
          backdropFilter: 'blur(20px)',
        }}>
          <View className="ml-5 basis-1/2">
            <Text className=" text-slate-100 italic font-bold text-lg">{title}</Text>
          </View>
          <View className="flex-row -mt-2 items-center basis-1/2">
            <Image source={require("../assets/local.png")} className="w-10 h-10 basis-1/6" />
            <Text className="text-slate-300 italic basis-2/6">{location}</Text>
            <Image source={require("../assets/star.png")} className="w-10 h-10 basis-1/6" />
            <Text className="text-slate-400 italic basis-2/6">{rating}</Text>
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
