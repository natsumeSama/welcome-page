import React, { useEffect, useRef } from 'react';
import {useRoute} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../colors/Colors';
import Feed from '../screens/Feed';
import Fav from '../screens/Fav';
import Plan from '../screens/Plan';
import Places from '../screens/Places'; // Import the new screen component
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } } );
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1.7 : 0.95 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 21 }]}
        />
        <View style={[styles.btn, { backgroundColor: focused ? null : null }]}>
          <MaterialCommunityIcons name={item.icon} size={25} color={focused ? Colors.white : Colors.dark} />
          <Animatable.View ref={textViewRef}>
            {focused && <Text style={{ color: Colors.white, paddingHorizontal: 8 }}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TabArr = [
  { route: 'Feed', label: 'Home', icon: 'home', component: Feed, color: Colors.green, alphaClr: Colors.primaryAlpha },
  { route: 'Fav', label: 'Favorites', icon: 'heart', component: Fav, color: Colors.red, alphaClr: Colors.redAlpha },
  { route: 'Places', label: 'Places', icon: 'map-marker', component: Places, color: Colors.blue, alphaClr: Colors.blueAlpha }, // Added the new item
  { route: 'Plan', label: 'Plan', icon: 'calendar', component: Plan, color: Colors.yellow, alphaClr: Colors.greenAlpha },
];

export default function HomeTab() {
  const route = useRoute();
    const { email,userName } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 17,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              initialParams={{ email, userName }}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
  },
});
