import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



const StoryCategory = () => {
    const navigate = useNavigation()

    const stories = [
        { id: '1', title: '૫શુ ની કહાનીઓ', image: require('../../assets/1.png') },
        { id: '2', title: 'પક્ષી ની કહાનીઓ', image: require('../../assets/2.png') },
        { id: '3', title: 'રાજા ની કહાનીઓ', image: require('../../assets/3.png') },
        { id: '4', title: 'મિત્ર ની કહાનીઓ', image: require('../../assets/4.png') },
    ];
    const StoryItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={()=>navigate.navigate('StorySubCategory',{id:item.id})}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
    );
    return (
        <View>
            <View>
                <Image source={require('../../assets/seconScreen.png')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={stories}
                    renderItem={({ item }) => <StoryItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:"absolute",
        padding:30
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F9E79F',
        marginBottom: 10,
        borderRadius: 5,
        width:300
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    arrow: {
        width: 20,
        height: 20,
    },
});
export default StoryCategory
