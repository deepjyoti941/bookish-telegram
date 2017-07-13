// import library for making Component
import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a component
export default class AlbumList extends Component {

  state = { albumbs: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albumbs: response.data}));
  }

  renderAlbums() {
    return this.state.albumbs.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {

}

// Make the component available to other parts of the app
