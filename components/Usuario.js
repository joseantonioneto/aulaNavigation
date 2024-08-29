import{Text, View, Button} from 'react-native';

export default function Usuario({route, navigation}){
  const {username} = route.params;
  return(
    <View>
      <Text> Área do Usuario</Text>
      <Text> Bem Vindo usuario: {JSON.stringify(username)}</Text>
    </View>
  );
}
