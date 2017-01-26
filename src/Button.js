// @flow

import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'; // ImageSourcePropType,

import stylePropType from 'react-style-proptype';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: colors.primary,
  },
  button: {
    // marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    // backgroundColor: '#333'
    // backgroundColor: '#191919',
    // borderColor: '#cdcdcd',
    // borderWidth: 1,
    // marginTop: 10,
    // marginHorizontal: 30,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'left',
    fontSize: 16,
    padding: 8,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  icon: {
    // width: 28,
    // height: 28,
    marginLeft: 10,
    marginRight: 10,
  },
});


type Props = {
  accessibilityLabel: string,
  disabled?: boolean,
  icon?: typeof React.PropTypes.element,
  onPress: () => any,
  backgroundColor?: string,
  buttonStyle?: stylePropType, // or stylePropTypes.supportingArrays
  textStyle?: stylePropType,
  title: string,
};
// see also Button.propTypes below

function Button(props: Props) {
  let iconElement;
  if (props.icon) {
    iconElement = (
      <View style={styles.icon}>
        {props.icon}
      </View>
    );
  }

  return (
    <TouchableHighlight
      accessibilityLabel={props.accessibilityLabel}
      activeOpacity={0.5}
      disabled={props.disabled}
      onPress={props.onPress}
      // style={styles.button} // { backgroundColor: colors.primary, marginTop: 10 }
      style={[
        styles.container,
        props.backgroundColor && { backgroundColor: props.backgroundColor },
      ]}
      underlayColor={colors.highlight}
    >
      <View
        style={[
          styles.button,
          props.buttonStyle && props.buttonStyle,
          props.disabled && { backgroundColor: colors.disabled },
        ]}
      >
        {
          props.icon && iconElement
        }
        <Text
          style={[
            styles.buttonText,
            props.textStyle && props.textStyle,
          ]}
        >
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: React.PropTypes.element,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  buttonStyle: stylePropType, // or stylePropTypes.supportingArrays
  textStyle: stylePropType,
  title: PropTypes.string.isRequired,
};

export default Button;
