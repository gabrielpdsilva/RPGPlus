import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class CustomAppBar extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => alert("back?")}
        />
        <Appbar.Content
          title="Title"
          subtitle="Subtitle"
        />
        <Appbar.Action icon="magnify" onPress={() => alert("hm?")} />
        <Appbar.Action icon="dots-vertical" onPress={() => alert("dots?")} />
      </Appbar.Header>
    );
  }
}