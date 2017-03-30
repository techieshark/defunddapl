
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

import photos from './photos';

// Photo gallery component to embed in any scene

const photoWidth = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);
const localStyles = StyleSheet.create({
  image: {
    height: photoWidth,
    width: photoWidth,
    resizeMode: 'contain',
    marginBottom: 20,

  // circular images
    // borderRadius: photoWidth / 2,
  },
});

// type Props = {};

function renderPhotos() {
  return photos.map(photo => (
    <Image source={photo.src} style={localStyles.image} key={photo.file} />
  ));
}

function Gallery(/* props: Props */) {
  const view = (
    <ScrollView>
      { renderPhotos() }
    </ScrollView>
  );
  return view;
  // return (
  //   <WebView
  //     source={{ uri: 'https://www.instagram.com/explore/tags/defunddapl/' }}
  //     style={{ marginTop: 20 }}
  //   />
  // );
}

export default Gallery;
