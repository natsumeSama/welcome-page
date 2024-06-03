import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Plancard from '../shared/Plancard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { userplan } from '../fetch/Auth';
import { v4 as uuidv4 } from 'uuid';

export default function PlanScreen() {
  const route = useRoute();
  const { email, userName } = route.params;
  const navigation = useNavigation();
  const [hasFavorites, setHasFavorites] = useState(true);
  const [userPlans, setUserPlans] = useState([]);

  const handleSearch = async () => {
    try {
      const userResult = await userplan(email);
      setUserPlans(userResult.plan);
      setHasFavorites(userResult.plan.length !== 0);
    } catch (error) {
      console.error('Error fetching plans:', error);
      setHasFavorites(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="flex-row mt-9 h-16 w-fit rounded bg-yellow-500">
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require('../assets/reloadicon.png')} className="h-10 w-10 mt-3 ml-2" />
        </TouchableOpacity>
        <Text className="font-bold text-white text-2xl mt-3 ml-16">Your Collections</Text>
      </View>
      {hasFavorites ? (
        <View className="flex-1 mt-8">
          <View className="flex-1 items-center h-full w-screen">
            <View className="flex-1 m-1 mb-20 rounded-lg">
              <FlatList
                data={userPlans}
                renderItem={({ item }) => (
                  <View className="flex-1 mx-auto">
                    <Plancard
                      id={item._id}
                      email={email}
                      name={item.name}
                      date={item.date}
                      time={item.time}
                      className="flex-1"
                    />
                  </View>
                )}
                keyExtractor={(item) => item._id} // Utilisation de l'ID de l'élément pour la clé
              />
            </View>
          </View>
        </View>
      ) : (
        <View className="flex-1">
          <Image source={require('../assets/no-plan.png')} className="flex-1 h-screen w-screen"style={{resizeMode: 'stretch'}} />
          
        </View>
      )}
    </View>
  );
}
