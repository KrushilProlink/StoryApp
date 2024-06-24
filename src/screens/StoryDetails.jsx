import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StoryDetails = () => {
    const [storyDetails, setStoryDetails] = useState({});
    const id = "11";
    const stories = [
        {
            id: '11',
            categoryId: '1',
            name: "હાથી અને કીડી ની વાર્તાઓ",
            description: "એક સમયે એક બળવાન હાથી રહેતો હતો. તેને તેની શક્તિ અને કદ પર ખૂબ ગર્વ હતો, અને તે ઘણીવાર જંગલના અન્ય પ્રાણીઓને તેના વિશે બડાઈ મારતો હતો.\n\nએક દિવસ, જ્યારે હાથી જંગલમાંથી પસાર થઈ રહ્યો હતો, \."
        }
    ];

    useEffect(() => {
        if (id) {
            const filterStory = stories?.find((story) => story?.id === id);
            setStoryDetails(filterStory);
        }
    }, [id]);

    return (
        <ImageBackground source={require('../../assets/seconScreen.png')} style={styles.bgstyle}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.itemContainer}>
                    <Text style={styles.descriptionText}>{storyDetails?.description}</Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgstyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        backgroundColor: '#F9E79F',
        borderRadius: 5,
        padding: 15,
        width: windowWidth - 20,
        maxWidth: 400,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 24, // Adjust line height as needed
    },
});

export default StoryDetails;
