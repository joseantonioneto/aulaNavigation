import{Text, View, Button} from 'react-native';

export default function Home ({navigation}){

  return(
  <View>
    <Text> Tela Principal </Text>
    <Button
      title='Autenticação'
      onPress={()=>{
        navigation.navigate('Autenticacao');
      }
      }
    />
  </View>
  );



}