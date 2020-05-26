import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

//https://blog.rocketseat.com.br/scroll-infinito-no-react-native/

export default class ListTestScreen extends Component {
    state = {
        data: [
          { id: 0, name: 'Repo 1', category: 'Hm...', system: '', text: ''},
          { id: 1, name: 'Repo 2', category: '...', system: '', text: ''},
          { id: 2, name: 'Repo 3', category: 'O.O...' , system: '', text: ''},
        ],
      };
    
      renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.textItem}>Id: {item.id}</Text>
            <Text style={styles.textItem}>Name: {item.name}</Text>
            <Text style={styles.textItem}>Category: {item.category}</Text>
            <Text style={styles.textItem}>System: {item.system}</Text>
            <Text style={styles.textItem}>Text: {item.text}</Text>
        </View>
      );

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>List Test screen</Text>
                <Text style={styles.text}>...</Text>
                
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}

/*

function Item({ title, name }) {
return (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{name}</Text>
    </View>
);
}

<FlatList
                    data={DATA}
                    renderItem={({ item, name }) => <Item title={item.title} name={item.name}/>}
                    keyExtractor={item => item.id}
                />

*/

const styles = StyleSheet.create({

    list: {
        paddingHorizontal: 20,
    },
    
    listItem: {
        backgroundColor: '#f75605',
        width: 250,
        marginVertical: 2,
        marginHorizontal: 2,
    },

    textItem: {
        color: 'white',
        margin: 5,
        fontSize: 15,
    },

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