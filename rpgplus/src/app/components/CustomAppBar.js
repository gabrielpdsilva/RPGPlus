import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../style/styles';

export default class CustomAppBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const canUserGoBack = this.props.backIsVisible;

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
                <Appbar.Content
                    title= {this.props.title}
                    subtitle={this.props.subtitle}
                />
            </Appbar.Header>
        );
   }
}