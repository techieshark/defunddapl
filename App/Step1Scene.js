import React, { PropTypes } from 'react';
import { Alert, Text, View } from 'react-native';

import Button from './Button';
import styles from './styles';
// import banks from './banks';


function Step1Scene(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>step 1</Text>
      </View>
      <View>
        <Text style={styles.text}>Let {props.bankName} know your funds
        shouldn’t be used to fund
        the Dakota oil pipeline.
        </Text>
      </View>
      <Button
        title="Email your bank"
        accessibilityLabel="Email your bank"
        onPress={() => Alert.alert('Thanks for emailing!')}
      />
    </View>
  );
}

export default Step1Scene;

Step1Scene.propTypes = {
  bankName: PropTypes.string.isRequired,
};
