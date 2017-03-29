// @flow

import React from 'react';
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native';

import colors from './colors';

/* A TextInput with customized style */

const localStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  textinput: {
    height: 40,
    paddingLeft: 5,
    fontFamily: 'Museo-700',
    color: '#5B5B5B', // TODO may not have enough contrast for low-viz users
  },
});

class TextInput extends RNTextInput {
  render() {
    return (
      <View style={localStyles.container}>
        <RNTextInput
          {...this.props}
          style={[localStyles.textinput, this.props.style]}
        />
      </View>
    );
  }
}

export default TextInput;
