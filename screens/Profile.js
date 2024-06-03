import { Text, View, TouchableOpacity, Image , TouchableOpacityImage } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {useRoute} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function Profil() {
  const route = useRoute();
  const { email,userName } = route.params;

 const navigation = useNavigation(); 


  return (
    <View className="flex-1 bg-sky-100">
      <View className="basis-2/5 justify-center items-center bg-sky-600">
        <View className=""><Image className="h-52 w-52 mt-10 rounded-full" source={require('../assets/pfp.png')}/></View>
        <Text className="text-2xl mb-7">{userName}</Text>
      </View>
      <View className="basis-3/5">
        <View className="basis-1/6 flex-row border rounded-3xl bg-sky-50 mx-10 -mt-11">
          <View className="flex-1 justify-center items-center"><TouchableOpacity><Image className="w-14 h-14" source={require('../assets/favoriteicon.png')}/></TouchableOpacity></View>
          <View className="flex-1 justify-center items-center"><TouchableOpacity><Image className="w-14 h-14" source={require('../assets/commenticon.png')}/></TouchableOpacity></View>
          <View className="flex-1 justify-center items-center"><TouchableOpacity><Image className="w-14 h-14" source={require('../assets/travelicon.png')}/></TouchableOpacity></View>
        </View>
        <View className="flex-1">
        <TouchableOpacity onPress={()=>{
        navigation.navigate("Account")
       }} className="flex-1 flex-row justify-start items-center border-b-black border rounded-xl m-2 ">
        <Image className="w-8 h-8 mx-5" source={require('../assets/accounticon.png')}/>
        <Text className="text-xl">Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
        navigation.navigate("Confidentiality")
       }} className="flex-1 flex-row justify-start items-center border-b-black border rounded-xl m-2">
        <Image className="w-8 h-8 mx-5" source={require('../assets/confidentialityicon.png')}/>
        <Text className="text-xl">Confidentiality</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
        navigation.navigate("Help")
       }} className="flex-1 flex-row justify-start items-center border-b-black border rounded-xl m-2"><Image className="w-8 h-8 mx-5" source={require('../assets/helpicon.png')}/><Text className="text-xl">Help</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{
        navigation.navigate("welcome")
       }}  className="flex-1 flex-row justify-start items-center border-b-black border rounded-xl m-2"><Image className="w-8 h-8 mx-5" source={require('../assets/disconnecticon.webp')}/><Text className="text-xl">Disconnect</Text></TouchableOpacity>
        </View>


      </View>
      
     


    </View>
  );
}