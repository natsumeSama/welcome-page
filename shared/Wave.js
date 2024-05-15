import React, { useEffect } from "react";
import { StyleSheet,View, Dimensions ,Image} from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { mix } from "react-native-redash";
import Plane from "./Plane";


const SIZE = Dimensions.get("window").width;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const Wave = () => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 3000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, [progress]);
  const data1 = useDerivedValue(() => {
    const m = mix.bind(null, progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5),
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) },
    };
  });
  const data2 = useDerivedValue(() => {
    const m = mix.bind(null, 1 - progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5),
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) },
    };
  });
  const path1 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data1.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  const path2 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data2.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
    };
  });
  return (
    <View className="bg-sky-300">
    <Plane/>
    
    <Svg
      width={SIZE}
      height={SIZE}
      viewBox="0 0 1 1"
    >
      
      <AnimatedPath fill="#86b4ff" animatedProps={path2} />
      <AnimatedPath
        fill="#3884ff"
        animatedProps={path1}
      />
      
    </Svg>
    
  </View>
);
};

const styles = StyleSheet.create({
backgroundImage: {
  position: 'absolute',
  top: -20,
  left: 0,
  width: '100%',
  height: '100%',
  resizeMode: 'cover', // ou 'contain' selon vos besoins
},
});
export default Wave;