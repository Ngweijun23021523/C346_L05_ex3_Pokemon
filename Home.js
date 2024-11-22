import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { datasource } from './Data';


const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'lightgreen',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'right',
        fontWeight: 'bold',
        marginLeft:10,
        fontStyle: 'italic',

    },
    headerText: {
        fontSize: 20,
        margin: 10,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:20

    },
    iconStyle: {
        marginRight: 10
    },
    buttonContainer: {

        top: 0,
        width: '100%',
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'column',
        paddingTop:40

    },

    image:{
        width:300 ,
        height:300,
        alignSelf: 'right',
        resizeMode: 'contain',

    },
});


const Home = ({navigation}) => {

    const renderItem = ({ item,index,section }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() => {
                                  navigation.navigate('Edit', { index: index, type: section.title, key: item.key ,image:item.image });
                              }}
            >

                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };


    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemons"  onPress={() => navigation.navigate('Add')}/>
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor,iconName, } }) => (
                    <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                        <Icon name={iconName} size={20} color="#fff" style={styles.iconStyle} />

                        <Text style={styles.headerText}>{title}</Text>


                    </View>
                )}

            />
        </View>
    );
}

export default Home;
