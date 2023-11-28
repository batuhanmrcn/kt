import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainMenu from "./src/MainMenu";
import MainMenu2 from "./src/MainMenu2";
import AracB from './src/AracB';
import AracA from './src/AracA';
import kazaBilgileri from './src/KazaBilgileri';
import UserProvider from './src/context/Provider';



const Stack = createNativeStackNavigator();


const A = ({}) => {
  return(
    <UserProvider>

      
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name = "MainMenu" component={MainMenu}/>
          <Stack.Screen name = "MainMenu2" component={MainMenu2}/>
          <Stack.Screen name = "KazaBilgileri" component={kazaBilgileri}/>
          <Stack.Screen name = "AracB" component={AracB}/>
          <Stack.Screen name = "AracA" component={AracA}/>
        </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
  );
}

export default A;