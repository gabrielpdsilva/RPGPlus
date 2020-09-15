import React, { Component } from 'react';
import {
    Text,
    View,
    ToastAndroid,
    ScrollView
} from 'react-native';
import CustomAppBar from '../components/CustomAppBar';
import styles from '../style/styles';
import colors from '../style/colors';
import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';
import AwesomeButton from "react-native-really-awesome-button";
import { Hoshi } from 'react-native-textinput-effects';

//useful link about user collection on firestore
//https://www.youtube.com/watch?v=qWy9ylc3f9U

export default class DraftCreateScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            system: '',
            text: '',
        }
    }

    //add draft to firestore
    handleCreate = () => {

        if(this.state.name == '' || this.state.category == '' || this.state.system == '' || this.state.text == '' ){
            alert(translate('alertCreateDraftAllFields'));
            return;
        }

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        //draft collection reference
        const collectionRef = dbh.collection("users").doc(user.uid).collection("drafts");

        collectionRef.get().then(snap => {
            if(snap.size >= 10){
                alert(translate('alertCreateDraftReachedMaximum'));
                return;
            }

            //create a draft to the doc of the user collection
            collectionRef.add({ //add is used so Firestore can generate a unique ID to the doc

                name: this.state.name,
                category: this.state.category,
                system: this.state.system,
                text: this.state.text,
    
            }).then((docRef) => {
                ToastAndroid.show(translate('toastCreateDraftCreated'), ToastAndroid.SHORT);
    
                //set all states to ''
                this.setState({name: '', category: '', system: '', text: ''});

                this.props.navigation.navigate("Home");
    
            }).catch((error) => {
                alert(translate('alertCatchError') + error);
            });

        }); 
    }
   
    render(){

        const name =  this.state.name;
        const category = this.state.category;
        const system = this.state.system;
        const text = this.state.text;

        return(

            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarCreateDraft')} subtitle="" navigation={this.props.navigation}/>
                
                    <ScrollView style={{marginTop: 8}}>

                        <View style={styles.cardBackground}>

                            <Text style={styles.title}>{translate('createDraftTitle')}</Text>
                            <Text style={styles.text}>{translate('createDraftSubtitle')}</Text>

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('createDraftName')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={50}
                                value={name}
                                onChangeText={(txt) => this.setState({name: txt})}
                            />

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('createDraftCategory')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={50}
                                value={category}
                                onChangeText={(txt) => this.setState({category: txt})}
                            />

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('createDraftSystem')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={50}
                                value={system}
                                onChangeText={(txt) => this.setState({system: txt})}
                            />

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('createDraftTextBox')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={1000}
                                height={80}
                                textAlignVertical = 'top'
                                paddingTop = {10}
                                multiline
                                onChangeText={(txt) => this.setState({text: txt})}
                            />

                        </View>

                        <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

                            <AwesomeButton
                                backgroundColor={colors.blue}
                                backgroundDarker={colors.darkBlue}
                                backgroundShadow={colors.lightGray}
                                progress
                                width={340}
                                onPress={next => {
                                    this.handleCreate();
                                    next();
                                }}
                            >
                                {translate('createDraftBtnCreate')}
                            </AwesomeButton>

                        </View>
                        
                    </ScrollView>
            </View>
        );
    }
}