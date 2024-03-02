import {
      StyleSheet,
      Text,
      View,
      StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import BottomTab from './components/BottomTab';

export default function App() {
  return (
    <SafeAreaView 
      className="flex-1"
      
    >
      <StatusBar backgroundColor="#16161a" barStyle="light-content" />
      
      
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>

    </SafeAreaView>    
  );
}
