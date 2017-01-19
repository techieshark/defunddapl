import React, { PropTypes } from 'react';
import { Alert, Linking, Navigator, Text, View } from 'react-native';

import Button from './Button';
import Container from './Container';
import screens from './screens';
import styles from './styles';

/*
     <View style={[styles.container, styles.main]}>
      <View style={{ marginTop:70 }}>
        <Text style={styles.text}>step 5</Text>
      </View>
*/

function Step5Scene(props) {
  return (
    <Container>
      <View>
        <Text style={styles.text}>Help the #DefundDAPL campaign near you.</Text>
      </View>
      <View>
        <Button
          title="Find an action"
          accessibilityLabel="Find an action"
          onPress={() => {
            const url = 'http://everydayofaction.org';
            Alert.alert(
              'Come back soon!',
              `Return after you've found an action`,
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
          title="Create an action"
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
        title="That's it!"
        accessibilityLabel="I did some organizing"
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

Step5Scene.propTypes = {
  navigator: PropTypes.instanceOf(Navigator).isRequired,
};
