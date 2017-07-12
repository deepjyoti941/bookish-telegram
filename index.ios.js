
// Import a library to help create a Component
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';

// Create a component
export default class App extends Component {
  render() {
    return (
      <Header headerText={'Albumbs!'}/>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albumbs', () => App);
