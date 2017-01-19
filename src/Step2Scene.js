import React, { PropTypes } from 'react';
import { Alert, Linking, Navigator, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import screens from './screens';
import styles from './styles';

/*
      <View>
        <Text style={styles.text}>step 2</Text>
      </View>
*/


function Step2Scene(props) {
  return (
    <Container>
      <View style={styles.spaceAround}>
        <Text style={styles.text}>Open an account at a local credit union.
        Then transfer your money, set up payments at the new bank, and close your old account.
        </Text>
      </View>
      <View>
        <Button
          title="Find a credit union"
          accessibilityLabel="Find a credit union"
          onPress={() => {
            const url = "http://www.defunddapl.org/alternatives";
            Alert.alert(
              'Opens new webpage',
              `Return after you've found a new bank.`,
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
          title="Done"
          accessibilityLabel="I have moved my money to a better bank"
          onPress={() => {
            props.navigator.push({
              title: 'Step 3', // How much did you move
              screen: screens.STEP3,
            });
          }}
        />
      </View>
    </Container>
  );
}

// import { Webview } from 'react-native';
  //      <WebView
      //   source={{ uri: 'http://www.defunddapl.org/alternatives' }}
      //   style={{ marginTop: 20 }}
      // />

export default Step2Scene;

Step2Scene.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
