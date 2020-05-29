import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class CustomAppBar extends React.Component {

    render() {
        return (
            
        <Appbar.Header>
            <Appbar.BackAction
            onPress={() => alert("...")}
            />
            <Appbar.Content
            title= {this.props.title}
            subtitle={this.props.subtitle}
            />
            <Appbar.Action icon="magnify" onPress={() => alert("hm?")} />
            <Appbar.Action icon="dots-vertical" onPress={() => alert("dots?")} />
        </Appbar.Header>
        );
    }
}