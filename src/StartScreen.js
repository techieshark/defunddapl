// @flow

import React from 'react';
import {
  Navigator,
  Text,
  View,
} from 'react-native';

import constants from './constants';
import screens from './screens';
import styles, { px } from './styles';

import Button from './Button';

/**
*         [#DefundDAPL]
*
*
*
*  Join the divestment movement
*         [TAKE ACTION]
*/

type Props = {
  navigator: Navigator,
};


function StartScreen(props: Props) {
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
            title="TAKE ACTION"
            accessibilityLabel="Take action"
            onPress={() => {
              props.navigator.push({
                title: 'Lookup',
                screen: screens.LOOKUP,
              });
              console.log('Taking action!');
            }}
          />
        </View>
      </View>
    </View>

  );
}

export default StartScreen;
