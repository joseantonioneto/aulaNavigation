import { Text, View } from 'react-native';
import { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Usuario from './components/Usuario';
import Auth from './components/Autenticacao';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name ="Home"
            options={{title: 'Principal'}}
            component = {Home}
          />
          <Stack.Screen
            name="Autenticacao"
            component={Auth}
          />
          <Stack.Screen
            name = "Usuario"
            component={Usuario}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
