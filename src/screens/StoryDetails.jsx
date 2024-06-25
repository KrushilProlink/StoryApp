import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StoryDetails = (props) => {
    const { params } = props?.route;

    const [storyDetails, setStoryDetails] = useState({});
    const id = "11";
    const stories = [
        {
            "id": 21,
            "storyId": "29",
            "title": "૫ મિત્રની વાર્તા",
            "image": require('../../assets/storyDetailsImage/storyDetails22.png'),
            "discrption": "એક સમયે, લીલી, એલેક્સ, માયા, ટોમ અને એમિલી નામના પાંચ શ્રેષ્ઠ મિત્રો હતા.  તેઓ બાળપણથી જ અવિભાજ્ય હતા, અને સમય જતાં તેમની મિત્રતા વધુ મજબૂત બની હતી.  તેઓ જાડા અને પાતળા દ્વારા હંમેશા એકબીજા માટે હતા. \n \n એક ઉનાળામાં, તેઓએ સાથે રોડ ટ્રિપ લેવાનું નક્કી કર્યું.  તેઓએ તેમની બેગ પેક કરી અને સુંદર ગ્રામ્ય વિસ્તારોની શોધખોળ માટે પ્રવાસ પર નીકળ્યા.  તેઓ રસ્તામાં વિવિધ મનોહર સ્થળોએ રોકાયા, ઘણાં બધાં ચિત્રો લીધાં અને ઘણી મજા કરી. \n \n એક સમયે, તેઓ પોતાને ગાઢ જંગલમાં ખોવાયેલા જોવા મળ્યા. તેઓ ક્યાં છે અથવા કેવી રીતે બહાર નીકળવું તેની તેમને કોઈ જાણ નહોતી.  તેઓ ગભરાવા લાગ્યા, પરંતુ પછી તેઓને યાદ આવ્યું કે તેઓ ગમે તેટલું ન હોવા છતાં કેવી રીતે હંમેશા સાથે રહે છે.  તેથી તેઓ હાથ પકડીને ચાલવા લાગ્યા, તેઓનો માર્ગ શોધવાની આશામાં. \n \n તેઓ ચાલતા જતા, તેઓએ શેર કરેલા બધા સારા સમય અને તેઓએ એકસાથે બનાવેલી બધી યાદો વિશે વાત કરી.  તેઓ હસ્યા અને મજાક કરી, તેમના આત્માને જાળવી રાખવાનો પ્રયાસ કર્યો.  છેવટે, તેઓએ આગળ પ્રકાશની ઝાંખી જોઈ, અને તેઓ તેની તરફ દોડ્યા. \n \n તેઓ થાકેલા અને પરસેવાથી લથબથ જંગલમાંથી બહાર આવ્યા પરંતુ બહાર નીકળવામાં રાહત અનુભવી.  તેઓએ એકબીજાને ચુસ્તપણે ગળે લગાવ્યા, તેમની મિત્રતા માટે આભારી અને એ હકીકત માટે કે તેઓ એકબીજાની પીઠ ધરાવે છે.  તેઓએ તેમની માર્ગ સફર ચાલુ રાખી, અને તેમ છતાં તેઓને રસ્તામાં થોડા વધુ પડકારોનો સામનો કરવો પડ્યો, તેઓએ તેમનો એકસાથે સામનો કર્યો અને પહેલા કરતા વધુ મજબૂત રીતે ઉભરી આવ્યા. \n \n વર્ષો પછી, તેઓ હજુ પણ શ્રેષ્ઠ મિત્રો તરીકે રહ્યા. તેઓ નવી યાદો બનાવવાનું ચાલુ રાખ્યું, પરંતુ તે રોડ ટ્રીપમાં તેઓએ બનાવેલી યાદોને તેઓ ક્યારેય ભૂલી શક્યા નહીં.  તેઓ જાણતા હતા કે જીવન તેમને ગમે ત્યાં લઈ જાય, તેઓ હંમેશા એકબીજા સાથે રહેશે."

        },
        {
            "id": 22,
            "storyId": "30",
            "title": "બે પાક્કા મિત્ર ની વાર્તા",
            "image": require('../../assets/storyDetailsImage/storyDetails23.png'),
            "discrption": "એક સમયે, રશેલ અને સારાહ નામના બે શ્રેષ્ઠ મિત્રો હતા.  તેઓ કિન્ડરગાર્ટનથી મિત્રો હતા અને દરેક બાબતમાં સાથે રહ્યા હતા.  તેઓ અવિભાજ્ય હતા, અને દરેકને ખબર હતી કે જ્યાં એક જાય છે, બીજો પાછળ નથી \n \n એક દિવસ, રશેલને કેટલાક ખરાબ સમાચાર મળ્યા: તેણીનો પરિવાર બીજા શહેરમાં જઈ રહ્યો હતો, અને તેણીએ તેના શ્રેષ્ઠ મિત્રને પાછળ છોડીને જવું પડશે.  રાહેલ અને સારાહ પણ બરબાદ થઈ ગઈ હતી.  તેઓ રડ્યા અને એકબીજાને ગળે લગાડ્યા, જવા દેવા માંગતા ન હતા. \n \n રશેલે સારાહને વચન આપ્યું હતું કે તેઓ સંપર્કમાં રહેશે અને તેઓ હંમેશા શ્રેષ્ઠ મિત્રો રહેશે, ભલે તેઓ ગમે તેટલા દૂર હોય.  સારાહે મજબૂત બનવાનો પ્રયત્ન કર્યો, પરંતુ તેણી તેની બાજુમાં રહેલ વિના જીવનની કલ્પના કરી શકતી નથી. \n \n જેમ જેમ દિવસો વીતતા ગયા તેમ તેમ રશેલ અને સારાહ ફોન કોલ્સ, ઈમેઈલ અને પત્રો દ્વારા સંપર્કમાં રહ્યા.  તેઓએ હંમેશાની જેમ એકબીજા સાથે બધું જ શેર કર્યું.  પરંતુ જેમ જેમ સમય પસાર થતો ગયો તેમ તેમ બંનેએ નવા મિત્રો બનાવવાનું શરૂ કર્યું અને નવી પ્રવૃત્તિઓમાં જોડાઈ ગયા.  તેઓ હજી પણ એકબીજા સાથે વાત કરતા હતા, પરંતુ તે પહેલાની જેમ વારંવાર નહોતું. \n \n એક દિવસ, સારાહને સમજાયું કે તેણીએ થોડા સમય માટે રશેલ સાથે વાત કરી નથી.  તેણીએ તેને બોલાવ્યો, પરંતુ રશેલે જવાબ આપ્યો નહીં.  સારાહ ચિંતિત હતી અને આશ્ચર્ય પામી હતી કે શું તેમની મિત્રતા ઓછી થવા લાગી છે.  તેણીએ રશેલને એક પત્ર લખવાનું નક્કી કર્યું, તેણીએ તેણીને કેટલું યાદ કર્યું અને તે કેવી રીતે તેમની મિત્રતા દૂર ન થાય તે વિશે તેણીના હૃદયને ઠાલવવાનું નક્કી કર્યું. \n \n રશેલને પત્ર મળ્યો અને સારાહના શબ્દોથી તેને સ્પર્શ થયો.  તેણીને સમજાયું કે તેણી તેમની મિત્રતાની અવગણના કરી રહી છે અને તે સારાહને એટલી જ યાદ કરે છે.  તેણીએ પાછા લખ્યું, દૂર રહેવા બદલ માફી માંગી અને સંપર્કમાં રહેવાનો પ્રયાસ કરવાનું વચન આપ્યું. \n \n  તે દિવસથી, રશેલ અને સારાહે જોડાયેલા રહેવા માટે નવેસરથી પ્રયાસ કર્યા.  તેઓએ એકબીજાને નિયમિતપણે ફોન કર્યો, તેમના નવા જીવનના ફોટા શેર કર્યા અને એકબીજાની મુલાકાત લેવાની યોજના પણ બનાવી.  તેમને સમજાયું કે અંતરનો અર્થ તેમની મિત્રતાનો અંત નથી અને તેઓ હંમેશા શ્રેષ્ઠ મિત્રો રહેશે, પછી ભલે જીવન તેમને ક્યાં લઈ જાય.",

        },
        {
            "id": 23,
            "storyId": "31",
            "title": "સ્કૂલ ફ્રેન્ડ ની વાર્તા",
            "image": require('../../assets/storyDetailsImage/storyDetails24.png'),
            "discrption": "એક સમયે, જેક અને સારાહ નામના બે શાળાના મિત્રો હતા.  તેઓ તેમના પ્રથમ-ગ્રેડના વર્ગમાં મળ્યા અને ઝડપથી શ્રેષ્ઠ મિત્રો બની ગયા.  રમતના મેદાનમાં રમવાથી લઈને પરીક્ષા માટે ભણવા સુધીનું બધું જ તેઓએ સાથે કર્યું. \n \n જેમ જેમ તેઓ મોટા થયા તેમ, જેક અને સારાહ એકબીજાની નજીક રહ્યા, તેમ છતાં તેઓ અલગ-અલગ રુચિઓ વિકસાવવા લાગ્યા.  જેકને રમતગમતમાં રસ પડ્યો, જ્યારે સારાહને સંગીત અને કલામાં વધુ રસ હતો.  પરંતુ તેમના મતભેદોએ તેમની મિત્રતાને માત્ર મજબૂત બનાવી, કારણ કે તેઓ એકબીજાના જુસ્સા અને પ્રતિભાની પ્રશંસા કરવાનું શીખ્યા. \n \n હાઈસ્કૂલમાં, જેક અને સારાહને નવા પડકારોનો સામનો કરવો પડ્યો.  તેઓ બંનેએ શૈક્ષણિક અને અભ્યાસેતર પ્રવૃત્તિઓના દબાણ તેમજ ઉચ્ચ શાળાની સામાજિક ગતિશીલતાનો સામનો કરવો પડ્યો હતો.  પરંતુ તેઓ હંમેશા એકબીજાની પીઠ ધરાવતા હતા, જ્યારે બીજાને તેની સૌથી વધુ જરૂર હોય ત્યારે ટેકો અને પ્રોત્સાહન આપતા હતા. \n \n જ્યારે કૉલેજ માટે અરજી કરવાનો સમય આવ્યો, ત્યારે જેક અને સારાહે અલગ-અલગ શાળાઓમાં જવાનું નક્કી કર્યું.  તેઓ જાણતા હતા કે અલગ રહેવું મુશ્કેલ હશે, પરંતુ તેઓ એ પણ જાણતા હતા કે તેમની મિત્રતા અંતરને ટકી શકે તેટલી મજબૂત હતી.  તેઓએ એકબીજાની મુલાકાત લેવાની અને ફોન કોલ્સ અને વીડિયો ચેટ દ્વારા સંપર્કમાં રહેવાની યોજના બનાવી. \n \n તેમના કૉલેજના વર્ષો દરમિયાન, જેક અને સારાહ એક વ્યક્તિ તરીકે આગળ વધતા રહ્યા, પરંતુ તેઓ તેમની મિત્રતાને ક્યારેય ભૂલી શક્યા નહીં.  તેઓએ તેમના નવા અનુભવો એકબીજા સાથે શેર કર્યા અને જ્યારે જરૂર પડે ત્યારે સલાહ અને સમર્થન આપ્યું.  જ્યારે તેઓ કૉલેજમાંથી સ્નાતક થયા, ત્યારે તેઓ બંને એકબીજાની સિદ્ધિઓ પર ગર્વ અનુભવતા હતા અને ભવિષ્યમાં જે આયોજન કરે છે તેના માટે ઉત્સાહિત હતા. \n \n વર્ષો પછી, જેક અને સારાહ શ્રેષ્ઠ મિત્રો રહ્યા.  તેઓ બંને તેમની કારકિર્દીમાં સફળ હતા અને તેમના પોતાના પરિવારો હતા, પરંતુ તેમ છતાં તેઓ એકબીજા સાથે વાત કરવા અને મુલાકાત લેવા માટે સમય કાઢતા હતા.  તેઓએ તેમના શાળાના વર્ષોને પ્રેમથી જોયા, તેઓએ બનાવેલી યાદો માટે અને સમયની કસોટી પર ખરી ગયેલી મિત્રતા માટે આભારી.",

        }

    ]
    useEffect(() => {
        if (params.id) {
            const filterStory = stories?.find((story) => story?.storyId === params.id);
            setStoryDetails(filterStory);
        }
    }, [params.id]);

    return (
        <ImageBackground source={require('../../assets/seconScreen.png')} style={styles.bgstyle}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {
                    storyDetails ?
                        <View style={styles.itemContainer}>
                            <Image source={storyDetails?.image} />
                            <Text style={styles.descriptionText} className="mt-3">{storyDetails?.discrption}</Text>
                        </View>
                        :
                        <View style={styles.itemContainer}>
                            <Text className="text-center">કોઈ વિગતો મળી નથી</Text>
                        </View>


                }
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
