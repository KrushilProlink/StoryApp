import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const StorySubCategory = (props) => {
    const { params } = props?.route
    const [storyList, setStoryList] = useState([])
    const navigate = useNavigation()

    const stories = [
        { id: '11', categoryId: '1', title: 'હાથી અને કીડી ની વાર્તાઓ', image: require('../../assets/1.png') },
        { id: '12', categoryId: '1', title: 'સિંહ ની વાર્તાઓ', image: require('../../assets/2.png') },
        { id: '13', categoryId: '1', title: 'બિલાડી અને કૂતરા ની વાર્તાઓ', image: require('../../assets/3.png') },
        { id: '14', categoryId: '2', title: '7 ઉંદર ની વાર્તાઓ', image: require('../../assets/4.png') },
    ];

   

    useEffect(() => {
        if (params?.id) {
            const filterStory = stories?.length > 0 && stories?.filter((story) => story?.categoryId === params?.id)
            setStoryList(filterStory)
        }
    }, [params?.id])

    const StoryItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={()=>navigate.navigate('StoryDetails',{id:item?.id})}>
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
                {
                    storyList?.length > 0 ?
                    <FlatList
                        data={storyList}
                        renderItem={({ item }) => <StoryItem item={item} />}
                        keyExtractor={item => item.id}
                    />
                    :
                    <View style={styles.itemContainer}>
                        <Text>No Story Found</Text>
                    </View>
                }
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
export default StorySubCategory
