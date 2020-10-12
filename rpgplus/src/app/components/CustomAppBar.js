/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

 import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../style/styles';

export default class CustomAppBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const canUserGoBack = this.props.backIsVisible;
        const isLogin = this.props.isLoginScreen; //if it is LoginScreen, dont show menu at the appbar to the user

        return (canUserGoBack ?
        
            <Appbar.Header style={styles.headerAppBar}>
                <Appbar.BackAction
                    onPress={() => this.props.navigation.goBack()}
                />
                <Appbar.Content
                    title= {this.props.title}
                    subtitle={this.props.subtitle}
                />
            </Appbar.Header>
        
                :
        
            <Appbar.Header style={styles.headerAppBar}>
                { !isLogin && <Appbar.Action icon="menu" onPress={() => this.props.navigation.openDrawer()} />}
                <Appbar.Content
                    title= {this.props.title}
                    subtitle={this.props.subtitle}
                />
            </Appbar.Header>
        );
   }
}