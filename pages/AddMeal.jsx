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
  QrCodeIcon
} from 'react-native-heroicons/outline';



const AddMeal = () => {
	return (
		<ScrollView
			className="flex-1 bg-main-dark"
			vertical
			showsVerticalScrollIndicator={false}
		> 
			<View className="flex flex-col gap-0 mt-8">
		      
		      {/* Search and filter*/}
			    <View className="py-4 mt-4 flex-row justify-between items-center px-4 space-x-3"> 
			        
			        {/* Search */}
			        <View className="flex-row space-x-3 rounded px-3 border bg-[#fffffe] border-gray-300 flex-1 items-center"> 
			          	<MagnifyingGlassIcon size={20} color="#16161a" />
			          	<TextInput 
			            	placeholder="What are you looking for?"
			            	keyboardType="default"
			            	className="flex-1 py-2 pr-3"
			          	/>
			          	<TouchableOpacity activeOpacity={0.5}>
			          		<QrCodeIcon size={20} color="#16161a" />
			          	</TouchableOpacity>
			        </View>

			        {/* Filter */}
			        <TouchableOpacity activeOpacity={0.5}>
			        	<AdjustmentsVerticalIcon size={24} color="white" />
			        </TouchableOpacity>

			    </View>

			    <View className="flex flex-row gap-4">
			    	<TouchableOpacity activeOpacity={0.5}>
			        	<View className="bg-second-dark w-16 h-16 rounded">
			    		</View>
			        </TouchableOpacity>
			       	<TouchableOpacity activeOpacity={0.5}>
			        	<View className="bg-second-dark w-16 h-16 rounded">
			    		</View>
			        </TouchableOpacity>
			        <TouchableOpacity activeOpacity={0.5}>
			        	<View className="bg-second-dark w-16 h-16 rounded">
			    		</View>
			        </TouchableOpacity>
			        <TouchableOpacity activeOpacity={0.5}>
			        	<View className="bg-second-dark w-16 h-16 rounded">
			    		</View>
			        </TouchableOpacity>
			    	

			    </View>

			</View>
		</ScrollView>
	)
}

export default AddMeal;

