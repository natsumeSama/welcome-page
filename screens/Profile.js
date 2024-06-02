import { Text, View, Pressable, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {useRoute} from '@react-navigation/native';


export default function Profil() {
  const route = useRoute();
  const { email,userName } = route.params;
  return (
    <View className="flex-1 bg-sky-100">
      <View className="basis-2/5 justify-center items-center bg-sky-600">
        <View className="border-2 border-black w-40 h-40 rounded-full mt-10"><Image className="flex-1 rounded-full" source={{uri: 'https://i.imgur.com/odEBob3.jpg'}}/></View>
        <Text className="text-2xl mb-7">{userName}</Text>
      </View>
      <View className="basis-3/5">
        <View className="basis-1/6 flex-row border rounded-3xl bg-sky-50 mx-10 -mt-11">
          <View className="flex-1 justify-center items-center"><Pressable><Image className="w-14 h-14" source={require('../assets/favoriteicon.png')}/></Pressable></View>
          <View className="flex-1 justify-center items-center"><Pressable><Image className="w-14 h-14" source={require('../assets/commenticon.png')}/></Pressable></View>
          <View className="flex-1 justify-center items-center"><Pressable><Image className="w-14 h-14" source={require('../assets/travelicon.png')}/></Pressable></View>
        </View>
        <View className="flex-1">
        <Pressable className="flex-1 flex-row justify-start items-center border-gray-400"><Image className="w-8 h-8 mx-5" source={require('../assets/accounticon.png')}/><Text className="text-xl">Account</Text></Pressable>
        <Pressable className="flex-1 flex-row justify-start items-center border-gray-400"><Image className="w-8 h-8 mx-5" source={require('../assets/confidentialityicon.png')}/><Text className="text-xl">Confidentiality</Text></Pressable>
        <Pressable className="flex-1 flex-row justify-start items-center border-gray-400"><Image className="w-8 h-8 mx-5" source={require('../assets/helpicon.png')}/><Text className="text-xl">Help</Text></Pressable>
        <Pressable className="flex-1 flex-row justify-start items-center border-gray-400"><Image className="w-8 h-8 mx-5" source={require('../assets/disconnecticon.webp')}/><Text className="text-xl">Disconnect</Text></Pressable>
        </View>
      </View>
      
    </View>
  );
}
