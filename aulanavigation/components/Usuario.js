import{Text, View, Button} from 'react-native';
import{ useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '../database/database';

export default function Usuario({route, navigation}){
  const {username} = route.params;
  const [usuario, setUsuario] = useState ('INDEFINIDO')
  const [dados,setDados] = useState([]);
        useEffect(()=>{
          async function teste (){
            const valor = await AsyncStorage.getItem('usuario');
            if (valor!=null) setUsuario(valor);
            else setUsuario('ERRO!');
          }
          teste();
        });
  return(
    <View>
      <Text> Área do Usuario</Text>
      <Text> Bem Vindo usuario: {JSON.stringify(username)}</Text>
      <Text>{usuario}</Text>
      <Button
        title='Cadastro Mensagem'
        onPress={()=>{
          navigation.navigate('Cadastro', {id_mensagem: 0});
        }
        }
      />
      <Button
        title='Mostrar'
        onPress={async()=>{
          let {data: teste, error } = await supabase.from('teste').select('*');
          if (error === null) {
            setDados (teste);
          }
        }}
      />
      {dados.map(linha=>{
        return(
          <Text key = {linha.id}
                onPress={()=>{
                  let chave= linha.id;
                  navigation.navigate('Cadastro,',{id_mensagem: chave});
                }}
          >
          {linha.mensagem}
          </Text>
        );
      })}  
    </View>
  );
}
