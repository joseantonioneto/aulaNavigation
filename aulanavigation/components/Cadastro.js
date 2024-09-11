import { Input, Button, Text } from '@rneui/themed';
import {View} from 'react-native';
import {useState,useEffect} from 'react';
import supabase from '../database/database';

export default function Cadastro({route,navigation}) {
  const {id_mensagem} = route.params;
  const [mensagem,setMensagem] = useState('');
  const [processando,setProcessando] = useState(false);
  const [resultado,setResultado] = useState('');
  const [textoBotao,setTextoBotao] = useState('Cadastrar');
  const [data,setData] = useState([]);
  const [error,setError] = useState([]);
  useEffect(()=>{
    async function getDadosMensagem() {
        if (id_mensagem!=0) {
            let {data: teste,error } = await supabase
              .from('teste')
              .select('mensagem')
              .eq('id',id_mensagem);
            if (error===null) {
              setMensagem(teste[0].mensagem);
              setTextoBotao('Atualizar');
            }
            else {
              console.log('Erro no useEffect do Cadastro.js');
            }
        }
    }
    getDadosMensagem();
  },[]);
  return(
    <View>
      <Text h2>Cadastro de mensagens</Text>
      <Input
        placeholder='Digite a mensagem'
        onChangeText={setMensagem}
        defaultValue={mensagem}
      />
      <Button
        title={textoBotao}
        loading={processando}
        onPress={async ()=>{
            setProcessando(true);
            if (id_mensagem===0) { 
              
              const { data, error } = await supabase
                .from('teste')
                .insert([
                  { mensagem: mensagem },
                ])
                .select();
              setData(data);
              setError(error);
            }
            else { 
              
              const { data, error } = await supabase
                .from('teste')
                .update({ mensagem: mensagem })
                .eq('id', parseInt(id_mensagem))
                .select();
              setData(data);
              setError(error);
              console.log(data);
              console.log(error);
            }
            setProcessando(false);
            if (error===null) {
                if (id_mensagem==0) 
                  setResultado('Cadastro realizado com sucesso');
                else
                  setResultado('Atualização realizada com sucesso');
            }
            else {
              setResultado('ERRO!');
            }
          }
        }
      />
      <Text>{resultado}</Text>
    </View>
  );
}