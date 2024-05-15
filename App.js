import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeStack from './routes/WelcomeStack';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeStack/>
    </NavigationContainer>
  );
}