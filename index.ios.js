
// Import a library to help create a Component
import React, { Component } from 'react';
import {
  View,
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albumbs!'}/>
        <AlbumList />
      </View>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albumbs', () => App);
