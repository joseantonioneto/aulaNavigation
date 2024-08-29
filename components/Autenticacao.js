import { Text,View, ActivityIndicator } from 'react-native';
import { Input, Button } from '@rneui/themed';
import {useState} from 'react';

export default function Auth({navigation}) {
  const [usuario,setUsuario] = useState('');
  const [senha,setSenha] = useState('');
  const [resultado,setResultado] = useState('');
  const [carregando,setCarregando] = useState(false);
  return (
    <View>
      <Text>Usuário</Text>
      
      <Input
        onChangeText={setUsuario}
        placeholder={"Digite seu nome de usuário"}
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
            await new Promise(r => setTimeout(r, 2000));
            setCarregando(false);
            if ((usuario=='mobile')&&(senha=="12345")) {
              setResultado("USUÁRIO AUTENTICADO COM SUCESSO!");
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

