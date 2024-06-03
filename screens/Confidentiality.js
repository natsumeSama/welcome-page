import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';


const validatePassword = (password) => {
  if (password.length < 8) {
    return "Password is too short";
  }
  if (!/[a-z]/.test(password) ||!/[A-Z]/.test(password) ||!/[0-9]/.test(password) ||!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return "Password is too weak";
  }
  return null;
};

export default function WelcomeScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const handleSubmit = () => {
    // Add your password validation logic here
    // For demo purposes, I'll just check if the password is not empty
    if (currentPassword == 'Youdas2002!') {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
    }
  };

  const handlePasswordChange = (text) => {
    const error = validatePassword(text);
    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError(null);
    }
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    if (text!== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(null);
    }
    setConfirmPassword(text);
  };

  const [showModal, setShowModal] = useState(false); // State for modal visibility

const handlePress = () => {
  // Simulate successful plan addition (replace with actual logic)
  setShowModal(true);
};


const modalContent = (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
    <View style={{ margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 25, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 6, height: 6 }, shadowOpacity: 0.6, shadowRadius: 4, elevation: 5 }}>
    
    <Text className='text-lg font-medium italic'>
    Succes !
    </Text>
    <Ionicons name="checkmark-circle" size={24} color="green" />
    <Text>Password changed succesfuly</Text>

    <Pressable  onPress={() => setShowModal(false)}>
        <View className='flex-row bg-slate-600 mt-5 rounded-lg '>
          <Text className='text-lg p-2 font-semibold text-white'>Ok</Text>
        </View>
        </Pressable>

    
    </View>
  </View>
);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark'/>
      
      <View className='flex-1'>
        <Text className='text-lg p-2 font-medium'>Keep your account secure</Text>
        <Text className='px-2'>Having a strong password is essential for protecting your account. We recommend that you change your password regularly, especially if you use the same password for other online accounts.
        </Text>

        <Text className='text-lg p-2 font-medium'>Enter Current password</Text>

        <View className='bg-black/5 p-5 flex-row justify-between rounded-2xl w-80 mx-auto'>
          <TextInput 
            className='w-52' 
            placeholder="Current Password" 
            placeholderTextColor={'gray'} 
            secureTextEntry={showPassword? false : true} 
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
          />
          <TouchableOpacity className="mx-3" onPress={() => setShowPassword(!showPassword)}>
            {showPassword? (
              <Ionicons name="eye-off" size={24} color="gray" />
            ) : (
              <Ionicons name="eye" size={24} color="gray" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
  {currentPassword === ''? (
    <Ionicons name="arrow-forward" size={24} color="gray" />
  ) : isPasswordCorrect === true? (
    <Ionicons name="checkmark-circle" size={24} color="green" />
  ) : isPasswordCorrect=== false? (
    <Ionicons name="close-circle" size={24} color="red" />
  ) : (
    <Ionicons name="arrow-forward" size={24} color="gray" />
  )}
</TouchableOpacity>
          
        </View>

        {isPasswordCorrect === true && (
          <View className="mt-7">
            <Text className='text-lg p-2 font-medium'>Change Password</Text>
          
            <View className='bg-black/5 p-5 mt-10  rounded-2xl w-80 mx-auto'>
             <View className='flex-row justify-between'>
             <TextInput
              className="w-64"
              placeholder= 'New Password'   
              placeholderTextColor={'gray'}
              secureTextEntry={showPassword? false : true}   
              value={password} onChangeText={handlePasswordChange}     
             />
             <TouchableOpacity className="mx-3" onPress={() => setShowPassword(!showPassword)}>
            {showPassword? (
              <Ionicons name="eye-off" size={24} color="gray" />
            ) : (
              <Ionicons name="eye" size={24} color="gray" />
            )}
          </TouchableOpacity>
          </View>

          <View>
               {passwordError && (
                 <Text style={{ color: 'red' }}>{passwordError}</Text>
               )}
               </View>
            </View>

            <View className='bg-black/5 p-5  rounded-2xl w-80 mt-2 mx-auto'>
             <View className='flex-row justify-between'>
             <TextInput
              className="w-64"
              placeholder= 'New Password'   
              placeholderTextColor={'gray'}
              secureTextEntry={showPassword? false : true}   
              value={confirmPassword} onChangeText={handleConfirmPasswordChange}     
             />
             <TouchableOpacity className="mx-3" onPress={() => setShowPassword(!showPassword)}>
            {showPassword? (
              <Ionicons name="eye-off" size={24} color="gray" />
            ) : (
              <Ionicons name="eye" size={24} color="gray" />
            )}
          </TouchableOpacity>
          </View>
           
          <View>
               {confirmPasswordError && (
                 <Text style={{ color: 'red' }}>{confirmPasswordError}</Text>
               )}
          </View>
          
            </View>


            <View  className='w-full h-12 flex-row justify-center mt-10'>
           <TouchableOpacity
           onPress={() => {
            if (!passwordError &&!confirmPasswordError) {
              handlePress();
            }
          }}
            className='w-64 h-12 bg-green-400 rounded-2xl mb-10' >
              <Text className="text-xl my-auto font-bold text-white text-center">Confirm</Text>
            </TouchableOpacity>
           </View>

          </View>

          
        )}

<Modal // Render modal conditionally
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        {modalContent}
      </Modal>
      </View>
    </View>
  );
}