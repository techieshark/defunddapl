// @flow

import React, { Component } from 'react'; // , PropTypes
import { Alert, Modal, Navigator, Text, TextInput, View } from 'react-native';

// import Share from 'react-native-share';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from './Button';
import Container from './Container';
import styles from './styles';
// import { findBank } from './banks';

// import type is a flow extension, FYI.
// and it requires airbnb-config-eslint v14 and later
// as that uses "import/no-duplicates" instead of "no-duplicate-imports"
// see also: https://github.com/airbnb/javascript/issues/1054
import type { Bank } from './banks';

// import banks, { findBank } from './banks';
import colors from './colors';
import screens from './screens';

type Props = {
  bank: Bank,
  // bankName: string,
  navigator: typeof Navigator,
};


class Step1Scene extends Component {

  props: Props;

  state: {
    modalVisible: boolean,
    name: ?string,
    textSoFar: ?string,
  };

  // bank: Bank;

  // static findBank(name: string): Bank {
  //   return banks.find(b => b.name === name);
  // }

  constructor(props: Props) { // TODO - how to get props from a class method?
    super(props);
    this.state = {
      modalVisible: false,
      name: undefined,
      textSoFar: undefined,
    };

    // this.bank = findBank(props.bankName);

    // this.bank = this.findBank(props.bankName);
    // this.bank = banks.find(b => b.name === props.bankName);

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
  }

  getMsgBody() {
    const bank = this.props.bank;

    const anonymousUser = 'Your former customer';
    const msgBody = `Dear ${bank.emailAddressee}:

      I am alarmed to learn that ${bank.name} has provided ${bank.amount} ` +
      `in funding to the Dakota Access Pipeline.

      That is money that belongs to me and other customers, and I don't support it funding a ` +
      `fossil fuel project which threatens the health and safety of the Lakota people ` +
      `of the Sioux nation, millions of people along the Missouri, as well as ` +
      `the stability of the climate itself.

      Due to your bank's financial support of the Dakota Access Pipeline, ` +
      `I will no longer be banking with ${bank.name}.

      Sincerely,
      ${this.state.name || anonymousUser}`;
    return msgBody;
  }

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  openEmail() {
    setTimeout(() => {
      Communications.email(
        this.props.bank.emailTo,
        this.props.bank.emailCC,
        null /* bcc */,
        'Divesting from the Dakota Pipeline', /* subject */
        this.getMsgBody());
    }, 300);
  }

  renderCallInfo() {
    const contacts = this.props.bank.phoneContacts;

    let contactInfo;
    if (!contacts || !contacts.length) {
      contactInfo = `Sorry, we don't have a phone number yet.`;
    } else {
      contactInfo = contacts[0].number;
    }

    return (
      <Text style={styles.text}>Call them at: { contactInfo } </Text>
    );
  }

  renderEmailButton() {
    return (
      <Button
        title="Email this bank"
        accessibilityLabel="Email this bank"
        icon={<Icon style={{ color: "white" }} name="ios-mail-outline" size={26} />}
        onPress={() => {
          if (!this.state.name) {
            this.setModalVisible(true);
          } else {
            // console.warn(`Sending email using name: ${this.state.name}`);
            this.openEmail();
          }
        }}
      />
    );
  }

  render() {
    const showCallInfo : boolean = !this.props.bank.emailTo;

    return (
      <Container>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert("Modal has been closed."); }}
        >
          <View
            style={{ flex: 1, backgroundColor: colors.modalBackground }} // slategrey
          >
            <View style={styles.spaceAround}>
              <View style={{ padding: 15 }}>
                <Text style={styles.text}>What&#8217;s your name?</Text>
                <Text style={[styles.text, styles.text_size_s]}>(For the email.)</Text>
                <TextInput
                  style={styles.textinput}
                  placeholder="Firstname Lastname"
                  onChangeText={textSoFar => this.setState({ textSoFar })}
                />
                <Text style={[styles.text, styles.text_size_s]}>
                  Next, your email app will open. Send your email and return to this app.
                </Text>
                <Button
                  accessibilityLabel="Open Email"
                  title="Open Email"
                  onPress={() => {
                    this.setState({ name: this.state.textSoFar });
                    // console.warn(`Opening email app w/ name: ${this.state.textSoFar}`);
                    this.openEmail();
                    this.setModalVisible(false);
                  }}
                />
              </View>
            </View>
            <Button
              accessibilityLabel="Cancel"
              title="Cancel"
              backgroundColor={colors.modalBackground}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          </View>

        </Modal>


        <View style={styles.spaceAround}>
          <Text style={styles.text}>Let {this.props.bank.name} know your funds
          shouldn’t be used to fund
          the Dakota oil pipeline.
          </Text>
          { showCallInfo ? this.renderCallInfo() : null }
        </View>
        <View>
          { this.props.bank.emailTo ? this.renderEmailButton() : null }
          <Button
            title="Next"
            accessibilityLabel="I have emailed my bank."
            onPress={() => {
              this.props.navigator.push({
                title: 'Step 2', // step 2: Switch banks
                screen: screens.STEP2,
              });
            }}
          />
        </View>
      </Container>
    );
  }
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

// Step1Scene.propTypes = {
//   bankName: PropTypes.string.isRequired,
//   navigator: PropTypes.instanceOf(Navigator).isRequired,
// };
