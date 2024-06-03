import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,Pressable,FlatList,Modal,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation ,useRoute} from '@react-navigation/native';
import { user } from '../fetch/Auth';
import Card from '../shared/card';
import { favorite } from '../fetch/Places';


export default function FavScreen() {
  const route = useRoute();
  const { email,userName } = route.params;
  const navigation = useNavigation();
  const [hasFavorites, setHasFavorites] = useState(true);
  const [refresh,setRefresh]= useState(false);
  const [useri,setUser]= useState([]);

    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('hotel');
  
    const handlePress = () => {
      setShowOptions(!showOptions);
      setData([]);
    };
  
    const handleOptionPress = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
      handleSearch(option);
    };

  

  const [data, setData] = useState([]);
  const handleSearch = async (option) => {
    try {
      const userResult = await user(email);
      const combinedUserResults = [].concat(...userResult.fav);
      setUser(combinedUserResults);
  
      const favoriteResults = await favorite(option, combinedUserResults);
      const combinedFavoriteResults = [].concat(...favoriteResults);
      setData(combinedFavoriteResults);
      setHasFavorites(combinedFavoriteResults.length !== 0); // Correct condition for favorites
    } catch (error) {
      setHasFavorites(false);
    }
  };
  
  

  return (
    <View className="flex-1 bg-white ">
      <StatusBar style='dark' />
      <View className="flex-1 mb-16">
      <View style={styles.container}>
      <View className='flex-row  mt-9 h-16  w-fit rounded bg-red-500'>
        <TouchableOpacity onPress={handlePress}>
          <Image source={require('../assets/option.png')} className='h-10 w-10 mt-3 ml-2'/>
        </TouchableOpacity>
        <Text className="font-bold text-white text-2xl mt-3 ml-16">Your Collections</Text>
      </View>
      {showOptions && (
        <View classn="flex-row" style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('hotels')}>
            <Image source={require("../assets/hotel.png")} className='h-8 w-8 m-1'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('restaurants')}>
            <Image source={require("../assets/restaurant.png")} className='h-8 w-8 m-1'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('activities')}>
            <Image source={require("../assets/activities.png")} className='h-8 w-8 m-1'/>
          </TouchableOpacity>
        </View>
      )}
      
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
                onPress={() => navigation.navigate(selectedOption, { item:item,email:email })}
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
            <Image source={require('../assets/favyet.jpg')} className="mt-44 ml-7" />
            <Text className="mb-2 font-semibold text-center text-lg">No Favorites yet</Text>
            <Text className="px-5 text-slate-500 text-center">Keep track of the listing you're interested in by clicking the Heart Icon</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: 'absolute',
    top: 50,
    left: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedOption: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});