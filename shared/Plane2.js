import React, { useEffect } from 'react';
import { StyleSheet, View, Image,Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
} from 'react-native-reanimated';

const SIZE = Dimensions.get("window").width;
export default function Plane() {
  
  const show= useSharedValue(1);
  const movement=useSharedValue(125);
  const animated = useAnimatedStyle(()=>{
    return{
      opacity: show.value,
      transform:[{translateX: movement.value}]
    };
  },[]);
  useEffect(()=>{
    movement.value=withRepeat(
    withDelay(8000,
    withSequence(
      withTiming(-SIZE-125,{duration:8000}),
      withTiming(100,{duration:1}),

    )),
    -1,
    true
    );

  },[]);
 
  return (
    <View  className="flex-1 items-end justify-start self-end justify-self-start">
      <Animated.View style={animated}>
        <Image source={require("../assets/boat.png")} className='w-20 h-20' />
      </Animated.View>
    </View>
  );
}

