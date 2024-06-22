import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';

const StoryItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
    </TouchableOpacity>
);

const StoryDetails = (props) => {
    const { params } = props?.route
    console.log(params)
    const [storyDetails, setStoryDetails] = useState({})

    const stories = [
        { id: '11', categoryId: '1', name: 'એક સમયે એક બળવાન હાથી રહેતો હતો.  તેને તેની શક્તિ અને કદ પર ખૂબ ગર્વ હતો, અને તે ઘણીવાર જંગલના અન્ય પ્રાણીઓને તેના વિશે બડાઈ મારતો હતો.', image: require('../../assets/1.png') },
    ];


    useEffect(() => {
        if (params?.id) {
            const filterStory = stories?.length > 0 && stories?.find((story) => story?.id === params?.id)
            setStoryDetails(filterStory)
        }
    }, [params?.id])

    return (
        <View>
            <View>
                <Image source={require('../../assets/seconScreen.png')} />
            </View>
            <View style={styles.container}>
              <View style={styles.itemContainer}><Text>{storyDetails?.name}</Text></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        padding: 30
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F9E79F',
        marginBottom: 10,
        borderRadius: 5,
        width: 300
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
export default StoryDetails
