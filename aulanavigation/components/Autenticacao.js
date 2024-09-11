import { Text,View, ActivityIndicator } from 'react-native';
import { Input, Button } from '@rneui/themed';
import {useState} from 'react';
import supabase from '../database/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Auth({navigation}) {
  const [usuario,setUsuario] = useState('');
  const [senha,setSenha] = useState('');
  const [resultado,setResultado] = useState('');
  const [carregando,setCarregando] = useState(false);
  return (
    <View>
      <Text>Email</Text>
      
      <Input
        onChangeText={setUsuario}
        placeholder={"Digite seu Email"}
      />
      
      <Text>Senha</Text>
      
      <Input
        onChangeText={setSenha}
        placeholder={"Digite sua senha"}
        secureTextEntry={true}
      />
      
      <Button
        title={"Autenticar"}
        onPress={
          async ()=>{
            setResultado('');
            setCarregando(true);
            let {data, error} = await supabase.auth.signInWithPassword({
              email: usuario,
              password: senha
            });
            setCarregando(false);
            if (error ===null) {
              await AsyncStorage.setItem('usuario', usuario);
              navigation.navigate('Usuario',{username: usuario});
            }
            else {
              setResultado("USUÁRIO/SENHA incorretos!");
            }
          }
        }
      />
      
      <Text>{resultado}</Text>
      
      <ActivityIndicator 
        animating={carregando}
      />
    </View>
  );
}

