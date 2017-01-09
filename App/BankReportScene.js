import React, { PropTypes } from 'react';
import { Navigator, View } from 'react-native'; // TouchableHighlight,

import Button from './Button';
import GuiltyBank from './GuiltyBank';
import InnocentBank from './InnocentBank';
import styles from './styles';
import banks from './banks';

function getFundingStatus(bankName) {
  const status = banks.find(bank => bank.name === bankName);
  return status || { funding: false, bank: bankName, amount: '$0' };
}


// export default class BankReportScene extends Component {
function BankReportScene(props) {
  const bankStatus = getFundingStatus(props.bankName);
  const isFunding = bankStatus.funding;

  // keep here: screenHeight will update when orientation changes
  // const screenHeight = Dimensions.get('window').height;

  const bankView = isFunding ? (
    <GuiltyBank
      bankName={bankStatus.name}
      amount={bankStatus.amount}
      navigator={props.navigator}
    />
  ) : (
    <InnocentBank bankName={bankStatus.bank} />
  );

  return (
    <View style={styles.container}>
      { bankView }
      <Button
        style={{ marginTop: 10 }}
        color="white"
        onPress={() => props.navigator.pop()}
        title="Restart"
        accessibilityLabel="Return to app start"
      />
    </View>
  );
}


BankReportScene.propTypes = {
  bankName: PropTypes.string.isRequired,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};


export default BankReportScene;


/** Produces a view like:

Yikes!

Wells Fargo  is
funding the Dakota Access Pipeline
with
$470,000,000
belonging to you and other customers.

[defund them]

--- or a view like ---

As far as we know, BECU
is not funding
the Dakota Access Pipeline.

Banks that are:
Wells Fargo
US Bank
Morgan Stanley
...
...

Share the good news:

"I just checked and my bank *is not*
funding the Dakota Access Pipeline.
#winning

Is yours?
#DeFundDAPL #DeFundDaplApp"

*/

