import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// the package is native-stack not stack alone
// import { createStackNavigator } from '@react-navigation/native-stack';
// this is the correct package importation not the commented one above
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SplashScreen from './Screens/SplashScreen';
// importing the login screen from the screens folder
import Login from './Screens/login'


const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
      {/* screenOptions={{header: () => null}} */}
        {/* <Stack.Screen name= "signUp" component={signUp}/> */}
        <Stack.Screen name= "Splash" component={SplashScreen}/>
        <Stack.Screen name= "Login" component={Login}/>
               
      </Stack.Navigator>
    </NavigationContainer>
  );
};


