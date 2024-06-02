import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../shared/card';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState,useEffect } from 'react';
import { trouver } from '../fetch/Places';
import { user } from '../fetch/Auth';
import { TextInput } from 'react-native-gesture-handler';
import { Modal } from 'react-native';


export default function PrivateScreen() {
    const route = useRoute();
    const { email,userName,wilaya } = route.params;
    const W = wilaya;
    const navigation = useNavigation();
    const [choix, setChoix] = useState("activities");
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    
  const handlePress = () => {
    // Simulate successful plan addition (replace with actual logic)
    setShowModal(true);
  };

  const modalContent = (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 }}>
      <View style={{ margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 6, height: 6 }, shadowOpacity: 0.6, shadowRadius: 4, elevation: 5 }}>
    
      <View className=''>
        <Pressable
        style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={() => {
            setShowModal(false);
            setChoix("hotels")
            //filter here
          }}>
          <View className='flex-row justify-center mt-3 border h-11 w-44 rounded-2xl' >
          <Text className='text-base font-semibold italic p-1'>Hotels</Text>
          <Image source={require("../assets/hotel.png")} className='h-8 w-8 m-1'/>
          </View>
        </Pressable>
        <Pressable
        style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={() => {
            setShowModal(false);
            setChoix("restaurants")
            //add filter logic here
            
          }}>
          <View className='flex-row justify-center mt-3 border h-11 w-44 rounded-2xl' >
          <Text className='text-base font-semibold italic p-1'>Restaurants</Text>
          <Image source={require("../assets/restaurant.png")} className='h-8 w-8 m-1'/>
          </View>
        </Pressable>
        <Pressable
        style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={() => {
            setShowModal(false);
            setChoix("activities")
            //same
          }}>
          <View className='flex-row justify-center mt-3 border h-11 w-44 rounded-2xl' >
          <Text className='text-base font-semibold italic p-1'>Activities</Text>
          <Image source={require("../assets/activities.png")} className='h-8 w-8 m-1'/>
          </View>
        </Pressable>
      </View>
      </View>
    </View>
  );

  const [useri,setUser]= useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await user(email);
        setUser(result.fav);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, [email]);

    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await trouver(choix,W);
        setData(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, [choix]);

  
  const u=[1,2,3,4];
  console.log(useri);


  return (
    <View className="flex-1">
    <LinearGradient  colors={["#0aaaff", "#0ff0F1", "#0f00f2"]}className="flex-1">
     <View className='items-center'>
     <View className='flex-row justify-center mt-14 border h-11 w-96 rounded-2xl' >
          <Text className='text-base font-semibold italic p-1'>{choix}</Text>
      </View>
     <View className="mt-5 mb-5 border-1 bg-slate-100  w-80 h-14  rounded-3xl mx-4  flex-row">
         <TextInput placeholder='Search & filter Here' className=" ml-2 w-60 "/>
         <View className="border h-11 mt-1"></View>
         <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={handlePress} // Call handlePress on button press
       >
          <Image source={require("../assets/filtre.png")} className="h-11 w-10 m-1 ml-2"/>
         </Pressable>
      </View>
      </View>


     <View className='flex-1 items-center h-full w-screen '  >
     <FlatList
          data={data}
          renderItem={({ item }) => (
            <View className=' mt-4'>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
                onPress={() => navigation.navigate(choix, { item })}
              >
                <Card
                  image={{ uri: item.image }}
                  title={item.name}
                  location={item.address}
                  rating="4.5"
                  email={email}
                  id={item._id}
                  fav={useri.includes(item._id)} // You can manage liked state here
                />
              </Pressable>
            </View>
          )}
          keyExtractor={item => item._id} // Utiliser l'id correct de votre base de données
        />
     </View>
     <Modal // Render modal conditionally
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        {modalContent}
      </Modal>
    </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
    selectedButton: {
      transform: [{ scale: 1.2 }], // Increase size by 10 
      borderRadius : 16,
    
    
    },
    
  });