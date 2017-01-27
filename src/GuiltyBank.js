// @flow
import React from 'react'; // , { PropTypes }
import { Navigator, ScrollView, Text, View } from 'react-native';

import screens from './screens';
import styles from './styles';
import Button from './Button';
import type { Bank } from './banks';

type Props = {
  bank: Bank,
  navigator: typeof Navigator,
};

function GuiltyBank(props: Props) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text
          style={[styles.text, styles.text_size_l]}
        >
          Yikes!
        </Text>
        <Text style={[styles.text, styles.text_size_l]}>{ props.bank.name }
          <Text style={styles.text_italic}> is funding </Text>
          the Dakota Access Pipeline
          with <Text style={styles.text_impact}>{ props.bank.amount } </Text>
          belonging to you and other customers.
        </Text>
      </ScrollView>
      <Button
        color="white"
        onPress={() => props.navigator.push({
          title: 'Step 1', // Defund DAPL: Step 1
          screen: screens.STEP1,
          bank: props.bank,
        })}
        title="Defund them"
        accessibilityLabel="Divest from your bank"
      />
    </View>
  );
}

// GuiltyBank.propTypes = {
//   bankName: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   navigator: PropTypes.instanceOf(Navigator).isRequired,
// };

export default GuiltyBank;
