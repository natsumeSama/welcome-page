import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View , Image, Text, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated,{ FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import {SignUp} from "../fetch/Auth"



export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
    return (
      <View className="bg-white h-full w-full">
        <StatusBar style="light" />
        <Image className='h-full w-full absolute' source={require("../assets/background1.jpeg")} />

        {/*lights*/}
        <View className='flex-row justify-around w-full absolute'>
          <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className='h-[230] w-[90]' source={require("../assets/light.png")} />
          <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()}  className='h-[160] w-[65]' source={require("../assets/light.png")} />
        </View>

        {/*title and form */}

        <View className='w-full h-full flex justify-around pt-48'>
          {/* title */}
          <View className='flex items-center' >
              <Animated.Text entering={FadeInUp.delay(500).springify()} className='text-white font-bold tracking-wider text-5xl'>
                SignUp
              </Animated.Text>
          </View>
         {/* form */}
          
          <View className='flex items-center mx-4 space-y-4'>

          <Animated.View entering={FadeInDown.delay(0).duration(1000).springify()} className='bg-black/5 p-2 rounded-2xl w-full'>
                   <TextInput value={username} onChangeText={setUsername} placeholder="UserName" placeholderTextColor={'gray'} />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(0).duration(1000).springify()} className='bg-black/5 p-2 rounded-2xl w-full'>
                   <TextInput value={email} onChangeText={setEmail} placeholder="E-mail" placeholderTextColor={'gray'} />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-2 rounded-2xl w-full mb-3'>
                   <TextInput value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor={'gray'} secureTextEntry />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-2 rounded-2xl w-full mb-3'>
                   <TextInput placeholder="Confirm Password" placeholderTextColor={'gray'} secureTextEntry />
              </Animated.View>

              <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
               <TouchableOpacity
                onPress={()=>{
                  SignUp(username,email,password);
                  navigation.navigate("Login");
                }}
                id="SignUp"
                className='w-full h-10 bg-green-400 rounded-2xl mb-3' >
                <Text className="text-xl font-bold text-white text-center">SignUp</Text>
               </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                <Text>Already have an account ? </Text>
               <TouchableOpacity onPress={()=>{
                navigation.navigate("Login")
               }}>
                <Text className="text-sky-600">Login</Text>
               </TouchableOpacity>
              </Animated.View>
          </View>
        </View>
      </View>
    );
  }