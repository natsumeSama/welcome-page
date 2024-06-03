import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SignUp } from "../fetch/Auth";

const validatePassword = (password) => {
  if (password.length < 8 ) {
    return "Password is too short";
  }
  if (!/[a-z]/.test(password) ||!/[A-Z]/.test(password) ||!/[0-9]/.test(password) ||!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return "Password is too weak";
  }
  return null;
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [r,setr]= useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
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
    const error = validatePassword(text);
    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError(true);
    }
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    if (text!== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(true);
    }
    setConfirmPassword(text);
  };

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
                 <TextInput placeholder="UserName" placeholderTextColor={'gray'} value={username} onChangeText={handleUsernameChange} />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(0).duration(1000).springify()} className='bg-black/5 p-2 rounded-2xl w-full'>
                 <TextInput placeholder="E-mail" placeholderTextColor={'gray'} value={email} onChangeText={handleEmailChange} />
                 {emailError && (
                   <Text style={{ color: 'red' }}>{emailError}</Text>
                 )}
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-2  rounded-2xl w-full '>

              <View className='flex-row justify-between'>
            <TextInput className='w-72' placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={!showPassword} value={password} onChangeText={handlePasswordChange} />
            <TouchableOpacity onPress={togglePasswordVisibility}>
                {showPassword? (
                   <Ionicons name="eye" size={24} color="gray" />
                 ) : (
                   <Ionicons name="eye-off" size={24} color="gray" />
                 )}
              </TouchableOpacity>

             </View>

             <View>
               {passwordError && (
                 <Text style={{ color: 'red' }}>{passwordError}</Text>
               )}
               </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-2  rounded-2xl w-full mb-3'>

              <View className='flex-row justify-between'>
            <TextInput className='w-72' placeholder="Confirm Password" placeholderTextColor={'gray'} secureTextEntry={!showPassword} value={confirmPassword} onChangeText={handleConfirmPasswordChange} />
            <TouchableOpacity onPress={togglePasswordVisibility}>
                {showPassword? (
                   <Ionicons name="eye" size={24} color="gray" />
                 ) : (
                   <Ionicons name="eye-off" size={24} color="gray" />
                 )}
              </TouchableOpacity>
             </View>


             <View>
               {confirmPasswordError && (
                 <Text style={{ color: 'red' }}>{confirmPasswordError}</Text>
               )}
               </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
           <TouchableOpacity
            className='w-full h-10 bg-green-400 rounded-2xl mb-3' 
            onPress={()=>{
              setr(SignUp(username,email,password));
              console.log(r);
              if(passwordError && emailError && confirmPasswordError){
                if(r){
                navigation.navigate("Login")
                }else{
                  console.error("Email deja existant")
                }
              }else{
                console.error("Check your information")
              }
              }}>
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