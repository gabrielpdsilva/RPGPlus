import React, { useState } from 'react';
import {View, Text, Alert, ToastAndroid} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../controller/Firebase';
import 'firebase/firestore';
import styles from '../style/styles';

//All credits goes to Pradip Debnath
//https://github.com/itzpradip
//https://www.youtube.com/watch?v=ayxRtBHw754

export default function DrawerContent(props) {

    const [nickname, setNickname] = useState(null);

    const user = firebase.auth().currentUser;

    let userFirestoreRef = firebase.firestore().collection("users").doc(user.uid);

    userFirestoreRef.get()
    .then(doc => {
        if (!doc.exists) {
            alert("It seems that there is no document here!");
        } else {
            console.log('Document data:', doc.data());
            setNickname(doc.data().nickname);
        }
    })
    .catch(err => {
        console.log('Error getting document:\n' + err);
    });
    
    return(
        <View style={{flex:1}} backgroundColor = '#2d3042'>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.drawerUserInfoSection}>

                        <View style={{flexDirection: 'row', marginTop: 15}}>

                            <Avatar.Image
                                source={{
                                    uri: user.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                                }}
                                size={80}
                            />
                            
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.drawerTitle}>Name: {user.displayName}</Title>
                                <Title style={styles.drawerTitle}>Nickname: {nickname}</Title>
                                <Caption style={styles.drawerCaption}>{user.email}</Caption>  
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Home"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </Drawer.Section>

                        <Text style={styles.drawerSubmenuTitle}>Tools</Text>

                    <Drawer.Section>

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Name Generator"
                            onPress={()=> props.navigation.navigate('Name Generator')}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Roll Dices"
                            onPress={()=> props.navigation.navigate("Roll Dices")}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Create Draft"
                            onPress={()=>props.navigation.navigate('Create Draft')}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="My Drafts"
                            onPress={()=>props.navigation.navigate('List Drafts')}
                        />
                    </Drawer.Section>

                    <Text style={styles.drawerSubmenuTitle}>Settings</Text>

                    <Drawer.Section>
                        
                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Preferences"
                            onPress={()=>props.navigation.navigate('Preferences')}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Sign out"
                            onPress={() => {

                                Alert.alert(
                                    'Logout', //title
                                    'Are you sure you want to logout?', //message
                                    [
                                        {
                                            text: 'Cancel',
                                            onPress: () => ToastAndroid.show("Logout canceled.", ToastAndroid.SHORT),
                                            style: 'cancel'
                                        },
                                        {
                                            text: 'OK', onPress: () => {
                                                firebase
                                                    .auth()
                                                    .signOut()
                                                    .then(() => {

                                                    props.navigation.navigate("Login"); //goes to Login screen
                                                    ToastAndroid.show("Successfully logged out!", ToastAndroid.SHORT); //make a toast
                                                
                                                }).catch(error => alert("Ops, error: " + error));
                                            }
                                       }
                                    ],
                                    { cancelable: false }
                                  );
                            }}
                        />
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
           
        </View>
    );
}