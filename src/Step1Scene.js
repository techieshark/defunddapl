import React, { PropTypes } from 'react';
import { Navigator, Text, View } from 'react-native';

// import Share from 'react-native-share';
import Communications from 'react-native-communications';

import Button from './Button';
import Container from './Container';
import styles from './styles';
import banks from './banks';
import screens from './screens';

function Step1Scene(props) {
  const bank = banks.find(b => b.name === props.bankName);

  // example bank:
  //   {
  //   name: 'Wells Fargo',
  //   funding: true,
  //   amount: '$467,000,000',
  //   emailAddressee: 'CEO Sloan',
  //   emailTo: 'CEO Timothy J. Sloan <timothy.j.sloan@wellsfargo.com>',
  //   emailCC: 'BoardCommunications@wellsfargo.com',
  //   },

  // TODO: handle case where emailAddressee is null (we have no one we can email)

  const user = 'Peter W';
  const msgSubject = 'Divesting from the Dakota Pipeline';
  const address = bank.emailInsideAddress ? `${bank.emailInsideAddress}\n` : '';

  const msgBody = `${address} Dear ${bank.emailAddressee}:

    I am alarmed to learn that ${bank.name} has provided ${bank.amount} ` +
    `in funding to the Dakota Access Pipeline.

    That is money that belongs to me and other customers, and I don't support it funding a ` +
    `fossil fuel project which threatens the health and safety of the Lakota people ` +
    `of the Sioux nation, millions of people along the Missouri, as well as ` +
    `the stability of the climate itself.

    Due to your bank's financial support of the Dakota Access Pipeline, ` +
    `I will no longer be banking with ${bank.name}.

    Sincerely,
    ${user}`;

// //
// <View style={[styles.container, styles.main, { justifyContent: 'space-around' }]}>
//       <View>
//         <Text style={styles.text}>step 1</Text>
//       </View>
// [styles.main, styles.container]

  return (
    <Container>
      <View style={styles.spaceAround}>
        <Text style={styles.text}>Let {props.bankName} know your funds
        shouldn’t be used to fund
        the Dakota oil pipeline.
        </Text>
      </View>
      <View>
        <Button
          title="Email this bank"
          accessibilityLabel="Email this bank"
          onPress={() => {
            setTimeout(() => {
              Communications.email(bank.emailTo, bank.emailCC, null /* bcc */, msgSubject, msgBody);
            }, 300);
          }}
        />
        <Button
          title="Done!"
          accessibilityLabel="I have emailed my bank."
          onPress={() => {
            props.navigator.push({
              title: 'Step 2', // step 2: Switch banks
              screen: screens.STEP2,
            });
          }}
        />
      </View>
    </Container>
  );
}


// <Button iconSrc={{ uri: EMAIL_ICON }}
//                   onPress={()=>{
//               this.onCancel();
//               setTimeout(() => {
//                 Share.shareSingle(Object.assign(shareOptions, {
//                   "social": "email"
//                 }));
//               },300);
//             }}>Email</Button>

export default Step1Scene;

Step1Scene.propTypes = {
  bankName: PropTypes.string.isRequired,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
