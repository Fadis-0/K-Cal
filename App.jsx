import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import BottomTab from './components/BottomTab';

export default function App() {
  return (
    <SafeAreaView 
      className="flex-1 bg-[#16161a]"
      
    >
      
      
      
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>

    </SafeAreaView>    
  );
}
