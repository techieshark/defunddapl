// @flow
import React, { PropTypes } from 'react';
import { Navigator, View } from 'react-native'; // TouchableHighlight,

import GuiltyBank from './GuiltyBank';
import InnocentBank from './InnocentBank';
import styles from './styles';
import { findBank } from './banks'; // banks

type Props = {
  bankName: string,
  navigator: typeof Navigator,
};

// export default class BankReportScene extends Component {
function BankReportScene(props: Props) {
  const maybeBank = findBank(props.bankName); // bank, or undefined if not found
  // keep here: screenHeight will update when orientation changes
  // const screenHeight = Dimensions.get('window').height;

  const bankView = maybeBank ? (
    <GuiltyBank
      bank={maybeBank}
      navigator={props.navigator}
    />
  ) : (
    <InnocentBank bankName={props.bankName} />
  );

  return (
    <View style={styles.container}>
      { bankView }
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

