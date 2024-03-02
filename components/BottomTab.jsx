import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeIcon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  BookmarkSquareIcon,
  BoltIcon,
  CalculatorIcon
} from 'react-native-heroicons/outline';

import {
  HomeIcon as HomeSolidIcon,
  MapPinIcon as MapPinSolidIcon,
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon,
  NewspaperIcon as NewspaperSolidIcon,
  Cog6ToothIcon as Cog6ToothSolidIcon,
  BookmarkSquareIcon as BookmarkSquareSolidIcon,
  BoltIcon as BoltSolidIcon,
  CalculatorIcon as CalculatorSolidIcon
} from 'react-native-heroicons/solid';


import HomeScreen from '../screens/HomeScreen'


const Tab = createBottomTabNavigator();

const screenOptions = {
	tabBarShowLabel: false,
	tabBarHideOnKeyboard: true,
	headerShown: false,
	tabBarStyle: {
		position: "absolute",
    borderColor: "transparent",
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 54,
    backgroundColor: "#242629"
	}
}

const BottomTab = () => {
	return (
      <Tab.Navigator screenOptions={screenOptions}>
        
        <Tab.Screen 
        	name="Home" 
        	component={HomeScreen}
        	options={{
        		tabBarIcon: ({focused}) => {
        			return (
        				focused ? <HomeSolidIcon size={24} color="#2cb67d" /> : <HomeIcon size={22} color="#fffffe" />
        			)
        		}
        	}}
        />
        <Tab.Screen 
        	name="Map" 
        	component={HomeScreen}
        	options={{
        		tabBarIcon: ({focused}) => {
        			return (
        				focused ? <CalculatorSolidIcon size={24} color="#2cb67d" /> : <CalculatorIcon size={22} color="#fffffe" />
        			)
        		}
        	}}
        />
        <Tab.Screen 
        	name="Blog" 
        	component={HomeScreen}
        	options={{
        		tabBarIcon: ({focused}) => {
        			return (
        				focused ? <NewspaperSolidIcon size={24} color="#2cb67d" /> : <NewspaperIcon size={22} color="#fffffe" />
        			)
        		}
        	}}
        />
        <Tab.Screen 
        	name="Chat" 
        	component={HomeScreen}
        	options={{
        		tabBarIcon: ({focused}) => {
        			return (
        				focused ? <Cog6ToothSolidIcon size={24} color="#2cb67d" /> : <Cog6ToothIcon size={22} color="#fffffe" />
        			)
        		}
        	}}
        />
      </Tab.Navigator>
	)
}

export default BottomTab;
