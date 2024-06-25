import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'; // Import StatusBar from expo-status-bar
import HomeScreen from './src/screens/HomeScreen';
import StoryCategory from './src/screens/StoryCategory';
import StorySubCategory from './src/screens/StorySubCategory';
import StoryDetails from './src/screens/StoryDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Story"
            component={StoryCategory}
            options={{
              title: "વાર્તાઓ",
              headerStyle: {
                backgroundColor: '#F9E79F',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="StorySubCategory"
            component={StorySubCategory}
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: '#F9E79F',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name="StoryDetail"
            component={StoryDetails}
            options={({ route }) => ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: '#F9E79F',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
