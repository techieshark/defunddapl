import React, { PropTypes } from 'react';
import { Alert, Linking, Navigator, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import screens from './screens';
import styles from './styles';

/*
      <View>
        <Text style={styles.text}>step 3</Text>
      </View>
      */

function Step3Scene(props) {
  return (
    <Container>
      <View style={styles.spaceAround}>
        <Text style={styles.text}>How much did you move?
        Add your withdrawal to our tracker so we know our collective divestment total.
        </Text>
      </View>
      <View>
        <Button
          title="Add your total"
          accessibilityLabel="Add your total withdrawal to our tracker"
          onPress={() => {
            const formId = '1FAIpQLSf-0GLmUhXxC1A5UcTe8vD0hQqcfY-Rl70RAXc-Vvq8UMASrw';
            const url = `https://docs.google.com/forms/d/e/${formId}/viewform`;
            Alert.alert(
              'Opens new webpage',
              `Return after you've added your total.`,
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
          title="Done"
          accessibilityLabel="I have tracked my withdrawal"
          onPress={() => {
            props.navigator.push({
              title: 'Step 4', // : Post about #DefundDAPL.
              screen: screens.STEP4,
            });
          }}
        />
      </View>
    </Container>
  );
}

export default Step3Scene;

Step3Scene.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
