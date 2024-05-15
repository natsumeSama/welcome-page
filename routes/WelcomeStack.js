import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/DetailCard'



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
     name='Detail'
     component={Detail}
     options={{headerShown:false}}
     />
    </Stack.Navigator>
  );
}