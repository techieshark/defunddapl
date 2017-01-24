import React, { Component, PropTypes } from 'react';
import { Alert, Modal, Navigator, Text, TextInput, View } from 'react-native';

// import Share from 'react-native-share';
import Communications from 'react-native-communications';

import Button from './Button';
import Container from './Container';
import styles from './styles';
import banks from './banks';
import screens from './screens';


class Step1Scene extends Component {

  constructor(props) {
    super(props);
    this.state = { modalVisible: false, name: undefined, textSoFar: undefined };

    this.bank = banks.find(b => b.name === props.bankName);

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
    const bank = this.bank;

    const address = bank.emailInsideAddress ? `${bank.emailInsideAddress}\n` : '';
    const anonymousUser = 'Your former customer';
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
      ${this.state.name || anonymousUser}`;
    return msgBody;
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  openEmail() {
    setTimeout(() => {
      Communications.email(
        this.bank.emailTo,
        this.bank.emailCC,
        null /* bcc */,
        'Divesting from the Dakota Pipeline', /* subject */
        this.getMsgBody());
    }, 300);
  }

  render() {
    return (
      <Container>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert("Modal has been closed."); }}
        >
          <View
            style={{ flex: 1, backgroundColor: "#C3C9D7" }} // slategrey
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
              style={{ backgroundColor: "black" }}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          </View>

        </Modal>


        <View style={styles.spaceAround}>
          <Text style={styles.text}>Let {this.props.bankName} know your funds
          shouldn’t be used to fund
          the Dakota oil pipeline.
          </Text>
        </View>
        <View>
          <Button
            title="Email this bank"
            accessibilityLabel="Email this bank"
            onPress={() => {
              if (!this.state.name) {
                this.setModalVisible(true);
              } else {
                // console.warn(`Sending email using name: ${this.state.name}`);
                this.openEmail();
              }
            }}
          />
          <Button
            title="Done!"
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

Step1Scene.propTypes = {
  bankName: PropTypes.string.isRequired,
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
