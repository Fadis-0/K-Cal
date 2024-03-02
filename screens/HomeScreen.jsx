import React from 'react';

import { 
	Text,
 	TextInput,
 	View,
 	ScrollView,
 	Image,
 	StatusBar,
 	TouchableOpacity
} from 'react-native';


import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  BellIcon,
  LanguageIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  QrCodeIcon,
  PlusIcon
} from 'react-native-heroicons/outline';



const HomeScreen = () => {
	return (
		<View className="flex-1 relative">

		<View className="bg-main-dark w-full h-24">
		      
		</View>

		<ScrollView
			className="flex-1 bg-main-dark gap-8 px-5"
			vertical
			showsVerticalScrollIndicator={false}
		> 
			<View className="bg-second-dark h-32 rounded-lg">
		      
			</View>
			
			
		</ScrollView>
		<TouchableOpacity activeOpacity={0.5} className="bg-main-violet w-12 h-12 rounded-full absolute bottom-20 right-5 flex justify-center items-center">
			<PlusIcon size={20} color="#f1f1fe" />
		</TouchableOpacity>
		
		</View>
	)
}

export default HomeScreen;

