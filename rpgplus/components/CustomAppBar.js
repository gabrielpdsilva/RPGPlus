import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default class CustomAppBar extends React.Component {

    render() {
        return (
            
        <Appbar.Header style={styles.header}>
            <Appbar.Content
                title= {this.props.title}
                subtitle={this.props.subtitle}
            />
            <Appbar.Action icon="dots-vertical" onPress={() => alert("dots?")} />
        </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f75605'
    },
});