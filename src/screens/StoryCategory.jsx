import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StoryCategory = ({ navigation }) => {

    const stories = [
        { id: '1', title: '૫શુ ની કહાનીઓ', image: require('../../assets/1.png') },
        { id: '2', title: 'પક્ષી ની કહાનીઓ', image: require('../../assets/2.png') },
        { id: '3', title: 'રાજા ની કહાનીઓ', image: require('../../assets/3.png') },
        { id: '4', title: 'મિત્ર ની કહાનીઓ', image: require('../../assets/4.png') },
        // Add more stories as needed
    ];

    const StoryItem = ({ item, navigation }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("StorySubCategory", { id: item.id, title: item?.title })}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Image source={require('../../assets/arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
    );
    return (
        <ImageBackground source={require('../../assets/seconScreen.png')} style={styles.bgstyle}>
            <View style={styles.container}>
                <FlatList
                    data={stories}
                    renderItem={({ item }) => <StoryItem item={item} navigation={navigation} />}
                    keyExtractor={item => item.id.toString()}
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

export default StoryCategory;
