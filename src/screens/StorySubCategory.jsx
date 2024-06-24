import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const StorySubCategory = (props) => {
    const { params } = props?.route;
    const [storyList, setStoryList] = useState([]);
    const stories = [
        { id: '11', categoryId: '1', title: 'હાથી અને કીડી ની વાર્તાઓ', image: require('../../assets/1.png') },
        { id: '12', categoryId: '1', title: 'સિંહ ની વાર્તાઓ', image: require('../../assets/2.png') },
        { id: '13', categoryId: '1', title: 'બિલાડી અને કૂતરા ની વાર્તાઓ', image: require('../../assets/3.png') },
        { id: '14', categoryId: '2', title: '7 ઉંદર ની વાર્તાઓ', image: require('../../assets/4.png') },
    ];
    const navigation = useNavigation();

    useEffect(() => {
        if (params?.id) {
            const filterStory = stories.filter((story) => story.categoryId === params.id);
            setStoryList(filterStory);
        }
    }, [params?.id]);

    const StoryItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("StoryDetail", { id: item.id, title: item?.title })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={require('../../assets/seconScreen.png')} style={styles.bgstyle}>
            <View style={styles.container}>
                <FlatList
                    data={storyList}
                    renderItem={({ item }) => <StoryItem item={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgstyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 20,
        alignItems: 'center',
    },
    flatlistContent: {
        width: '100%',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#F9E79F',
        marginBottom: 10,
        borderRadius: 5,
        width: windowWidth - 20,
        maxWidth: 400,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginTop: 12,
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

export default StorySubCategory;
