import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      name: '1...'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      name: '2...'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      name: '3...'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Another Item',
        name: '4...'
      },
    
];

function Item({ title, name }) {
return (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{name}</Text>
    </View>
);
}

export default class ListTestScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>List Test screen</Text>
                <Text style={styles.text}>...</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item, name }) => <Item title={item.title} name={item.name}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    item: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
    width: 250,
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    text: {
    color: 'white',
    margin: 5,
    fontSize: 15,
    textAlign: 'center'
    },
});