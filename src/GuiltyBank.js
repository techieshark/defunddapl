// @flow
import React from 'react';
import {
  Navigator, ScrollView, StyleSheet, Text, View,
} from 'react-native';

import constants from './constants';
import screens from './screens';
import styles, { px } from './styles';
import Amount from './Amount';
import Button from './Button';
import type { Bank } from './banks';

const localStyles = StyleSheet.create({
  textStyle: {
    fontSize: px(21), /* Also in Step1Scene - todo put elsewhere */
    letterSpacing: 3,
  },
  amountText: {
    // fontSize: 41,
    fontSize: px(40),
  },
});

type Props = {
  bank: Bank,
  navigator: Navigator,
};

function GuiltyBank(props: Props) {
  return (
    <View
      style={[
        styles.main,
        styles.spaceBelow,
        { marginTop: px(constants.SPACING_LARGE) }]}
    >
      <ScrollView>
        <Text
          style={[
            styles.text, styles.text_size_l,
            { fontSize: px(30), textAlign: 'left' },
          ]}
        >
          { props.bank.name }
          {' '}
is funding the Dakota Access Pipeline with
        </Text>
        <Amount amount={props.bank.amount} textStyle={localStyles.amountText} />
        <Text
          style={[styles.text, { fontSize: px(22), textAlign: 'left' }]}
        >
belonging to you and other customers.
          {' '}
        </Text>
      </ScrollView>
      <Button
        color="white"
        onPress={() => props.navigator.push({
          title: 'Step 1', // Defund DAPL: Step 1
          screen: screens.STEP1,
          bank: props.bank,
        })}
        title="DEFUND THEM"
        accessibilityLabel="Divest from your bank"
        textStyle={localStyles.textStyle}
        buttonStyle={styles.button_narrow}
      />
    </View>
  );
}

export default GuiltyBank;
