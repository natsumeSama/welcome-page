import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Wave from '../shared/Wave';
import Flatbutton from '../shared/bouton';
import Flatbutton1 from '../shared/bouton1';
import Plane2 from '../shared/Plane2';
import { LogIn } from "../fetch/Auth";


export default function WelcomeScreen() {
  const navigation = useNavigation(); 
  

  return (
    <View className="flex-1 ">
      <View className="basis-2/5">
      <Wave />
      </View>
      
      
      <LinearGradient style={styles.container} colors={["#3884ff", "#86b4ff"]} start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
        <Plane2/>
        <Text className="font-serif text-2xl font-bold text-white" style={styles.Text}> Welcome to Algeria Discover!!</Text>
        <Text className="font-serif text-base text-slate-100 text-center mx-5" style={styles.T}>Welcome to your dream journey with Algeria Discover, exploring the beauty of Algeria!</Text> 
        
        <View style={styles.cont}>
          <Flatbutton  />
          <Flatbutton1/>
        </View>
        
        <Pressable className="w-32" 
        onPress={() =>{
          LogIn("Guest@guest.com","Guest")
          navigation.navigate("Home",{email:"Guest@guest.com",userName : "Guest" })
        }
        }>
          <Text style={styles.guest}>Continue as a guest ?</Text>
        </Pressable>
        
        <View style={styles.cont1}>
          <Pressable style={({pressed}) =>{ 
            return{opacity : pressed ? 0.4 : 1}
          }}>
            <Image source={require("../assets/google.png")} style={styles.im2} />
          </Pressable>

          <Pressable style={({pressed}) =>{ 
            return{opacity : pressed ? 0.4 : 1}
          }}>
            <Image source={require("../assets/facebook.png")} style={styles.im1} />
          </Pressable>

          <Pressable style={({pressed}) =>{ 
            return{opacity : pressed ? 0.4 : 1}
          }}>
            <Image source={require("../assets/tweeter.png")} style={styles.im3} />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    top:-50,
    flexDirection : 'row' , 
    justifyContent : 'space-evenly'
  },
  cont1: {
    top:-30,
    flexDirection : 'row' , 
    justifyContent : 'space-between',
  },
  Text: {
    top:-100,
    fontFamily: 'serif',
  },
  T: {
    top: -80,
    fontFamily: 'serif',
  },
  guest:{
    top:-50,
    color : '#5d5d5b',
    fontSize : 14,
    textAlign: 'center',
    marginVertical: 10
  },
  im1:{
    width : 55,
    height:55,
    borderRadius:50,
    left : 0,
  },
  im2:{
    width : 55,
    height:55,
    borderRadius:50,
    left: -20
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Assurez-vous que l'image s'adapte sans être déformée
},
  im3:{
    width : 55,
    height:55,
    borderRadius:50,
    left: 30
  }
});
