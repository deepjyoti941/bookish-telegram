// import library for making Component
import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Make a component
export default class AlbumDetail extends Component {


  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.props.album.title}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = {

}

// Make the component available to other parts of the app
