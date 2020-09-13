import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';

//Useful links:
//https://blog.rocketseat.com.br/scroll-infinito-no-react-native/
//https://stackoverflow.com/questions/53861022/rendering-react-components-mapped-from-firebase-firestore

//Removing listener now is working, thanks to this link:
//https://stackoverflow.com/questions/56964647/how-to-stop-listening-for-fetching-chat-messages-when-users-sign-out-in-firebase

export default class DraftListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            userHasDrafts: false,
        };
    }

    listenForDrafts = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        this.docsListener = dbh.collection("users").doc(user.uid).collection("drafts").onSnapshot((snapshot) => {

            //if user has no docs
            if(snapshot.empty){
                this.setState({loading: false, userHasDrafts: false}); //loading circle will be removed, message of no drafts will be displayed
                return;
            }

            const datas = [];

            snapshot.forEach(doc => {
                datas.push({
                    id: doc.id,
                    name: doc.data().name,
                    category: doc.data().category,
                    system: doc.data().system,
                    text: doc.data().text,
                });
            });
        
            this.setState({
                data: datas,
                loading: false,
                userHasDrafts: true
            });
        })
    }

    componentDidMount = () => {
        this.listenForDrafts();
    }

    componentWillUnmount = () => {
        this.docsListener();
    }

    onClickItem = (item) => {
        //navigates to draft model and send the ID of the item to the new screen
        this.props.navigation.navigate("Draft Model", {itemId: item.id});
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onClickItem(item)}>
            <View style={styles.cardItem}>

                <View style={{marginTop: 5}}>

                    <Text style={styles.itemTitle}>{translate('listDraftsName')}</Text>
                    <Text style={styles.itemText}>{item.name}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.itemTitle}>{translate('listDraftsCategory')}</Text>
                    <Text style={styles.itemText}>{item.category}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.itemTitle}>{translate('listDraftsSystem')}</Text>
                    <Text style={styles.itemText}>{item.system}</Text>

                </View>

                <View style={{marginTop: 5}}>

                    <Text style={styles.itemTitle}>{translate('listDraftsText')}</Text>
                    <Text style={styles.itemText}>{item.text}</Text>

                </View>

            </View>
        </TouchableOpacity>
    );

    render(){
        let loading = this.state.loading;
        let userHasDrafts = this.state.userHasDrafts;

        if (loading) {
            return(
                <View style={styles.container}>
                    
                    <CustomAppBar title={translate('appBarListDrafts')} subtitle="" navigation={this.props.navigation}/>
                    
                    <View style={styles.childContainer}>
                        <ActivityIndicator size="large" color={colors.purple}/>
                    </View>
                
                </View>
            );
        }

        return (

            userHasDrafts ?

                <View style={styles.container}>
                    
                    <CustomAppBar title={translate('appBarListDrafts')} subtitle="" navigation={this.props.navigation}/>
    
                    <SafeAreaView style={{flex: 1}}>
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView >
                </View>
                
            :
                
                <View style={styles.container}>
                    
                    <CustomAppBar title={translate('appBarListDrafts')} subtitle="" navigation={this.props.navigation}/>

                   <Text style={styles.text}>{translate('listDraftNoDrafts')}</Text>

                </View>

        )
        
    }
}