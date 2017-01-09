import React, { PropTypes } from 'react';
import { Alert, Text, View } from 'react-native';

import Share from 'react-native-share';

import Button from './Button';
import styles from './styles';


const onPressDefund = () => {
  Alert.alert('THx for tweeting that!');
  Share.shareSingle({ // open
    message: 'I just checked and my bank *is not* funding the ' +
      'Dakota Access Pipeline. Is yours? #DeFundDAPL #DeFundDaplApp',
    // url: 'http://defunddapl.org',
    social: 'twitter',
  }, msg => console.error(`Fail: ${msg}`), msg => Alert.alert(`Success: ${msg}`))
    .then(() => Alert.alert('Yay tweets!'))
    .catch(err => (err && console.error(err))); // err.error
};

function InnocentBank(props) {
  return (
    <View style={styles.main}>
      <View>
        <Text
          style={styles.text}
        >
          Phew!
        </Text>
        <Text style={styles.text}>As far as we know, { props.bankName }
          <Text style={[styles.text, styles.text_italic]}> is not funding </Text>
          the Dakota Access Pipeline.
        </Text>
        <Text style={[styles.text, styles.text_size_s]}>
        Share your good news:
        </Text>
        <View
          style={styles.tweet_container}
          // style={{ borderWidth: 1, borderColor: 'white', borderRadius: 5 }}
        >
          <Text style={[styles.text, styles.text_size_s, styles.text_tweet]}>
            I just checked and my bank *is not*
            funding the Dakota Access Pipeline.
          </Text>
          <Text style={[styles.text, styles.text_size_s, styles.text_tweet]}>
            Is yours?
            #DeFundDAPL #DeFundDaplApp
          </Text>
        </View>
      </View>

      <Button
        color="white"
        onPress={onPressDefund}
        title="Share"
        accessibilityLabel="Share your news"
      />
    </View>
  );
}

InnocentBank.propTypes = {
  bankName: PropTypes.string.isRequired,
};

// <Text style={[styles.text, { textAlign: 'left' }]}>
// Banks that are:
// <Text style={{ fontSize: 14 }}>
//    Citibank (Citigroup), TD Securities,
//   The Bank of Tokyo-Mitsubishi UFJ, Mizuho Bank
//   (all primary leaders of the key DAPL loan) plus
//   Wells Fargo, BNP Paribas, DNB Capital, BBVA Securities,
//   SunTrust, Sumitomo Mitsui Bank, Credit Agricole, ABN Amro Capital,
//   Intesa SanPaolo, ING Bank, Natixis, BayernLB, ICBC London,
//   Societe Genera, Scotiabank, Citizens Bank, Comerica Bank,
//   U.S. Bank, PNC Bank, Barclays, JPMorgan Chase, Bank of America,
//   Deutsche Bank, Compass Bank, Credit Suisse, DNB Capital/ASA,
//   Royal Bank of Canada, UBS, Goldman Sachs, Morgan Stanley,
//   Origin Bank (formerly Community Trust), and HSBC Bank.
// </Text>
// </Text>

export default InnocentBank;
