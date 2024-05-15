import React, { useEffect } from 'react';
import { StyleSheet, View, Image,Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const SIZE = Dimensions.get("window").width;
export default function Plane() {
  
  const show= useSharedValue(1);
  const movement=useSharedValue(-100);
  const animated = useAnimatedStyle(()=>{
    return{
      opacity: show.value,
      transform:[{translateX: movement.value}]
    };
  },[]);

  useEffect(()=>{
    movement.value=withRepeat(
    withSequence(
      withTiming(SIZE+100,{duration:8000}),
      withDelay(8000,withTiming(-100,{duration:1})),

    ),
    -1,
    true
    );

  },[]);
  return (
    <View  className="flex-1 items-start justify-center bg-black mt-10">
      <Animated.View style={animated}>
        <Image source={require("../assets/plane.webp")} className='w-20 h-20' />
      </Animated.View>
    </View>
  );
}

