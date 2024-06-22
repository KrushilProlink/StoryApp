import { Image, Text, View,TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigate = useNavigation()
  return (
    <View>
      <View>
      <Image source={require('../../assets/homeScreen.png')}/>
      <Image source={require('../../assets/homeScreen2.png')} style={{position:"absolute",bottom:100,left:45}}/>
     <View style={{position:"absolute",bottom:215,left:80}}>
     <TouchableOpacity style={{flexDirection:"row",alignItems:'center',fontSize:45}} className="font-bold" onPress={()=>navigate.navigate("Story")}>
      START <FontAwesome name="play" size={45} color="black" style={{marginLeft:15}}/>
     </TouchableOpacity>
     </View>
    </View>
    </View>
  )
}

export default HomeScreen
