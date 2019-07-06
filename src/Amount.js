// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import stylePropType from 'react-style-proptype';
import styles, { px } from './styles';

const localStyles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Futura-Bold',
    fontSize: px(44),
    paddingVertical: px(5),
    paddingHorizontal: px(6),
    marginVertical: px(10),
    textAlign: 'center',
  },
});


type Props = {
  textStyle?: stylePropType,
  amount: string,
};

function Amount(props: Props) {
  return (
    <Text
      style={[
        styles.text_impact, localStyles.textStyle,
        props.textStyle && props.textStyle,
      ]}
    >
      { props.amount }
    </Text>
  );
}

Amount.defaultProps = {
  textStyle: undefined,
};

export default Amount;
