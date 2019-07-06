// @flow

import React, { Component } from 'react';
import {
  Alert, Modal, Navigator, StyleSheet, Text, View,
} from 'react-native';

import Communications from 'react-native-communications';

import Button from './Button';
import Container from './Container';
import ProgressIndicatorDots from './ProgressIndicatorDots';
import TextInput from './TextInput';
import styles, { px } from './styles';
import screens from './screens';

// import type is a flow extension, FYI.
// and it requires airbnb-config-eslint v14 and later
// as that uses "import/no-duplicates" instead of "no-duplicate-imports"
// see also: https://github.com/airbnb/javascript/issues/1054
import type { Bank } from './banks';

const localStyles = StyleSheet.create({
  actionTip: {
    textAlign: 'left',
    color: '#25A8E1',
    fontSize: px(16),
    marginTop: px(26),
  },
  textStyle: {
    fontSize: px(21),
    letterSpacing: 3,
  },
  nextButton: {
    paddingHorizontal: 80,
  },
});


type Props = {
  bank: Bank,
  navigator: Navigator,
};

function openCall(number: string) {
  setTimeout(() => {
    const prompt = true;
    Communications.phonecall(number, prompt);
  }, 300);
}

function renderCallButton(number: string) {
  return (
    <Button
      title="CALL THEM"
      accessibilityLabel="Call this bank"
      buttonStyle={styles.button_narrow}
      textStyle={localStyles.textStyle}
      onPress={() => {
        openCall(number);
      }}
    />
  );
}

function renderNumberMissing() {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: px(22), marginHorizontal: px(30), textAlign: 'center', marginBottom: px(30),
        }]}
    >
Sorry, we don&#39;t have a phone number yet.
    </Text>
  );
}

class Step1Scene extends Component {
  props: Props;

  state: {
    modalVisible: boolean,
    name: ?string,
    textSoFar: ?string,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      modalVisible: false,
      name: undefined,
      textSoFar: undefined,
    };

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
    const { bank } = this.props;

    const anonymousUser = 'Your former customer';
    const msgBody = `Dear ${bank.emailAddressee}:

      I am alarmed to learn that ${bank.name} has provided ${bank.amount} `
      + `in funding to the Dakota Access Pipeline.

      That is money that belongs to me and other customers, and I don't support it funding a `
      + `fossil fuel project which threatens the health and safety of the Lakota people `
      + `of the Sioux nation, millions of people along the Missouri, as well as `
      + `the stability of the climate itself.

      Due to your bank's financial support of the Dakota Access Pipeline, `
      + `I will no longer be banking with ${bank.name}.

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
        this.getMsgBody(),
      );
    }, 300);
  }

  renderCallInfo() {
    const contacts = this.props.bank.phoneContacts;

    if (contacts && contacts.length) {
      return renderCallButton(contacts[0].number);
    }

    return renderNumberMissing();
  }

  renderEmailButton() {
    return (
      <Button
        title="EMAIL THEM"
        accessibilityLabel="Email this bank"
        buttonStyle={styles.button_narrow}
        textStyle={localStyles.textStyle}
        // icon={<Icon style={{ color: colors.primaryTextColor }}
        // name="ios-mail-outline" size={26} />}
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
    const showCallInfo: boolean = !this.props.bank.emailTo;
    const showEmailBtn: boolean = this.props.bank.emailTo != null;

    return (
      <Container style={[styles.stepSpaceAbove]}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { Alert.alert("Modal has been closed."); }}
        >
          <View
            style={[styles.sceneContainer, styles.spaceBelow]}
          >
            <View style={[styles.spaceBetween, styles.stepSpaceAbove]}>
              <View>
                <Text style={styles.text_step}>STEP ONE</Text>
                <Text style={[styles.text, { textAlign: 'left' }]}>Email signature</Text>
                <Text
                  style={[styles.text_minor, { marginBottom: px(36) }]}
                >
Please enter your name to attach it to an email template we prepared earlier.
                </Text>
                <TextInput
                  // style={styles.textinput}
                  placeholder="Enter your name here"
                  onChangeText={textSoFar => this.setState({ textSoFar })}
                />
                <Text style={[styles.text, styles.text_size_s, localStyles.actionTip]}>
                  This will prompt your email app to open.
                  Send your email and return to this app, please.
                </Text>
              </View>
            </View>
            <View>
              <Button
                accessibilityLabel="Open Email"
                title="OPEN EMAIL"
                onPress={() => {
                  this.setState({ name: this.state.textSoFar });
                  // console.warn(`Opening email app w/ name: ${this.state.textSoFar}`);
                  this.openEmail();
                  this.setModalVisible(false);
                }}
              />
              <Button
                accessibilityLabel="Cancel"
                title="CANCEL"
                buttonStyle={[styles.button_narrow, localStyles.nextButton]}
                fitContent
                // buttonStyle={{ borderWidth: 0 }}
                // backgroundColor={colors.modalBackground}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              />
            </View>
          </View>
        </Modal>

        <View>
          <View>
            <Text style={styles.text_step}>STEP ONE</Text>
            <Text style={[styles.text, { textAlign: 'left' }]}>
Let
              {this.props.bank.name}
              {' '}
know your funds
            should not be used to fund
            the Dakota oil pipeline.
            </Text>
          </View>
        </View>
        <View>
          { showCallInfo ? this.renderCallInfo() : null }
          { showEmailBtn ? this.renderEmailButton() : null }
          <Button
            title="NEXT"
            accessibilityLabel="I have emailed my bank."
            fitContent
            buttonStyle={[styles.button_narrow, localStyles.nextButton]}
            textStyle={localStyles.textStyle}
            onPress={() => {
              this.props.navigator.push({
                title: 'Step 2', // step 2: Switch banks
                screen: screens.STEP2,
              });
            }}
          />
          <ProgressIndicatorDots count={4} current={1} />
        </View>
      </Container>
    );
  }
}

export default Step1Scene;
