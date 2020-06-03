import * as React from 'react';
import { Appbar } from 'react-native-paper';
import styles from '../styles/styles';


export default class CustomAppBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const canUserGoBack = this.props.backIsVisible;

        return (canUserGoBack ?
        
            <Appbar.Header style={styles.headerAppBar}>
                <Appbar.BackAction
                    onPress={() => alert("hm...")}
                />
                <Appbar.Content
                    title= {this.props.title}
                    subtitle={this.props.subtitle}
                />
                <Appbar.Action icon="dots-vertical" onPress={() => alert("Not working yet")} />
            </Appbar.Header>
        
                :
        
            <Appbar.Header style={styles.headerAppBar}>
                <Appbar.Content
                    title= {this.props.title}
                    subtitle={this.props.subtitle}
                />
                <Appbar.Action icon="dots-vertical" onPress={() => alert("Not working yet")} />
            </Appbar.Header>
        );
   }
}