// @flow
import React from 'react';
import { Alert, Linking, Navigator, StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import screens from './screens';
import styles, { px } from './styles';


const localStyles = StyleSheet.create({
  textStyle: {
    fontSize: px(21),
    letterSpacing: 3,
  },
  nextButton: {
    paddingHorizontal: px(40),
  },
});

type Props = {
  navigator: Navigator,
}

function Step5Scene(props: Props) {
  return (
    <Container style={[styles.container, styles.stepSpaceAbove, styles.spaceBelow]}>
      <View>
        <Text style={styles.text_step}>STEP FIVE</Text>
        <Text
          style={[styles.text, styles.text_left, { fontSize: 26 }]}
        >Help the #DefundDAPL campaign near you.</Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Museo-700',
            fontSize: px(20),
            textAlign: 'center',
            marginBottom: px(10),
          }}
        >Help the movement near you</Text>
        <Button
          title="FIND AN ACTION"
          accessibilityLabel="Find an action"
          onPress={() => {
            const url = 'http://everydayofaction.org';
            Alert.alert(
              'Come back soon!',
              `Return after you find an action`,
              [
                {
                  text: 'Will do!',
                  onPress: () => {
                    Linking.openURL(url).catch(err => console.error('An error occurred', err));
                  },
                },
              ],
            );
          }}
        />
        <Button
          title="CREATE AN ACTION"
          accessibilityLabel="Create an action"
          onPress={() => {
            const url = 'https://actionnetwork.org/events/8688b2f23f325de5343d6101c92f4107abb5620d/edit';
            Alert.alert(
              'Come back soon!',
              `Return after you've created an action`,
              [
                {
                  text: 'I promise!',
                  onPress: () => {
                    Linking.openURL(url).catch(err => console.error('An error occurred', err));
                  },
                },
              ],
            );
          }}
        />
      </View>
      <Button
        title="FINISH"
        accessibilityLabel="Finish"
        fitContent
        buttonStyle={[styles.button_narrow, localStyles.nextButton]}
        textStyle={localStyles.textStyle}
        onPress={() => {
          props.navigator.push({
            title: 'Thanks!',
            screen: screens.THANKS,
          });
        }}
      />
    </Container>
  );
}


export default Step5Scene;
