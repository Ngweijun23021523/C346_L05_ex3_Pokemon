import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image,Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
    {
        data: [
            {key:'Rattata',image:require('./img/rattata.png')},
            {key:'Raticate',image:require('./img/Raticate.png')}

        ],
        title: "Norma   l",
        bgcolor: "grey",
        iconName: "star",
    },
    {
        data: [
            {key:'Growlithe',image:require('./img/Growlithe.png')},
            {key:'Arcanine',image:require('./img/Arcanine.png')},
        ],
        title: "Fire",
        bgcolor: 'red',
        iconName:'fire',
        backgroundcolor:'lightred'

    }
];

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
        fontSize: 15,
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
        paddingTop:30
    },

    image:{
        width:300 ,
        height:300,
        alignSelf: 'right',
        resizeMode: 'contain',

    },
});

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button title="Add Pokemons" />
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

export default App;
