// @flow
import React from 'react';
import {
  Alert, Linking, Navigator, StyleSheet, Text, View,
} from 'react-native';

import Button from './Button';
import Container from './Container';
import Gallery from './Gallery';
import ProgressIndicatorDots from './ProgressIndicatorDots';
import screens from './screens';
import styles, { px } from './styles';

const localStyles = StyleSheet.create({
  textStyle: {
    fontSize: px(21),
    letterSpacing: 3,
  },
  buttonStyleExtraPadding: {
    paddingHorizontal: px(15),
  },
  nextButton: {
    paddingHorizontal: px(80),
  },
});

type Props = {
  navigator: Navigator,
}


function Step4Scene(props: Props) {
  return (
    <Container style={styles.stepSpaceAbove}>
      <View>
        <Text style={styles.text_step}>STEP FOUR</Text>
        <Text
          style={[styles.text, styles.text_left, { fontSize: 26 }]}
        >
Post about #DefundDAPL
        </Text>
        <Text style={[styles.text_minor]}>Find inspiration below</Text>
      </View>
      <Gallery />
      <Button
        title="OPEN INSTAGRAM" // TODO what if they don't have instagram installed?
        accessibilityLabel="Post on Instagram"
        fitContent
        buttonStyle={[styles.button_narrow, localStyles.buttonStyleExtraPadding]}
        textStyle={localStyles.textStyle}
        onPress={() => {
          const url = 'instagram://tag?name=defunddapl'; // or just /app
          Alert.alert(
            'Opens Instagram',
            `Return after you post.`,
            [
              {
                text: 'Roger that!',
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
        accessibilityLabel="I have posted on Instagram"
        fitContent
        buttonStyle={[styles.button_narrow, localStyles.nextButton]}
        textStyle={localStyles.textStyle}
        onPress={() => {
          props.navigator.push({
            title: 'Step 5', // : Organize for #DefundDAPL.
            screen: screens.STEP5,
          });
        }}
      />
      <ProgressIndicatorDots count={4} current={4} />
    </Container>
  );
}


export default Step4Scene;
