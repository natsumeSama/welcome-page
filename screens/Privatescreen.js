import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../shared/card';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState,useEffect } from 'react';
import { trouver } from '../fetch/Places';



  const gradientColors = {
    hotels: ["#ff7849", "#ffd700", "#fbbf24"], // Gradient for Hotels
    restaurants: ["#00C853", "#66FCF1", "#4ECDC4"], // Gradient for Restaurants
    activities: ["#2196F3", "#90CAF9", "#1E88E5"], // Gradient for Activities
  };

export default function PrivateScreen() {
    const route = useRoute();
    const { wilaya } = route.params;
    const W = wilaya;

    const navigation = useNavigation(); 
    const [selectedGradient, setSelectedGradient] = useState('activities'); // Default to Hotels gradient

    const handleGradientChange = (newGradient) => {
      setSelectedGradient(newGradient);
    };

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await trouver(selectedGradient,W);
        setData(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, [selectedGradient]);
  return (
    
    <LinearGradient  colors={gradientColors[selectedGradient]}className="flex-1">
     <StatusBar style='dark'/>
     <View className=' h-28 mt-10'>

        <View className='flex-row justify-evenly  mt-2'>

            <Pressable style={
               [ selectedGradient === 'hotels' && styles.selectedButton]
              }
              onPress={() => handleGradientChange('hotels')} className='shadow-2xl shadow-black' >
        <View className=' h-12 w-40 rounded-2xl flex-row  justify-center py-2 shadow-2xl shadow-black bg-amber-400 '> 
        <Text className='text-xl font-bold italic'>Hotels</Text>
        <Image source={require('../assets/hotel.png')} className='h-8 w-8 '/>
        </View>
        </Pressable>
          

          <Pressable  style={[
                selectedGradient === 'restaurants'  && styles.selectedButton
              ]}
              onPress={() => handleGradientChange('restaurants')} className='shadow-2xl shadow-black' >
        <View className=' h-12 w-40 rounded-2xl flex-row  justify-center py-2  shadow-2xl shadow-black bg-emerald-400 '> 
        <Text className='text-xl font-bold italic'>Restaurants</Text>
        <Image source={require('../assets/restaurant.png')} className='h-8 w-8 '/>
        </View>
        </Pressable>

        </View>


        <View className=' mt-2 flex-row justify-center '>


        
        <Pressable  style={[
                selectedGradient === 'activities'  && styles.selectedButton
              ]}
              onPress={() => handleGradientChange('activities') } className='shadow-2xl shadow-black' >
        <View className=' h-12 w-80 rounded-2xl flex-row  justify-center py-2 shadow-2xl shadow-black bg-fuchsia-500 '> 
        <Text className='text-xl font-bold italic'>Activities</Text>
        <Image source={require('../assets/activité.png')} className='h-8 w-8 '/>
        </View>
        </Pressable>


        </View>

     </View>

     <View className='flex-1 mt-3 ml-3 h-full w-screen'>
     <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
                onPress={() => navigation.navigate(selectedGradient, { item })}
              >
                <Card
                  image={{ uri: item.image }}
                  title={item.name}
                  location={item.address}
                  rating="4.5"
                  liked={false} // You can manage liked state here
                />
              </Pressable>
            </View>
          )}
          keyExtractor={item => item._id} // Utiliser l'id correct de votre base de données
        />
     </View>

    </LinearGradient>
  );
}


const styles = StyleSheet.create({
    selectedButton: {
      transform: [{ scale: 1.1 }], // Increase size by 10 
      borderRadius : 16,
      
    },
  });