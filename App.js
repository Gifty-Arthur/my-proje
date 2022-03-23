import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Screens/login';





const Stack = createNativeStackNavigator();
import login from './Screens/login';


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* screenOptions={{header: () => null}} */}
        {/* <Stack.Screen name= "signUp" component={signUp}/> */}
        <Stack.Screen name= "login" component={login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
