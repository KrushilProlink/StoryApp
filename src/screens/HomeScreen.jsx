import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <ImageBackground source={require('../../assets/homeScreen.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: "center",
          width: 400
        }}>
        <View>
          <Image source={require('../../assets/homeScreen2.png')}
            style={{ marginTop: 310 }}
          />
          <View
            style={{ position: "absolute", bottom: 114, left: 40 }}
          >
            <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center' }} onPress={() => navigation.navigate('Story')}>
              <Text style={{ fontSize: 45, fontWeight: 'bold' }}>શરૂઆત</Text>
              <FontAwesome name="play" size={45} color="black" style={{ marginLeft: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
