import React, { PropTypes } from 'react';
import { Navigator, Text, View } from 'react-native';

import screens from './screens';
import styles from './styles';
import Button from './Button';

// const onPressDefund = () => {
//   Alert.alert('Congrats, your money is divested from this bank!');
// };

function GuiltyBank(props) {
  return (
    <View style={styles.main}>
      <View>
        <Text
          style={[styles.text, styles.text_size_l]}
        >
          Yikes!
        </Text>
        <Text style={[styles.text, styles.text_size_l]}>{ props.bankName }
          <Text style={styles.text_italic}> is funding </Text>
          the Dakota Access Pipeline
          with <Text style={styles.text_impact}>{ props.amount } </Text>
          belonging to you and other customers.
        </Text>
      </View>
      <Button
        color="white"
        onPress={() => props.navigator.push({
          title: 'Defund DAPL: Step 1',
          screen: screens.STEP1,
          bankName: props.bankName,
        })}
        title="Defund them"
        accessibilityLabel="Divest from your bank"
      />
    </View>
  );
}

GuiltyBank.propTypes = {
  bankName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};

export default GuiltyBank;
