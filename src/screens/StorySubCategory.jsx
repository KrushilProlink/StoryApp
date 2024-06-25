import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const StorySubCategory = (props) => {
    const { params } = props?.route;
    const [storyList, setStoryList] = useState([]);

    const stories = [
        { id: '11', categoryId: '1', title: 'હાથી અને કીડી ની વાર્તાઓ', image: require('../../assets/subStoryImage/story1.png') },
        { id: '12', categoryId: '1', title: 'સિંહ ની વાર્તાઓ', image: require('../../assets/subStoryImage/story2.png') },
        { id: '13', categoryId: '1', title: 'બિલાડી અને કૂતરા ની વાર્તાઓ', image: require('../../assets/subStoryImage/story3.png') },
        { id: '14', categoryId: '1', title: 'ઉંદર અને સિંહ  ની વાર્તાઓ', image: require('../../assets/subStoryImage/story4.png') },
        { id: '15', categoryId: '1', title: 'વાંદરો અને બિલાડી  ની વાર્તાઓ', image: require('../../assets/subStoryImage/story5.png') },
        { id: '16', categoryId: '2', title: 'પોપટ ની વાર્તા', image: require('../../assets/subStoryImage/story6.png') },
        { id: '17', categoryId: '2', title: 'સાત ચકલી ની વાર્તા', image: require('../../assets/subStoryImage/story7.png') },
        { id: '18', categoryId: '2', title: 'મોર ની વાર્તા', image: require('../../assets/subStoryImage/story8.png') },
        { id: '19', categoryId: '2', title: 'ચકી બેન અને એના બચ્ચા', image: require('../../assets/subStoryImage/story9.png') },
        { id: '20', categoryId: '2', title: 'બે બતક ની વાર્તા', image: require('../../assets/subStoryImage/story10.png') },
        { id: '21', categoryId: '2', title: 'શાહમૃગ ની વાર્તા', image: require('../../assets/subStoryImage/story11.png') },
        { id: '22', categoryId: '3', title: 'અકબર અને બીરબલ  ની વાર્તા', image: require('../../assets/subStoryImage/story13.png') },
        { id: '23', categoryId: '3', title: 'એક નાનકડા ગામમાં ', image: require('../../assets/subStoryImage/story14.png') },
        { id: '24', categoryId: '3', title: 'બે રાજકુમાર ની વાર્તા ', image: require('../../assets/subStoryImage/story15.png') },
        { id: '25', categoryId: '3', title: 'રાજા રાણી ની વાર્તા', image: require('../../assets/subStoryImage/story16.png') },
        { id: '26', categoryId: '3', title: 'ખેડૂત અને  ગાય વાર્તા', image: require('../../assets/subStoryImage/story17.png') },
        { id: '27', categoryId: '3', title: 'રાજા ના મહેલ માં હુમલો થયો', image: require('../../assets/subStoryImage/story18.png') },
        { id: '28', categoryId: '3', title: 'રાજા શિકાર પર ગયા', image: require('../../assets/subStoryImage/story19.png') },
        { id: '29', categoryId: '4', title: '૫ મિત્રની વાર્તા', image: require('../../assets/subStoryImage/story20.png') },
        { id: '30', categoryId: '4', title: 'બે પાક્કા મિત્ર ', image: require('../../assets/subStoryImage/story21.png') },
        { id: '31', categoryId: '4', title: 'બે પાક્કા મિત્ર ની વાર્તા ', image: require('../../assets/subStoryImage/story22.png') },
        { id: '32', categoryId: '4', title: 'સ્કૂલ ફ્રેન્ડ ની વાર્તા', image: require('../../assets/subStoryImage/story23.png') },
        { id: '33', categoryId: '4', title: 'ફરેન્ડશીપ મસ્તી', image: require('../../assets/subStoryImage/story24.png') },
        { id: '34', categoryId: '4', title: 'બે મિત્ર અને વાંદરો', image: require('../../assets/subStoryImage/story25.png') },
        { id: '35', categoryId: '4', title: 'પિકનિક મિત્ર સાથે', image: require('../../assets/subStoryImage/story26.png') },
    ];
    const navigation = useNavigation();

    useEffect(() => {
        if (params?.id) {
            const filterStory = stories.filter((story) => story.categoryId === params.id);
            setStoryList(filterStory);
        }
    }, [params?.id]);

    const StoryItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("StoryDetail", { id: item?.id, title: item?.title })}>
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
