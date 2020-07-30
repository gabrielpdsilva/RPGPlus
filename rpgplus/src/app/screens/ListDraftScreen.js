import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';

//Useful links:
//https://blog.rocketseat.com.br/scroll-infinito-no-react-native/
//https://stackoverflow.com/questions/53861022/rendering-react-components-mapped-from-firebase-firestore

export default class ListDraftScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            noDrafts: true,
        };
    }

    listenForDrafts = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        let docsRef = dbh.collection("users").doc(user.uid).collection("sketchs");

        docsRef.get().then((snapshot) => {

            //if user has no docs
            if(snapshot.empty){
                this.setState({loading: false, noDrafts: true}); //loading circle will be removed, message of no drafts will be displayed
                return;
            }
            //gets the docs and stores it inside the 'data' state
            snapshot.forEach((doc) => (
                this.setState((prevState) => ({
                    data: [...prevState.data, {
                        id: doc.id,
                        name: doc.data().name,
                        category: doc.data().category,
                        system: doc.data().system,
                        text: doc.data().text,
                    }]
                }))
            ))
            this.setState({loading: false, noDrafts: false}); //loading circle will be removed, message will not appear
        })
    }

    componentDidMount = () => {
        this.listenForDrafts();
    }
/*
    componentDidUpdate = () => {
        this.listenForDrafts();
    }
*/
    //when user clicks on item
    onClickItem = (item) => {
        //navigates to draft model and send the ID of the item to the new screen
        this.props.navigation.navigate("Draft Model", {itemId: item.id});
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onClickItem(item)}>
            <View style={styles.listItem}>

                <View style={{marginTop: 5}}>

                    <Text style={styles.draftListTitle}>{translate('listDraftsName')}</Text>
                    <Text>{item.name}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.draftListTitle}>{translate('listDraftsCategory')}</Text>
                    <Text>{item.category}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.draftListTitle}>{translate('listDraftsSystem')}</Text>
                    <Text>{item.system}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.draftListTitle}>{translate('listDraftsText')}</Text>
                    <Text>{item.text}</Text>

                </View>

            </View>
        </TouchableOpacity>
    );

    render(){
        let loading = this.state.loading;
        if (loading) {
            return(
                <View style={styles.container}>
                    
                    <CustomAppBar title={translate('appBarListDrafts')} subtitle="" navigation={this.props.navigation}/>
                    
                    <View style={styles.childContainer}>
                        <ActivityIndicator size="large"/>
                    </View>
                
                </View>
            );
        }

        return(
            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarListDrafts')} subtitle="" navigation={this.props.navigation}/>

                { this.state.noDrafts && <Text style={styles.text}>{translate('listDraftNoDrafts')}</Text> }

                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id} //need to fix this
                    />
                </ScrollView>
            </View>
        );
    }
}