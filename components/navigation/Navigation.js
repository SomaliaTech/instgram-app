import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Homescreens from '../../screens/homescreens';
import NewPostScreen from '../../screens/NewPostScreen';
import LoginScreen from '../../screens/LoginScreen';
import SingUpScreen from '../../screens/SingUpScreen';

const  Stack = createStackNavigator();
const ScreenOption ={
    headerShown: false,
  
}
const SingNavigtion = () => {


  return (
   <NavigationContainer >
<Stack.Navigator screenOptions={ScreenOption} initialRouteName="loginScreen" >
 <Stack.Screen name='HomeScreen' component={Homescreens}  />   
 <Stack.Screen name='NewPost' component={NewPostScreen} />
 <Stack.Screen name='loginScreen' component={LoginScreen} />
 <Stack.Screen name='SingUpScreen' component={SingUpScreen} />
</Stack.Navigator>
   </NavigationContainer>
  )
}

export default SingNavigtion