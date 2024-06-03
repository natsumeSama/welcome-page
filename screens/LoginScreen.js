import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';
import { LogIn } from "../fetch/Auth";

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    LogIn(email, password)
      .then(userName => {
        console.log(userName);
        navigation.navigate("Home", { email: email, userName: userName });
      })
      .catch(error => {
        console.log('Login failed', error);
      });
  };

  const handleEmailChange = (text) => {
    if (!validateEmail(text)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError(true);
    }
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={require("../assets/background.png")} />

      {/*lights*/}
      <View className='flex-row justify-around w-full absolute'>
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className='h-[230] w-[90]' source={require("../assets/light.png")} />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()}  className='h-[160] w-[65]' source={require("../assets/light.png")} />
      </View>

      {/*title and form */}

      <View className='w-full h-full flex justify-around pt-40 mt-2 '>
        {/* title */}
        <View className='flex items-center' >
            <Animated.Text entering={FadeInUp.delay(500).springify()} className='text-white font-bold tracking-wider text-5xl'>
              Login
            </Animated.Text>
        </View>
       {/* form */}
        
        <View className='flex items-center mx-4 space-y-4'>
            <Animated.View entering={FadeInDown.delay(0).duration(1000).springify()} className='bg-black/5 p-5 rounded-2xl w-full'>
                 <TextInput 
                   placeholder="E-mail" 
                   placeholderTextColor={'gray'} 
                   value={email} 
                   onChangeText={handleEmailChange} 
                 />
                 {emailError && (
                   <Text style={{ color: 'red' }}>{emailError}</Text>
                 )}
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-5 flex-row justify-between rounded-2xl w-full mb-3'>
                 <TextInput 
                   placeholder="Password" 
                   placeholderTextColor={'gray'} 
                   secureTextEntry={!showPassword} 
                   value={password} 
                   onChangeText={handlePasswordChange} 
                   className='w-64'
                 />
                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword? (
                     <Ionicons name="eye" size={24} color="gray" />
                   ) : (
                     <Ionicons name="eye-off" size={24} color="gray" />
                   )}
                 </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
             <TouchableOpacity
             onPress={handleLogin}
             className='w-full h-10 bg-sky-400 rounded-2xl mb-3' >
              <Text className="text-xl font-bold text-white text-center">Login</Text>
             </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
              <Text>Don't have an account ? </Text>
             <TouchableOpacity onPress={()=>{
               navigation.navigate("Signup")
             }}>
              <Text className="text-sky-600">SignUp</Text>
             </TouchableOpacity>
            </Animated.View>
        </View>
      </View>
    </View>
  );
}