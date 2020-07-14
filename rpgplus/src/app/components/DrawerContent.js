import React from 'react';
import {View, Text, Alert, ToastAndroid} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../controller/Firebase';
import 'firebase/firestore';
import styles from '../style/styles';
import colors from '../style/colors';
import {translate} from '../locales/localeConfig';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//All credits goes to Pradip Debnath
//https://github.com/itzpradip
//https://www.youtube.com/watch?v=ayxRtBHw754

export default function DrawerContent(props) {

    const user = firebase.auth().currentUser;
    
    return(
        <View style={{flex:1}} backgroundColor = {colors.lightTheme}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.drawerUserInfoSection}>

                        <View style={{flexDirection: 'row', marginTop: 15}}>

                            <Avatar.Image
                                source={{
                                    uri: user.photoURL ? user.photoURL : 'https://simpleicon.com/wp-content/uploads/user1.png'
                                }}
                                size={80}
                            />
                            
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.drawerTitle}>{user.displayName}</Title>
                                <Caption style={styles.drawerCaption}>{user.email}</Caption>  
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerHome')}
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </Drawer.Section>

                        <Text style={styles.drawerSubmenuTitle}>{translate('drawerTools')}</Text>

                    <Drawer.Section>

                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerNameGenerator')}
                            onPress={()=> props.navigation.navigate('Name Generator')}
                        />

                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerRollDices')}
                            onPress={()=> props.navigation.navigate("Roll Dices")}
                        />

                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerCreateDraft')}
                            onPress={()=>props.navigation.navigate('Create Draft')}
                        />

                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerMyDrafts')}
                            onPress={()=>props.navigation.navigate('List Drafts')}
                        />
                    </Drawer.Section>

                    <Text style={styles.drawerSubmenuTitle}>{translate('drawerSettings')}</Text>

                    <Drawer.Section>
                        
                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerPreferences')}
                            onPress={()=>props.navigation.navigate('Preferences')}
                        />

                        <DrawerItem
                            labelStyle = {{color: colors.black}}
                            label={translate('drawerSignOut')}
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