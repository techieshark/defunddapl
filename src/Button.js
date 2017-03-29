// @flow

import React, { PropTypes } from 'react';
import { ColorPropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native'; // ImageSourcePropType,


import stylePropType from 'react-style-proptype';

import { px } from './styles';
import colors from './colors';

const localStyles = StyleSheet.create({
  emphasis: {
    paddingHorizontal: px(10), /* bigger button */
  },
  fullWidth: {
    paddingHorizontal: 0, /* full screen width button */
  },
  fitContent: {
    alignSelf: 'center',
  },
  buttonContainer: {
    // marginVertical: px(5),
    marginTop: px(8),
    backgroundColor: colors.primaryBackground,

  },
  button: {
    borderColor: colors.primaryTextColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    paddingVertical: px(15),
  },
  buttonText: {
    color: colors.primaryTextColor,
    textAlign: 'left',
    fontSize: px(23),
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontFamily: 'Futura-Bold',
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});


type Props = {
  accessibilityLabel: string,
  disabled?: boolean,
  emphasis?: boolean,
  fullWidth?: boolean,
  fitContent?: boolean,
  icon?: typeof PropTypes.element,
  onPress: () => any,
  backgroundColor?: string,
  backgroundColor?: ColorPropType,
  buttonStyle?: stylePropType.supportingArrays, // or stylePropType.supportingArrays
  textStyle?: stylePropType,
  title: string,
};

const defaultProps: Props = {
  accessibilityLabel: '',
  disabled: false,
  buttonStyle: undefined,
  backgroundColor: undefined,
  emphasis: false,
  fullWidth: false,
  fitContent: false,
  icon: undefined,
  onPress: () => {},
  textStyle: undefined,
  title: '',
};

function Button(props: Props) {
  let iconElement;
  if (props.icon) {
    iconElement = (
      <View style={localStyles.icon}>
        {props.icon}
      </View>
    );
  }

  return (
    <View
      style={[
        props.emphasis && localStyles.emphasis,
        props.fullWidth && localStyles.fullWidth,
        { alignSelf: 'stretch' },
        props.fitContent && localStyles.fitContent,
      ]}
    >
      <TouchableHighlight
        accessibilityLabel={props.accessibilityLabel}
        activeOpacity={0.5}
        disabled={props.disabled}
        onPress={props.onPress}
        style={[
          localStyles.buttonContainer,
          props.backgroundColor && { backgroundColor: props.backgroundColor },
        ]}
        underlayColor={colors.highlight}
      >
        <View
          style={[
            localStyles.button,
            props.buttonStyle && props.buttonStyle,
            props.disabled && { backgroundColor: colors.disabled },
          ]}
        >
          {
            props.icon && iconElement
          }
          <Text
            style={[
              localStyles.buttonText,
              props.textStyle && props.textStyle,
            ]}
          >
            {props.title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

Button.defaultProps = defaultProps;

export default Button;
