import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Drawer, Avatar, Title, Caption, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../controller/Firebase';


//All credits goes to Pradip Debnath
//https://github.com/itzpradip
//https://www.youtube.com/watch?v=ayxRtBHw754


export default function DrawerContent({navigation}, ...props) {


    return(
        <View style={{flex:1}} backgroundColor = '#2d3042'>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.pinimg.com/originals/96/b9/98/96b9986f4d3b256cf889f5ae4202ac2f.jpg'
                                }}
                                size={80}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                            <Title style={styles.title}>{props.name}</Title>
                            <Caption style={styles.caption}>{props.description}</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>

                            <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>{props.sessions}</Paragraph>
                                <Caption style={styles.caption}>sessions</Caption>
                            </View>
                            <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>{props.friends}</Paragraph>
                                <Caption style={styles.caption}>friends</Caption>
                            </View>

                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Home"
                            onPress={()=>props.navigation.navigate('Home')}
                        />
                    </Drawer.Section>

                        <Text style={styles.submenuTitle}>Tools</Text>

                    <Drawer.Section>

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Name Generator"
                            onPress={()=> props.navigation.navigate('Name Generator')}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Roll Dices"
                            onPress={()=> props.navigation.navigate("Test")}
                        />

                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Sketch"
                            onPress={()=>props.navigation.navigate('Sketch')}
                        />
                    </Drawer.Section>

                    <Text style={styles.submenuTitle}>Settings</Text>

                    <Drawer.Section>
                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Details"
                            onPress={()=>props.navigation.navigate('Details')}
                        />
                        <DrawerItem
                            labelStyle = {{color: 'white'}}
                            label="Sign out"
                            onPress={() => {

                            firebase
                                .auth()
                                .signOut()
                                .then(() => {
                                    //navigation.goBack(null);
                                    navigation.navigate("Login");
                                    alert("Successfully logged out!");
                                }).catch(error => alert("Ops, error: " + error));

                            }}
                        />
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      //backgroundColor: 'red',
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: 'white',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: 'white',
      
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
      color: 'red',
      
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      color: 'red',
      
    },
    drawerSection: {
      marginTop: 15,

      //backgroundColor: 'red',
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        color: 'red',

        //backgroundColor: 'red',
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
      //color: 'white',
    },
    submenuTitle: {
        marginLeft: 15,
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white',
    }
  });