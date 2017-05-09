// @flow
import React from 'react';
import { Navigator, StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import DivestedTotal from './DivestedTotal';
import constants from './constants';
import screens from './screens';
import styles, { px } from './styles';

const localStyles = StyleSheet.create({
  finishBtnText: { // based on Step4Scene textStyle
    fontSize: px(21),
    letterSpacing: 3,
  },
  finishBtn: {
    paddingHorizontal: px(20),
  },
  text_mini: {
    fontSize: px(19),
    fontFamily: 'Museo-300',
    marginTop: px(15),
  },
  spacer: {
    height: 0,
    marginTop: 10,
  },
});

type Props = {
  navigator: Navigator,
};

function ThanksScene(props: Props) {
  return (
    <Container
      style={[
        styles.spaceBelow,
        { marginTop: px(constants.SPACING_LARGE) }]}
    >
      <View>
        <View>
          <Text style={[styles.text, { textAlign: 'left', fontSize: px(28) }]}>Thank you for standing with Standing Rock!</Text>
        </View>
        <DivestedTotal />
        <View>
          <Text style={[styles.text_minor, { fontSize: px(19), fontFamily: 'Museo-300', marginTop: px(15) }]}>
            Total personal accounts divested from the Dakota Access Pipeline.
          </Text>
          <View style={localStyles.spacer} />
          <Text style={[styles.text_minor, localStyles.text_mini]}>
            Plus over $5 billion in city and institutional divestments!
          </Text>
        </View>
      </View>
      <Button
        title="RETURN TO START"
        accessibilityLabel="Return to Start"
        buttonStyle={[styles.button_narrow, localStyles.finishBtn]}
        textStyle={localStyles.finishBtnText}
        onPress={() => {
          props.navigator.push({
            title: 'Start',
            screen: screens.HOME,
          });
        }}
      />
    </Container>
  );
}

export default ThanksScene;
