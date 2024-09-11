import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Usuario from './components/Usuario';
import Auth from './components/Autenticacao';
import Cadastro from './components/Cadastro';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
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
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title: 'Cadastro'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
