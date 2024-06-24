import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import StoryCategory from './src/screens/StoryCategory';
import StorySubCategory from './src/screens/StorySubCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryDetails from './src/screens/StoryDetails';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Story" component={StoryCategory} options={({ route }) => ({
          title: "વાર્તાઓ",
          headerStyle: {
            backgroundColor: '#F9E79F',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })} />
        <Stack.Screen name="StorySubCategory" component={StorySubCategory} options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#F9E79F',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        })} />
        <Stack.Screen name="StoryDetail" component={StoryDetails} options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#F9E79F',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
