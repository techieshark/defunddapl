// @flow

import React from 'react';
import {
  Alert,
  Navigator,
  Text,
  View,
} from 'react-native';

import codePush from 'react-native-code-push';

import constants from './constants';
import styles, { px } from './styles';

import Button from './Button';

type Props = {
  navigator: Navigator,
};

function CodePushTest(props: Props) {
  // keep here: screenHeight will update when orientation changes
  // const screenHeight = Dimensions.get('window').height;
// flexDirection: 'row'
  return (

    <View style={styles.container}>

      <View style={{ flex: 1, alignItems: 'center', marginTop: constants.SPACING_SMALL }}>
        <Text style={[styles.text, styles.text_logo]}>#DefundDAPL</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: px(40),
              // marginBottom: 40
            },
            styles.spaceBelow,
          ]}
        >
          <Text style={[styles.text, styles.text_size_s]}>Join the divestment movement</Text>
          <Button
            title="TEST CODEPUSH"
            accessibilityLabel="Take action"
            onPress={() => {
              console.log('Pressed button to test codepush!');
              codePush.sync({
                updateDialog: true,
                installMode: codePush.InstallMode.IMMEDIATE,
              });
              console.log('Testing codepush!');
              Alert.alert('Testing codepush!');
            }}
          />
        </View>
      </View>
    </View>

  );
}

export default CodePushTest;
