import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

import BankSearch from './BankSearch';
import styles from './styles';

/**
Is your bank funding
the pipeline?

Check:
[ Bank of... ]
[ Search for 'Bank of']
[ Bank of Nova Scotia ]
[ Bank of America ]
*/


function BankCheckScene(props) {
  // keep here: screenHeight will update when orientation changes
  // const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <BankSearch onClickResult={props.onBankProvided} />
      <Text style={styles.text}>Is your bank funding the pipeline?</Text>
    </View>
  );
}

//       <Text style={styles.text}>Check:</Text>

// const onPressWells = () => {
//   Alert.alert('Wells Fargo sucks!');
// }

// const onPressBECU = () => {
//   Alert.alert('BECU - not bad');
// }


// (
//   <Button
//     color="white"
//     onPress={props.onPressWells}
//     title="Wells Fargo"
//     accessibilityLabel="Lookup Wells Fargo"
//   />
//   <Button
//     color="white"
//     onPress={props.onPressBECU}
//     title="BECU"
//     accessibilityLabel="Lookup BECU"
//   />
// )

// BankCheckScene.propTypes = {
  // title: PropTypes.string.isRequired,
  // onPressWells: PropTypes.func.isRequired,
  // onPressBECU: PropTypes.func.isRequired,

BankCheckScene.propTypes = {
  onBankProvided: PropTypes.func.isRequired,
};

export default BankCheckScene;
