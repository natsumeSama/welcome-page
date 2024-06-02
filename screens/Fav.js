import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,Pressable,FlatList,Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { user } from '../fetch/Auth';
import Card from '../shared/card';
import { favorite } from '../fetch/Places';


export default function FavScreen() {
  const route = useRoute();
  const { email,userName } = route.params;
  const navigation = useNavigation();
  const [hasFavorites, setHasFavorites] = useState(false);
  const [refresh,setRefresh]= useState(false);
  const [useri,setUser]= useState([]);

  const [showModal, setShowModal] = useState(false); // State for modal visibility
    
  const handlePress = () => {
    // Simulate successful plan addition (replace with actual logic)
    setShowModal(true);
  };

  

  const [data, setData] = useState([]);
  const handleSearch = async () => {
    try {
      const userResult = await user(email);
      const combinedUserResults = [].concat(...userResult.fav);
      setUser(combinedUserResults);
      
      const favoriteResult = await favorite("activities", userResult.fav);
      const combinedFavoriteResults = [].concat(...favoriteResult);
      setData(combinedFavoriteResults);
      setHasFavorites(useri.length!=0);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };
  
  /*useEffect(() => {
    const fetchDataa = async () => {
      try {
        const userResult = await user(email);
        const activityResult = await favorite("activities", userResult.fav);
        setUser(userResult.fav);
        setData(activityResult);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    const fetchDatar = async () => {
      try {
        const userResult = await user(email);
        const activityResult = await favorite("restaurants", userResult.fav);
        setUser(userResult.fav);
        setData(activityResult);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    const fetchDatah = async () => {
      try {
        const userResult = await user(email);
        const activityResult = await favorite("hotels", userResult.fav);
        setUser(userResult.fav);
        setData(activityResult);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    fetchDataa();
    fetchDatar();
    fetchDatah();
    setHasFavorites(useri.length!=0);
  }, [email]);*/
  console.log(data);
  

  return (
    <View className="flex-1 bg-white ">
      <StatusBar style='dark' />
      <View className="flex-1 mb-16">
        <View className="mt-8 flex-row justify-center h-16 w-fit rounded bg-red-500">
          <Pressable onPress={handleSearch}>
          <Text className="font-bold text-white text-2xl mt-3">Your Collections</Text>
          </Pressable>
          
          
        </View>
        {hasFavorites ? (
          // Affichage si hasFavorites est true
          <View className="flex-1 mt-8">
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
                  fav={true} // You can manage liked state here
                />
              </Pressable>
            </View>
          )}
          keyExtractor={item => item._id} // Utiliser l'id correct de votre base de données
        />
     </View>
          </View>
        ) : (
          // Affichage si hasFavorites est false
          <View className="mt-8">
            <Image source={require('../assets/favicon.png')} className="mt-44 ml-7" />
            <Text className="mb-2 font-semibold text-center text-lg">No Favorites yet</Text>
            <Text className="px-5 text-slate-500 text-center">Keep track of the listing you're interested in by clicking the Heart Icon</Text>
          </View>
        )}
      </View>
    </View>
  );
}

