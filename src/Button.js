// @flow

import React, { PropTypes } from 'react';
import {
  ColorPropType, StyleSheet, Text, TouchableHighlight, View,
} from 'react-native'; // ImageSourcePropType,

import Icon from 'react-native-vector-icons/Ionicons';
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
  spreadRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  listButton: {
    justifyContent: 'flex-start',
    marginBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.black,
    paddingVertical: 0,
  },
  listButtonText: {
    paddingVertical: px(10),
    paddingLeft: px(5),
    fontFamily: 'Museo-700',
    fontSize: px(20),
    letterSpacing: 0,
  },


  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
});

/* We provide a couple different types of buttons.
 * The default is "NORMAL", and looks like what we normally
 * think of buttons: centered text, surrounded with a border.
 * The other is "LIST", and these buttons only have a bottom border,
 * plus the text is a bit lighter.
*/
type ButtonVariant = "NORMAL" | "LIST";
export const ButtonVariants = {
  NORMAL: "NORMAL",
  LIST: "LIST",
};

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
  buttonStyle?: stylePropType.supportingArrays,
  textStyle?: stylePropType,
  title: string,
  type?: ButtonVariant,
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


function RightIcon(name: string) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Icon name={name} size={px(26)} />
    </View>
  );
}

function Button(props: Props) {
  const {
    accessibilityLabel, backgroundColor, buttonStyle, disabled, emphasis,
    fitContent, fullWidth, icon, onPress, textStyle, title, type,
  } = props;

  let iconElement;
  if (icon) {
    iconElement = (
      <View style={localStyles.icon}>
        {icon}
      </View>
    );
  }

  const isListBtn = type === ButtonVariants.LIST;

  return (
    <View
      style={[
        emphasis && localStyles.emphasis,
        fullWidth && localStyles.fullWidth,
        { alignSelf: 'stretch' },
        fitContent && localStyles.fitContent,
      ]}
    >
      <TouchableHighlight
        accessibilityLabel={accessibilityLabel}
        activeOpacity={0.5}
        disabled={disabled}
        onPress={onPress}
        style={[
          localStyles.buttonContainer,
          backgroundColor && { backgroundColor },
        ]}
        underlayColor={colors.highlight}
      >
        <View
          style={[
            localStyles.button,
            isListBtn && localStyles.listButton,
            buttonStyle && buttonStyle,
            disabled && { backgroundColor: colors.disabled },
          ]}
        >
          <View style={isListBtn && localStyles.spreadRow}>
            <View>
              {
                icon && iconElement
              }
              <Text
                style={[
                  localStyles.buttonText,
                  isListBtn && localStyles.listButtonText,
                  textStyle && textStyle,
                  // style={localStyles.result_text}
                ]}
              >
                {title}
              </Text>
            </View>
            {isListBtn && RightIcon('ios-arrow-forward')}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

Button.defaultProps = defaultProps;

export default Button;
