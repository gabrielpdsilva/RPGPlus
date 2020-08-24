import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';
import colors from '../style/colors';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';

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
                //toast a message
                ToastAndroid.show(translate('toastCreateDraftCreated'), ToastAndroid.SHORT);
    
                //set all states to ''
                this.setState({name: '', category: '', system: '', text: ''});
    
                //goes to home screen
                this.props.navigation.navigate("Home");
    
            }).catch((error) => {
                alert(translate('alertCatchError') + error);
            });

        }); 
    }
   
    render(){

        return(

            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarCreateDraft')} subtitle="" navigation={this.props.navigation}/>

                <View style={styles.childContainer}>
                
                    <ScrollView style={{marginTop: 14}}>

                        <Text style={styles.title}>{translate('createDraftTitle')}</Text>
                        <Text style={styles.text}>{translate('createDraftSubtitle')}</Text>
        
                        <View style={styles.inputForm}>

                            <View style={{marginTop: 14}}>

                                <Text style={styles.inputTitle}>{translate('createDraftName')}</Text>
                                <TextInput
                                    style={styles.textInput}
                                    value={this.state.name}
                                    onChangeText={(txt) => this.setState({name: txt})}
                                    placeholder = {translate('createDraftNamePlaceholder')}
                                    placeholderTextColor = {colors.darkGray}
                                />

                            </View>

                            <View style={{marginTop: 14}}>
                                    
                                <Text style={styles.inputTitle}>{translate('createDraftCategory')}</Text>
                                <TextInput
                                    style={styles.textInput}
                                    value={this.state.category}
                                    onChangeText={(txt) => this.setState({category: txt})}
                                    placeholder = {translate('createDraftCategoryPlaceholder')}
                                    placeholderTextColor = {colors.darkGray}
                                />
                                    
                            </View>

                            <View style={{marginTop: 14}}>

                                <Text style={styles.inputTitle}>{translate('createDraftSystem')}</Text>
                                <TextInput
                                    style={styles.textInput}
                                    value={this.state.system}
                                    onChangeText={(txt) => this.setState({system: txt})}
                                    placeholder = {translate('createDraftSystemPlaceholder')}
                                    placeholderTextColor = {colors.darkGray}
                                />

                            </View>
                        
                            <View style={{marginTop: 14}}>
                                    
                                <Text style={styles.inputTitle}>{translate('createDraftTextBox')}</Text>
                                <TextInput
                                    multiline = {true}
                                    height = {70}
                                    textAlignVertical = 'top'
                                    style={styles.textInputBox}
                                    value={this.state.text}
                                    onChangeText={(txt) => this.setState({text: txt})}
                                    placeholder = {translate('createDraftTextBoxPlaceholder')}
                                    placeholderTextColor = {colors.darkGray}
                                />
                                    
                            </View> 

                        </View>

                        <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>
                
                            <TouchableOpacity onPress={this.handleCreate} style={styles.button} disabled={this.state.isButtonDisabled}>
                                <Text style={styles.buttonText}>{translate('createDraftBtnCreate')}</Text>
                            </TouchableOpacity>

                        </View>
                        
                    </ScrollView>

                </View>

            </View>
        );
    }
}