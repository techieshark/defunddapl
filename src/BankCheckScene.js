// @flow
import React from 'react';
import {
  Navigator,
  Text,
  View,
} from 'react-native';

import BankSearch from './BankSearch';
import constants from './constants';
import screens from './screens';
import styles, { px } from './styles';


/**
Is your bank funding
the pipeline?

Check:
[ Bank of... ]
[ Search for 'Bank of']
[ Bank of Nova Scotia ]
[ Bank of America ]
*/

type Props = {
  navigator: Navigator,
}

function BankCheckScene(props: Props) {
  return (
    <View style={[styles.container, { marginTop: constants.SPACING_SMALL }]}>
      <BankSearch
        onClickResult={(bankName) => {
          props.navigator.push({
            title: 'Verdict', // Bank lookup results
            screen: screens.REPORT,
            bankName,
          });
        }}
      />
      <Text
        style={[
          styles.text,
          {
            fontSize: px(36),
            textAlign: 'left',
            marginTop: px(constants.SPACING_MEDIUM), /* marginTop: px(40) */
          },
        ]}
      >Is your bank funding the pipeline?
      </Text>
    </View>
  );
}

export default BankCheckScene;
