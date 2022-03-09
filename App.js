import 'react-native-gesture-handler';
import React from 'react';
import {NativeContainer, NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();
import SplashScreen from './Screens/SplashScreen';

1

const App = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
      {/* screenOptions={{header: () => null}} */}
        {/* <Stack.Screen name= "signUp" component={signUp}/> */}
        <Stack.Screen name= "SplashScreen" component={SplashScreen}/>
               
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SplashScreen;
