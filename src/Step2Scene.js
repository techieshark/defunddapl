// @flow

import React from 'react';
import { Alert, Linking, Navigator, StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import ProgressIndicatorDots from './ProgressIndicatorDots';
import screens from './screens';
import styles, { px } from './styles';

const localStyles = StyleSheet.create({
  textStyle: {
    fontSize: px(21),
    letterSpacing: 3,
  },
  buttonStyleExtraPadding: {
    paddingHorizontal: 15,
  },
  nextButton: {
    paddingHorizontal: 80,
  },
});

type Props = {
  navigator: Navigator,
}


function Step2Scene(props: Props) {
  return (
    <Container style={styles.stepSpaceAbove}>
      <View>
        <View>
          <Text style={styles.text_step}>STEP TWO</Text>
          <Text
            style={[styles.text, styles.text_left]}
          >Open an account with your local credit union.</Text>
          <Text style={[styles.text_minor, { marginTop: 20 }]}>Transfer your money.</Text>
          <Text style={styles.text_minor}>Set up payments.</Text>
          <Text style={styles.text_minor}>Close your old account.</Text>
          <Text style={styles.text_minor}>Done!</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: -10 /* compensate for long button */ }}>
        <Button
          title="FIND A CREDIT UNION"
          accessibilityLabel="Find a credit union"
          buttonStyle={localStyles.buttonStyleExtraPadding}
          fitContent
          onPress={() => {
            const url = "http://www.defunddapl.org/alternatives";
            Alert.alert(
              'Opens new webpage',
              `Return after you find a new bank.`,
              [
                {
                  text: 'OK, I will!',
                  onPress: () => {
                    Linking.openURL(url).catch(err => console.error('An error occurred', err));
                  },
                },
              ],
            );
          }}
        />
        <Button
          title="NEXT"
          accessibilityLabel="I have moved my money to a better bank"
          fitContent
          buttonStyle={[styles.button_narrow, localStyles.nextButton]}
          textStyle={localStyles.textStyle}
          onPress={() => {
            props.navigator.push({
              title: 'Step 3', // How much did you move
              screen: screens.STEP3,
            });
          }}
        />
        <ProgressIndicatorDots count={4} current={2} />
      </View>
    </Container>
  );
}

export default Step2Scene;
