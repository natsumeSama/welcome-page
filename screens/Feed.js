import React from 'react';
import { StyleSheet,FlatList, Text, View, Image, Pressable, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Card from '../shared/card';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {useRoute} from '@react-navigation/native';
import { search} from '../fetch/Places';
import { user } from '../fetch/Auth';
import { useState,useEffect  } from 'react';
import { Modal } from 'react-native';



export default function Feed() {
  const route = useRoute();
  const { email,userName } = route.params;
  const navigation = useNavigation(); 
  const [s, setSearch] = useState('');
  const [choix, setChoix] = useState("activities");
  const [found, setFound] = useState(true)

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

  const [data, setData] = useState([{
    "_id": "6634030c851b182551539881",
    "name": "Cap Carbon",
    "price": 0,
    "address": "Bejaia",
    "maps": "https://maps.app.goo.gl/juqrZuK6tyxk38yd7",
    "openingHours": "",
    "phoneNumber": "",
    "description": "Cap Carbon est un paradis préservé. Ce promontoire rocheux offre des paysages à couper le souffle, avec ses falaises escarpées surplombant les eaux turquoises de la mer. Les visiteurs peuvent s'émerveiller devant la beauté naturelle de ses plages isolées, idéales pour la détente et les activités nautiques. Les amateurs de randonnée peuvent également explorer les sentiers côtiers offrant des vues spectaculaires sur la Méditerranée. Pour les voyageurs en quête d'évasion et de tranquillité, Cap Carbon est une destination de choix, offrant un mélange unique de nature sauvage et de beauté naturelle. ",
    "image": "https://i.imgur.com/rkwwgL5.jpeg",
    "v": "06",
    "__v": 0,
    rating: 4.5,
  },
  {
    "_id": "663623e3ecb2a9bfd2b99c96",
    "name": "Monument aux Martyrs",
    "price": null,
    "address": "JMonument aux Martyrs, Haï El Madania, Alger, Algérie",
    "maps": "https://maps.app.goo.gl/woH21pSiZvfKXkyr8",
    "openingHours": "",
    "phoneNumber": "",
    "description": "Le Monument aux Martyrs est un monument imposant dédié aux martyrs de la guerre d'indépendance algérienne. Il est situé sur une colline surplombant la ville d'Alger, offrant ainsi une vue panoramique sur la baie. Le monument est un symbole de l'histoire et de la lutte du peuple algérien pour l'indépendance. Les visiteurs peuvent gravir les marches menant au sommet du monument pour admirer la vue et rendre hommage aux héros de la nation.",
    "image": "https://i.imgur.com/36rHvLQ.png",
    "v": "16",
    "__v": 0,
    rating: 4.7,
  },
  {
    "_id": "66353f5d72c00693895f1070",
    "name": "Plongé Sous Marine",
    "price": 3000,
    "address": "Bordj El bahri,ECOLE NATIONAL DES SPORTS NAUTIQUES ET SUBAQUATIQUES",
    "maps": "https://maps.app.goo.gl/rbvmw75EEnDeUkMCA",
    "openingHours": "",
    "phoneNumber": "+213561136231/+213773031091",
    "description": "• ECOLE NATIONALE DES SPORTS NAUTIQUES ET SUBAQUATIQUES (ENSNSA) • Plongée a 5m de profondeur• École de plongée sous marine• Baptême plongée sous marine • Formations P1 P2 P3• Plongées d'exploration• Sauvetage, Secourisme.",
    "image": "https://i.imgur.com/XtHYNEW.jpeg",
    "v": "16",
    rating: 4.2,
  }]);



  const handleSearch = () => {
    search(choix,s)
      .then(results => {
        // Combine results from all search functions
        const combinedResults = [].concat(...results);
        setData(combinedResults);
        setFound(combinedResults.length !== 0);
      })
      .catch(error => {
        
        console.log("Not Found");
      });
  };
  

  return (
    <LinearGradient colors={["#00ACC1", "#00AC00", "#FFFFFF"]} className="flex-1 rounded-xl">
     <StatusBar style='dark'/>

    <View >
     <View className="w-fit mt-12 flex-row justify-between">
       <View className=" ml-3">
         <Text className="text-white text-3xl font-bold italic">Hi, {userName}</Text>
         <Text className="text-slate-200 text-base ml-3">Explore Algeria Now </Text>
       </View>
       <View className="mt-10 mr-3">
       
       <Pressable className="" style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}
       onPress={()=>{
        if(email !== "Guest@guest.com"){
          navigation.navigate("Profile",{email: email,userName: userName});
        }else{
          console.warn("you need to have an account");
          navigation.navigate("welcome");
        }
       }}>
       
        <Image source={require("../assets/pfp.png")} className=" rounded-full w-16 h-16 ml-24 -mt-10"/>
       </Pressable>
      

       </View>
     </View>

      
      <View className=" bg-slate-100   w-fit h-14 rounded-3xl mx-3 mt-4 flex-row">
         <TextInput placeholder='Search Here' className=" ml-2 w-60" value={s} onChangeText={setSearch}/>
         <View className="border h-10 mt-1"></View>
         <Pressable  style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}
       onPress={handleSearch}
       >
          <Image source={require("../assets/chercher.png")} className="h-10 w-10 m-1 ml-2"/>
         </Pressable>
         <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
          onPress={handlePress} // Call handlePress on button press
       >
          <Image source={require("../assets/filtre.png")} className="h-11 w-10 m-1 ml-2"/>
         </Pressable>
      </View>
      </View>

       <View 
          className=' flex-auto   mt-5 h-full w-full bg-white'
       >
        <View className="flex-1 items-center">
          { found ?(
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <View className=' mt-20 mx-4'>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.8 : 1 })}
                onPress={() => navigation.navigate(choix, { item:item,email:email })}
              >
                <Card
                  image={{ uri: item.image }}
                  title={item.name}
                  location={item.address}
                  rating="4.5"
                  email={email}
                  id={item._id}
                  liked={useri.includes(item._id)} // You can manage liked state here
                />
              </Pressable>
            </View>
          )}
          keyExtractor={item => item._id} // Utiliser l'id correct de votre base de données
        />
          ) : (
            <View className="flex-1 justify-center mb-24">
            <Image source={require('../assets/no-result.png')} className="" />
          </View>
          )
}
     </View>
     <Modal // Render modal conditionally
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        {modalContent}
      </Modal>
</View>

       



    </LinearGradient>
  );
}


