import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/DetailCard'
import PrivateScreen from '../screens/Privatescreen'
import Activities from '../shared/Activities';
import Restaurants from '../shared/Restaurants';
import Hotels from '../shared/Hotels';
import Account from '../screens/Account'
import Confidentiality from '../screens/Confidentiality'
import Help from '../screens/Help'



const Stack = createStackNavigator();

export default function WelcomeStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen 
     name='welcome'
     component={WelcomeScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Login'
     component={LoginScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Signup'
     component={SignupScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{headerShown:false}}
     />
     <Stack.Screen
     name='Profile'
     component={Profile}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='activities'
     component={Activities}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='restaurants'
     component={Restaurants}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='hotels'
     component={Hotels}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Private'
     component={PrivateScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Account'
     component={Account}
     options={{headerShown: true}}
     />
     <Stack.Screen
     name='Confidentiality'
     component={Confidentiality}
     options={{headerShown: true}}
     />
     <Stack.Screen
     name='Help'
     component={Help}
     options={{headerShown: true}}
     />
    </Stack.Navigator>
  );
}