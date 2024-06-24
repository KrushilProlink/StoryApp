import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import StoryCategory from '../screens/StoryCategory';
// import StorySubCategory from '../screens/StorySubCategory';
// import StoryDetails from '../screens/StoryDetails';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Story" component={StoryCategory} />
                    <Stack.Screen name="StorySubCategory" component={StorySubCategory} />
                    <Stack.Screen name="StoryDetails" component={StoryDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Navigation