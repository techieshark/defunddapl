import React, { PropTypes } from 'react';
import { Button as RNButton, StyleSheet, View } from 'react-native';

import stylePropType from 'react-style-proptype';

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: 'blue',
    marginTop: 10,
    // backgroundColor: '#333'
    // backgroundColor: '#191919',
    // borderColor: '#cdcdcd',
    // borderWidth: 1,
    // marginTop: 10,
    // marginHorizontal: 30,
  },
  button_container__disabled: {
    // backgroundColor: '#777',
    // backgroundColor: 'black',
    // backgroundColor: '#191919',
    backgroundColor: '#333',
    // backgroundColor: '#cdcdcd',
    // backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: '#cdcdcd',
    // borderColor: '#333',
  },
});

function Button(props) {
  return (
    <View
      style={
        [styles.button_container, props.style].concat(
        props.disabled ? [styles.button_container__disabled] : [])
      }
    >
      <RNButton
        color="white"
        onPress={props.onPress}
        title={props.title}
        disabled={props.disabled}
        accessibilityLabel={props.accessibilityLabel}
      />
    </View>
  );
}

Button.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: stylePropType, // or stylePropTypes.supportingArrays
  title: PropTypes.string.isRequired,
};

export default Button;
