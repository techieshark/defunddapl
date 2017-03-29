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
    paddingHorizontal: px(15),
  },
  nextButton: {
    paddingHorizontal: px(80),
  },
});

type Props = {
  navigator: Navigator,
}

function Step3Scene(props: Props) {
  return (
    <Container style={styles.stepSpaceAbove}>
      <View>
        <View>
          <Text style={styles.text_step}>STEP THREE</Text>
          <Text style={[styles.text, styles.text_left]}>How much did you withdraw?</Text>
          <Text style={[styles.text_minor, { marginTop: 20 }]}>This helps us track how</Text>
          <Text style={styles.text_minor}>much has been withdrawn from the banks.</Text>
        </View>
      </View>
      <View>
        <Button
          title="ADD YOUR TOTAL"
          accessibilityLabel="Add your total withdrawal to our tracker"
          buttonStyle={localStyles.buttonStyleExtraPadding}
          fitContent
          onPress={() => {
            const formId = '1FAIpQLSf-0GLmUhXxC1A5UcTe8vD0hQqcfY-Rl70RAXc-Vvq8UMASrw';
            const url = `https://docs.google.com/forms/d/e/${formId}/viewform`;
            Alert.alert(
              'Opens new webpage',
              'Return after you add your total.',
              [
                {
                  text: 'Thanks, I will!',
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
          accessibilityLabel="I have tracked my withdrawal"
          fitContent
          buttonStyle={[styles.button_narrow, localStyles.nextButton]}
          textStyle={localStyles.textStyle}
          onPress={() => {
            props.navigator.push({
              title: 'Step 4', // : Post about #DefundDAPL.
              screen: screens.STEP4,
            });
          }}
        />
        <ProgressIndicatorDots count={4} current={3} />
      </View>
    </Container>
  );
}

export default Step3Scene;

